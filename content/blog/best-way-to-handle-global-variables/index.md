---
title: Bring Legacy Code under tests by handling global variables
date: 2020-05-04T22:42:00.306Z
image: /assets/global-variables.jpg
description: >-
  What's the best way to deal with these annoying global variables? Make them explicit.
tags:
  - code feels impossible to maintain
  - not sure where to start refactoring
---

![](/assets/global-variables.jpg)

> "I have this Legacy codebase I need to change but I'm unsure of how to deal with globals. There are so many…"

Global variables are frequent in codebases that were not designed with tests in mind.

That's because they're very convenient to write. Simply export the data you need and plug the reference where you need it. That seems a convenient way to share data!

But global variables pose one major issue: **they make the code really hard to reason about**.

Your brain can't juggle with so many variables at the same time. Keeping track of dozens of references that can get modified from everywhere is really, really hard.

As you will spend more time reading the code than writing it, globals are not a great strategy to save you time in the long run.

## What tests can tell you

**Global variables can make tests challenging to write.**

Now, tests are not the end goal. You don't code for the tests and end-users don't (directly) care about your testing strategy.

But tests are the most useful tool you have to feel confident refactoring Legacy Code, so that's already a big deal.

Most importantly: they are revealing how easy it is to reason about your code. If tests are difficult to write, the code is probably hard to adapt to changing requirements.

> "This code is pretty much untestable via automation"

If that's your situation, then read on!

I'm about to tell you my tips for refactoring global variables out of a very large codebase.

## The best way to deal with global variables

When a function uses a global variable, **it depends on it implicitly**.

Let's use an example in PHP:

```php
use League\Flysystem\Filesystem;
use League\Flysystem\UnableToWriteFile;

class InvoiceService {
  public function invoiceClient(string $clientId, InvoicePeriod $period): void {
    global Filesystem $storage;

    $cost = $this->calculateCosts($clientId, $period);
    $invoice = new Invoice($clientId, $cost, $period);

    try {
      $path = '/invoices/' . $clientId . '/' . $period->toString() . '.txt';
      $storage->write($path, json_encode($invoice));
    } catch (UnableToWriteFile $exception) {
      throw new UnableToInvoiceClient("Unable to upload the invoice.", 0, $exception);
    }
  }

  private function calculateCosts(string $clientId, InvoicePeriod $period): int {
    return 42;
  }
}
```

This code is a challenge to test because you need to get control over `$storage` if you want to control what you're testing.

Also, you probably don't want to write on your actual filesystem when testing. Maybe you can get around that, but what if you deal with database updates? With 3rd party APIs?

