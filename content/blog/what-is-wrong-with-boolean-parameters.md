---
title: What is wrong with boolean parameters?
date: 2020-03-16T01:47:28.963Z
description: And 4 ways to fix their usage in Legacy Code.
image: /assets/left-or-right.jpg
---

Working with Legacy Code, it's not uncommon to come across boolean parameters. Consider this JavaScript code:

```js
function validatePrices(verifyCategories, sourcePassengers, prices) {
  const numPassengers = SourcePassengers.calculateNumberPassengers(
    sourcePassengers
  )
  const totalPresent = !!prices.total

  const breakdownEqualTotal = sum(prices.breakdown) === prices.total

  const baseCorrectAmount =
    verifyCategories || !prices.categories
      ? Math.abs(
          calculateCategories(sourcePassengers) - prices.breakdown.base
        ) <= numPassengers
      : true

  return totalPresent && breakdownEqualTotal && baseCorrectAmount
}
```

`verifyCategories` is a boolean. If it's `true`, it will perform an extra check on prices categories.

Maybe you _feel_ that something is wrong with such code (well, to be honest, a few things are). Focus on the boolean parameter: can you articulate _what_ is wrong about it?

Some would say that it makes the code less maintainable.

> "Is it a valid concern? This code doesn't look that hard to maintain…"

The truth is: yes, in the context of your codebase, it **is** harder to maintain.

![](/assets/left-or-right.jpg)

## Boolean params make code harder to read

In real life, you won't come across the function definition first.

As you're navigating through the code, you're more likely to find `validatePrices()` **usage** rather than its implementation.

Here's what you'll read:

```js
if (!PriceHelpers.validatePrices(true, sourcePassengers, departure.prices)) {
  throw new Error("Prices are invalid")
}
```

And here is the problem: you have no clue about what `true` means.

To understand what this code does, you **need** to jump to the function implementation. Or at least to see its signature.

**This adds friction.**

It makes code a little harder to read. And the friction quickly adds up. In the end, it's death by a thousand little cuts! As we spend most of our time reading code, we should optimize for readability.

Legacy Code feels painful because it's hard to understand.

A boolean parameter is a small brick in the code complexity wall. It's a common one. Hopefully, it's also one that is easy to remove!

## Boolean params make code harder to change

A boolean argument indicates the function has 2 different behaviors. These 2 behaviors are probably tangled together. And this just calls for more.

How did this boolean got added in the first place? Very likely because someone wanted to use the function, but with _slightly different behavior_. A boolean parameter just did the work 👌

Now, chances are high that someone will have to use the function again, with _another slightly different behavior_. Another parameter will get added. Because it will feel like the simplest thing to do. It's a magnet to build more mess.

In large React projects, it's very common to come across components that take 17 different "props" (which are parameters). Very frequently, these props are boolean-argument-like. Each prop is here to handle a slightly different scenario. This slowly leads to convoluted components that are hard to change.

> If your function has 17 parameters, you are missing one.

To put it short: boolean arguments are the easy way to make the feature work. But we should not stop here. **We have to refactor the code to keep it maintainable.**

How do you refactor an existing boolean argument?

I can show you 4 ways to do so 🎳

## 4 ways to fix a boolean parameter

### 1. At least, use a named variable

Think about it: a boolean argument is pretty much "a magic boolean".

The simplest way to deal with magic stuff is to explain them.

You do that in 2 safe steps:

1. Extract it into a variable
2. Give this variable a meaningful name

Thus, even when you don't have time, you can still improve the code with this simple change:

```diff
+ const shouldVerifyCategories = true
if (
  !PriceHelpers.validatePrices(
-   true,
+   shouldVerifyCategories,
    sourcePassengers,
    departure.prices
  )
) {
  throw new Error("Prices are invalid")
}
```

### 2. The cheap way: use a named parameter

If your language allows that, a named parameter is a good solution for the readability issue.

In Python, for example, you can name the argument when you call a function:

```py
validate_prices(verify_categories=true, source_passengers, departure.prices)
```