There are ways to solve this problem with clever hijacks of the `$storage` global reference (it's [a Seam](../key-points-of-working-effectively-with-legacy-code#identify-seams-to-break-your-code-dependencies) after all). But:

1. When you hijack a reference, you're coupling to everything using it—that is your production code and your tests.
2. Therefore, you should not forget to "reset" the state of this reference after you're done. Failing to do so can cause unexpected test failures that are tricky to debug.
3. You don't need this.

There's a much, much simpler way.

### Make global variables explicit

Your code is depending on a `$storage` implicitly. So let's make this fact explicit.

Pass `$storage` as a parameter:

```diff
use League\Flysystem\Filesystem;
use League\Flysystem\UnableToWriteFile;

class InvoiceService {
-  public function invoiceClient(string $clientId, InvoicePeriod $period): void {
-    global Filesystem $storage;
+  public function invoiceClient(string $clientId, InvoicePeriod $period, Filesystem $storage): void {
    $cost = $this->calculateCosts($clientId, $period);
    $invoice = new Invoice($clientId, $cost, $period);

    try {
      $path = '/invoices/' . $clientId . '/' . $period->toString() . '.txt';
      $storage->write($path, json_encode($invoice));
    } catch (UnableToWriteFile $exception) {
      throw new UnableToInvoiceClient("Unable to upload the invoice.", 0, $exception);
    }
  }

  private function calculateCosts(string $clientId, InvoicePeriod $period): int {
    return 42;
  }
}
```

You're done.

I'm serious.

## Why is this even better?

Because the dependency is explicit, it's dead easy to control the reference when you're testing.

In fact, by taking the dependency as a parameter `invoiceClient()` doesn't depend on a specific instance of `$storage` anymore. You can pass any `$storage` that implements correctly the `Filesystem` interface. By doing so, you've inverted the dependency.

Therefore, it also makes your code easier to extend.

Finally, you'll notice that you don't remove the existence of the global `$storage` variable. What you do is **moving the complexity** up to the caller. Keep doing that systematically and you'll push your global to the entry point of your system. This is a Good Thing™, it makes code easier to work with.

### Wait, my function will have 8 parameters if I do that! How can it be better?!

Indeed, chances are the function you're dealing with depends on more than one global.

Thus, you'll frequently end up with a long list of parameters:

```php
// This is getting crazy… Are we going in the right direction here?
$passwordReset->begin($username, $email, $mysqli, $websiteInfo, $directory_path)
```

If you feel bad, that's a good sign. Yes, a function that takes many parameters is a code smell. It makes the function harder to use and you can feel that in your tests.

But you need to realize something: **this function already depends on these parameters**. They're just sneakily hidden under the rug.

"Too many parameters" is a better state than "depending on a global variable". Your _first_ step is to make the globals explicit.

When the "too many parameters" problem arise, treat the cause instead of the symptom:

- Do you find some params that are always used together? There's a missing concept waiting to be revealed E.g. `$username` and `$email` represent a `User`, pass a `$user` instance instead.
- Are you passing 2 params that are used together? Refactor to pass what's actually needed.

  E.g. instead of passing `$aFunction` and `$someData` and then having `$aFunction($someData, $otherData)`, pass `$anotherFunction` that only expects `$otherData`.

- Let's face it: you probably have too many responsibilities. It's a great opportunity to identify and split them.

Making the dependencies implicit may be convenient to write at the moment. But it's a nightmare to maintain. It wastes your precious time.

## Going further

When you're in the trenches, you need to make decisions based on your situation. It's very easy to be paralyzed.

You _know_ that you need to put code into tests, but you don't know _where to start_. You want to make the _best_ decision, but you can't think about one. So you give up on the tests because you don't have time to figure it out… And that's the worst thing to do.

**Pass the problematic global as a parameter** is the first step to take. It's an easy one and it makes you start moving.

Use that momentum to get unstuck!

Get your code into tests and start refactoring your function so it doesn't take so many parameters 😉

### Pass the parameter to the constructor (Dependency Injection)

Here you're injecting `$storage` to `invoiceClient()` because it's the method you need to test.

After you iterate over other `InvoiceService` methods, you may realize many of them also expect a `$storage`.

In this case, you can inject the dependency in the constructor to refactor your code:

```php
use League\Flysystem\Filesystem;
use League\Flysystem\UnableToWriteFile;

class InvoiceService {
  private Filesystem $storage;

  public __construct(Filesystem $storage) {
    $this->storage = $storage;
  }

  public function invoiceClient(string $clientId, InvoicePeriod $period): void {
    $cost = $this->calculateCosts($clientId, $period);
    $invoice = new Invoice($clientId, $cost, $period);

    try {
      $path = '/invoices/' . $clientId . '/' . $period->toString() . '.txt';
      $this->storage->write($path, json_encode($invoice));
    } catch (UnableToWriteFile $exception) {
      throw new UnableToInvoiceClient("Unable to upload the invoice.", 0, $exception);
    }
  }

  private function calculateCosts(string $clientId, InvoicePeriod $period): int {
    return 42;
  }
}
```

### Not all globals are evil

If you carefully read the code, you'll notice that `$storage` wasn't the only global reference.

What about `Invoice` or `json_encode`?

The truth is: not all global variables are problematic. These references are encapsulating pure logic. Therefore, you won't feel like you need to mock them in your tests.

Sometimes also, a global can be a constant. It has been extracted to remove duplication. But it's part of the business logic of your code: you don't need to change the reference in your tests.

## Rule of thumb: listen to your tests

Don't focus on "global variables", focus on what makes the code hard to test. That's a hint that something in the design can be improved.

**Making implicit dependencies explicit** is a handy reflex to have when dealing with Legacy Code.