In other languages like JavaScript, you don't have named parameters. But you can simulate that.

A typical JS pattern is to use an `options` object (which is exactly what React `props` are).

You can change the signature of the function to take a single object parameter instead. You also need to update all the callers of the function. JavaScript destructuring feature makes the change a bit easier:

```js
// With destructuring, code change is minimal: notice the { }
function validatePrices({ verifyCategories, sourcePassengers, prices }) {
  // … same implementation
}
```

It becomes clear what the options stand for:

```js
if (
  !PriceHelpers.validatePrices({
    verifyCategories: true,
    sourcePassengers,
    prices: departure.prices,
  })
) {
  throw new Error("Prices are invalid")
}
```

As a bonus, the function is also easier to change. Adding new parameters don't change the signature of the function anymore. Callers don't rely on the specific positions for the arguments.

So far so good! So why did I called that "the cheap way"?

Well because this approach has 2 downsides:

1. **It's up to the caller to use named parameters**. Nothing helps people to keep writing readable code. It will take a lot of discipline to do so, thus it won't happen.
2. **It becomes easy to fall into the trap of the 17 parameters**. Because it's cheap to add another parameter (from the caller point of view). That's why it's common to have React components that are so hard to maintain. They handle way too many scenarios.

### 3. If it makes sense, use an enum

Often, the boolean that's used could be expressed as a more meaningful concept.

Enums are a great way to make these concepts appear in the code:

```ts
// Before
file.writeData(data, true)

// After
enum WriteMode {
  Append,
  Overwrite,
}

file.writeData(data, WriteMode.Append)
```

Furthermore, if you need to add a third state, enums are the correct way to go. 2 booleans would create an eventual 4th "impossible" state that you shouldn't have to care about. Think about it.

JavaScript doesn't have proper enums. But these can be simulated with simple objects.

```diff
+ const VerifyStrategy = {
+  Categories: "Categories",
+  Nothing: "Nothing"
+ };
+
+ function validatePrices(verify, sourcePassengers, prices) {
- function validatePrices(verifyCategories, sourcePassengers, prices) {
  const numPassengers = SourcePassengers.calculateNumberPassengers(
    sourcePassengers
  )
  const totalPresent = !!prices.total

  const breakdownEqualTotal = sum(prices.breakdown) === prices.total

  const baseCorrectAmount =
+    verify === VerifyStrategy.Categories || !prices.categories
-    verifyCategories || !prices.categories
      ? Math.abs(
          calculateCategories(sourcePassengers) - prices.breakdown.base
        ) <= numPassengers
      : true

  return totalPresent && breakdownEqualTotal && baseCorrectAmount
}
```

In the end, it's nothing but a more involved "named variable".

Which makes the caller becomes:

```js
if (
  !PriceHelpers.validatePrices(
    VerifyStrategy.Categories,
    sourcePassengers,
    departure.prices
  )
) {
  throw new Error("Prices are invalid")
}
```

In this case, though, there's a problem.

**This enum is completely overkilled**. There's no other strategy than the "categories" verification. No name for the concept. In this case, it's actually a boolean.

So don't do that. Don't force an enum when it's really, really a boolean.

In this case, there's a refactoring that's always valid…

### 4. Otherwise, split the function

> "Boolean arguments loudly declare that the function does more than one thing. They are confusing and should be eliminated."
>
> — Clean Code, Robert C. Martin (Uncle Bob)

If the function does more than one thing, it's a good idea to split these many things into different functions, so they all do one thing.

Here's a simple Java example from [Martin Fowler's article on the topic](https://martinfowler.com/bliki/FlagArgument.html):

```java
public Booking book (Customer aCustomer, boolean isPremium) {
  if (isPremium)
    // logic for premium book
  else
    // logic for regular booking
}
```

In this scenario, the split is really easy:

```java
public Booking book (Customer aCustomer) {
  // logic for regular booking
}

public Booking premiumBook (Customer aCustomer) {
  // logic for premium book
}
```

If the code is more tangled:

```java
public Booking book (Customer aCustomer, boolean isPremium) {
  lorem().ipsum();
  dolor();

  if(isPremium)
    sitAmet();

  consectetur();

  if(isPremium)
    adipiscing().elit();
  else {
    aenean();
    vitaeTortor().mauris();
  }

  eu.adipiscing();
}
```

Then Fowler suggests keeping the implementation but to make it hidden. Doing so, the tangled logic doesn't propagate to the callers and the code keeps easy to read:

```java
public Booking regularBook(Customer aCustomer) {
  return hiddenBookImpl(aCustomer, false);
}

public Booking premiumBook(Customer aCustomer) {
  return hiddenBookImpl(aCustomer, true);
}

private Booking hiddenBookImpl (Customer aCustomer, boolean isPremium) {
  // … the previous `book` implementation
}
```

In our existing code though, the best thing to do is **to move the decision to the callers**.

You can do so in a few steps:

1. Change the function signature to put `verifyCategories` at the end. This is necessary because we'll make it optional. In JS, optional arguments can't appear before the required ones.
2. Replace `verifyCategories` by a `verify` function
3. Provide a default implementation that always returns `true`
4. Replace `baseCorrectAmount` with a call to `verify`.
5. Pass it `numPassengers` because this variable is only computed inside `validatePrices()`
6. Drop the `baseCorrectAmount` variable
7. Adapt the callers to provide their own implementation of the function

```diff
function validatePrices(
- verifyCategories,
  sourcePassengers,
- prices
+ prices,
+ verify = () => true
) {
  const numPassengers = SourcePassengers.calculateNumberPassengers(
    sourcePassengers
  )
  const totalPresent = !!prices.total

  const breakdownEqualTotal = sum(prices.breakdown) === prices.total

-  const baseCorrectAmount =
-    verifyCategories || !prices.categories
-      ? Math.abs(
-          calculateCategories(sourcePassengers) - prices.breakdown.base
-        ) <= numPassengers
-      : true

  return (
    totalPresent &&
    breakdownEqualTotal &&
-   baseCorrectAmount
+   verify(numPassengers)
  )
}
```

Which lead to the following code:

```js
function validatePrices(sourcePassengers, prices, verify = () => true) {
  const numPassengers = SourcePassengers.calculateNumberPassengers(
    sourcePassengers
  )
  const totalPresent = !!prices.total

  const breakdownEqualTotal = sum(prices.breakdown) === prices.total

  return totalPresent && breakdownEqualTotal && verify(numPassengers)
}
```

And the `verifyCategories` implementation, used by the caller:

```js
function verifyCategories(numPassengers) {
  return (
    !prices.categories &&
    Math.abs(calculateCategories(sourcePassengers) - prices.breakdown.base) <=
      numPassengers
  )
}

if (
  !PriceHelpers.validatePrices(
    verifyCategories,
    sourcePassengers,
    departure.prices
  )
) {
  throw new Error("Prices are invalid")
}
```

2 things worth mentioning:

1. If `verifyCategories()` is a common behavior that's reused across many callers, it's fine! Move the implementation where it's relevant and refactor the duplication.
2. If there are many callers, take much smaller steps to make this refactoring safe. Don't forget that you're dealing with Legacy Code. Don't take too much risk without tests!

## Sometimes, a boolean parameter is better

Here's the plot twist.

As I suggested in the enum solution: sometimes, a boolean actually **is** the best option!

How can you tell the difference? Take a step back. Does the caller code look convoluted?

Martin Fowler puts it best. If you end up with this kind of usage:

```java
if (aValue)
  setOn();
else
  setOff();
```

Then a `setSwitch(on)` is probably a better signature:

```java
setSwitch(aValue)
```

This is true if you don't really control where `aValue` is coming from: an external data source or the UI. If you do control it, then you have to deal with this _other_ boolean argument.

**It always depends on the context.** You should:

- maximize code readability from the caller of the API
- minimize the number of things each function is doing

Boolean arguments are not always bad. But they usually are. Hopefully, now you know why and how to clean this code smell 🤠
