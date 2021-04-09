import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import { getCssForSettings } from "book-cover-3d"

import SEO from "../components/seo"
import { FirstAidKitEmailCTA } from "../components/cta"
import { FirstAidKitParity } from "../components/purchase-parity"

function Page() {
  return (
    <Layout>
      <SEO
        title="Legacy Code: First Aid Kit"
        description=""
        date="2020-06-19"
        slug="/first-aid-kit"
        image="/assets/first-aid-kit-cover.png"
        keywords={["legacy code", "refactoring", "deadline"]}
      />
      <FirstAidKitParity />
      <TopBar role="presentation" />
      <SectionAlt>
        <Header>
          <HeaderText>
            <h1>
              Rescue your Legacy codebase <em>quickly and safely.</em> 
              <span role="img" aria-label="Rescue Helmet">
                ⛑
              </span>
            </h1>
            <p>
              Learn how to refactor an existing codebase as you go using
              specific techniques to incrementally make it easier to maintain.
            </p>
            <p>
              Sign up for my newsletter to get{" "}
              <strong>a free chapter preview</strong> on performing incremental
              refactorings so you can stop and ship at any time.
            </p>
            <FirstAidKitEmailCTA />
            <p>
              Or <a href="#buy">buy it now</a> if you're already convinced!
            </p>
          </HeaderText>
          <HeaderBook>
            <div className="book-container-lcfak">
              <div className="book">
                <img
                  src="/assets/first-aid-kit-cover.png"
                  alt="Legacy Code: First Aid Kit"
                />
              </div>
            </div>
          </HeaderBook>
        </Header>
      </SectionAlt>
      <Content>
        <h2 class="quote">I wish we had more time to refactor this code!</h2>
        <p>
          Every week it's the same story: you <em>have</em> to change that
          codebase. Maybe it's to fix a bug, to tweak some behavior, or to
          implement a new shiny feature.
        </p>
        <p>You didn't write that code!</p>
        <p>
          It's an undocumented tangled mess. You would love to refactor this
          code before you change it. <strong>But it has no test!</strong>{" "}
          Without tests, you're afraid to break something while you refactor—you
          got burned already, not twice!
        </p>
        <p>
          OK, so you <em>could</em> start by writing the tests. But you're
          worried that won't have enough time to meet "the deadline" that was
          imposed on you…
        </p>
        <p>
          And there you are: paralyzed because you don't know where to start.
          Should you begin a huge cleanup and risk the deadline? How can you add
          tests on a code that was definitely not written to be testable?!
        </p>
        <h2 class="quote">
          Wherever I start refactoring, it pulls the rest of the app!
        </h2>
        <p>You try to unwind the mess and the string just keeps on coming.</p>
        <p>
          It is getting better, but you can't stop because{" "}
          <em>it is not working yet</em>… but it's 9pm now, and your loved ones
          are mad at you! 
          <span role="img" aria-label="Angry face">
            😡
          </span>
        </p>
        <p>You know what happens next…</p>
        <p>
          You stop trying to make sense out of this mayhem. You just Make It
          Work™. It's not pretty. It's not that bad. There are worse hacks in
          this spaghetti! You get the job done while making the code worse.
        </p>
        <p>
          You wish you could just start everything over, but you can't.{" "}
          <strong>No time, no budget.</strong>
        </p>
        <p>
          You are not proud of this code—how could you? But you're getting used
          to it. Clients are pressing you for "more features" and your
          colleagues don't seem to care.
        </p>
        <p>
          Your boss doesn't understand <em>why</em> it takes you longer and
          longer to finish tasks. You raised the point already, but deadlines
          are still too short and the focus is always on cost and time. No-one
          cares that your eyes bleed while reading the code!
        </p>
        <p>
          Exhausting! 
          <span role="img" aria-label="Tired face">
            😫
          </span>
        </p>
        <h2>If you could at least stop the bleed…</h2>
        <p>
          You know what would be great? Working with clean, well-tested code.
          That would be a breeze to work with…
        </p>
        <p>
          But this codebase is a minefield. How could you stop making it worse
          when it would take YEARS to address the Technical Debt!?
        </p>
        <p>
          What if there was a way to refactor the code AND consistently meeting
          the deadlines?
        </p>
        <p>
          Imagine you could refactor as you go, steadily turning the codebase
          into a testable, easy-to-read, well-designed system! 
          <span role="img" aria-label="Seed">
            🌱
          </span>
        </p>
        <p>
          <strong>If you know the moves</strong>, you can give your code first
          aid that will stop its hemorrhage. How proud and relieved would you
          feel as you put it back into a healthier shape?
        </p>
        <p>
          Sure, this system you're maintaining is broken everywhere. It seems to
          work, but it only really survives with heavy machinery and clever
          hacks. It looks like it would better to let it go and build a fresh
          one instead…
        </p>
        <p>But what if you knew the techniques to rescue it?</p>
        <h2>Imagine cleaning up Legacy Code as you go.</h2>
        <p>
          Regardless of the state of your codebase, you will always know where
          to start. Consistently applying the proper techniques, you can stop
          the carnage and <strong>avoid a costly rewrite</strong>.
        </p>
        <p>
          Most of all, you will keep shipping bug fixes and features as you go.
        </p>
        <p>
          <strong>
            You don't need to ask permission to refactor when you can do it on
            the fly!
          </strong>
        </p>
        <p>
          Refactoring would become second nature to you. Your reflexes will make
          you clean up Legacy Code in no time! You will consistently meet
          clients' expectations and inspire your peers.
        </p>
        <p>
          You can start making this codebase a better place the very next time
          you touch it. 
          <span role="img" aria-label="Sparkles">
            ✨
          </span>
        </p>
        <p>
          When you have short deadlines, trying to refactor the code is a risky
          move… unless you know <u>exactly</u> what you're doing.
        </p>
        <h2>
          Refactor code in <em>no time</em> with this First Aid Kit.
        </h2>
        <p>
          I've built a toolbox of techniques that will help you get your Legacy
          Code under control. These are the tricks that work the best for me
          when working with a real-life codebase, with missing tests and short
          deadlines—sounds familiar, right?
        </p>
        <p>These 14 moves will help you:</p>
        <ul style={{ listStyleType: "none", marginTop: 0 }}>
          <CheckedLi>optimize your work to have the maximum impact</CheckedLi>
          <CheckedLi>
            identify <strong>what makes code difficult to test</strong>
          </CheckedLi>
          <CheckedLi>
            <strong>quickly deploy a safety net</strong> around the code you
            need to touch
          </CheckedLi>
          <CheckedLi>
            raise up code quality <strong>incrementally</strong>
          </CheckedLi>
          <CheckedLi>ship anytime!</CheckedLi>
        </ul>
      </Content>
      <SectionAlt style={{ paddingTop: 0, paddingBottom: 0 }}>
        <Content>
          <h2>
            What's inside the{" "}
            <em class="highlight">Legacy Code: First Aid Kit</em>?
          </h2>
          <p>
            It's an e-book of approximately 200 pages. It comes with a light and
            a dark theme.
          </p>
          <p>
            It's a collection of <strong>14 techniques</strong> to work with
            Legacy Code:
          </p>
          <NumberedList>
            <li>Identify Hotspots</li>
            <li>Draw Dependency Graphs</li>
            <li>The Mikado Method & The Parking</li>
            <li>Micro-committing</li>
            <li>Exploratory Refactoring</li>
            <li>3 Automated Refactorings</li>
            <li>Incremental Refactorings</li>
            <li>Proximity Refactoring</li>
            <li>Decouple Core from Infrastructure</li>
            <li>Approval Testing</li>
            <li>Subclass & Override</li>
            <li>Move Function to Delegate</li>
            <li>Wrap & Sprout</li>
            <li>Progressive Naming</li>
          </NumberedList>
          <p>
            Each technique comes with concrete examples for when and how to use
            it. On top of that, I detail <em>why it works</em>: the philosophy
            behind each approach, so you can adapt to any situation.
          </p>
          <p>
            Finally, the kit comes with a few printable sheets you can keep next
            to you.
          </p>
        </Content>
      </SectionAlt>
      <Content>
        <h2>This kit is designed for the battlefield.</h2>
        <p>Go through the book to get a sense of what's inside.</p>
        <p>
          Then, keep it within easy reach. The next time you touch your legacy
          codebase, pick a technique and try it.{" "}
          <strong>Soon enough, you'll make that code a better place!</strong>
        </p>
        <p>
          Working with your codebase should become an exciting challenge again:
          how much can you improve now? What will you leave for later? How can
          you make this code a little bit better AND deliver value now? Can you
          feel the code becoming easier to work with?
        </p>
        <p>
          Finally, you'll start turning a spaghetti codebase into a testable,
          easy-to-read, well-designed system — while shipping features and fixes{" "}
          <span role="img" aria-label="Cheers">
            😉🍷
          </span>
        </p>
        <p>
          … and these precious skills will make you VERY valuable. 
          <span role="img" aria-label="Gem">
            💎
          </span>
        </p>
      </Content>
      <SectionColored>
        <Content>
          <h2 id="buy">Get the book</h2>
          <PricingContainer>
            <Pricing>
              <PriceCard>
                <PriceCardTop>
                  <div>
                    <PriceCardTitle>First Aid Kit</PriceCardTitle>
                  </div>
                  <Price>
                    $39
                    <Currency>USD</Currency>
                  </Price>
                </PriceCardTop>
                <PriceCardContent>
                  <ul>
                    <li>
                      <PriceListIcon />
                      <PriceListItem>
                        <strong>14 techniques</strong> to quickly and safely
                        rescue a codebase
                      </PriceListItem>
                    </li>
                    <li>
                      <PriceListIcon />
                      <PriceListItem>
                        PDF, ePub, and Kindle formats
                      </PriceListItem>
                    </li>
                    <li>
                      <PriceListIcon />
                      <PriceListItem>~200 pages of content</PriceListItem>
                    </li>
                    <li>
                      <PriceListIcon />
                      <PriceListItem>Light & Dark themes</PriceListItem>
                    </li>
                    <li>
                      <PriceListIcon />
                      <PriceListItem>3 printable cheatsheets</PriceListItem>
                    </li>
                    <li>
                      <PriceListIcon />
                      <PriceListItem>1 printable exercise sheet</PriceListItem>
                    </li>
                  </ul>
                  <div>
                    <PriceLink href="https://understandlegacycode.ck.page/products/legacy-code-first-aid-kit">
                      Get your First Aid Kit
                    </PriceLink>
                  </div>
                </PriceCardContent>
              </PriceCard>
            </Pricing>
          </PricingContainer>
        </Content>
      </SectionColored>
      <Content>
        <h2>About the author</h2>
        <Author>
          <img src="/assets/profile.jpg" alt="Nicolas Carlo" />
          <div
            style={{
              lineHeight: "2rem",
            }}
          >
            <p>
              Hey, I'm{" "}
              <a
                href="https://twitter.com/nicoespeon"
                target="_blank"
                rel="noreferrer noopener"
              >
                Nicolas Carlo
              </a>
               
              <span role="img" aria-label="Waving hand">
                👋
              </span>
            </p>
            <p>
              I have been a web developer, freelancer, consultant, and Tech
              Lead. Every single time, I had to work with existing code I was
              afraid to change. I realized that Legacy Code runs the world… but
              developers aren't prepared to maintain it!
            </p>
            <p>
              I collect tips & tricks to deal with legacy systems on{" "}
              <a href="https://understandlegacycode.com">
                understandlegacycode.com
              </a>
            </p>
            <p>
              I also develop{" "}
              <a href="https://github.com/sponsors/nicoespeon">
                open-source tools
              </a>{" "}
              to help developers work with legacy codebases.
            </p>
            <p>— Nicolas</p>
          </div>
        </Author>
      </Content>
      <hr style={{ marginBottom: "0" }} />
      <Content style={{ fontSize: "1rem", marginBottom: "6rem" }}>
        <h2>Frequently Asked Questions</h2>
        <DictList>
          <div>
            <dt>How long is the book?</dt>
            <dd>
              <p>The book is 195 pages long.</p>
            </dd>
          </div>
          <div>
            <dt>What's the format of the book?</dt>
            <dd>
              <p>
                When you purchase, you get a zip file containing PDF, EPUB, and
                MOBI formats. You also get printable cheat sheets to practice
                the techniques.
              </p>
            </dd>
          </div>
          <div>
            <dt>Are the techniques specific to a programming language?</dt>
            <dd>
              <p>
                11 techniques are valid regardless of the language you are
                working with. 3 of them have better tooling support in
                statically typed languages.
              </p>
              <p>
                3 techniques are presented with object-oriented JavaScript code.
                For these, I also show you what to do if the code was
                functional.
              </p>
              <p>
                The concepts are valid independently of the language. I use
                JavaScript for the examples so I can illustrate both OOP and FP
                styles.
              </p>
            </dd>
          </div>
          <div>
            <dt>
              What if I buy it and don't like it? Can I get my money back?
            </dt>
            <dd>
              <p>
                Sure. I offer a 100% no-questions-asked money-back guarantee.
              </p>
              <p>
                My goal is to help you work with Legacy codebases. I wish this
                book saves you time, money, and sanity.
              </p>
            </dd>
          </div>
          <div>
            <dt>Can I share this book with my team?</dt>
            <dd>
              <p>
                If you want to do so, please suggest your teammates purchase
                their own individual copies. Maybe you can get your
                client/employer to cover the expense.
              </p>
            </dd>
          </div>
          <div>
            <dt>What if I have another question?</dt>
            <dd>
              <p>Send me an email at nicolas@understandlegacycode.com</p>
            </dd>
          </div>
        </DictList>
      </Content>
    </Layout>
  )
}

export const FirstAidKitCallout = () => (
  <Callout>
    Are you struggling with Legacy Code and not enough time to clean it up?
    <br />
    <span role="img" aria-label="Rescue Worker Helmet">
      ⛑
    </span>{" "}
    <strong>
      <Link to={`first-aid-kit`}>Check my First Aid Kit</Link>
    </strong>{" "}
    to help you rescue a codebase <strong>quickly</strong> and{" "}
    <strong>safely</strong>!
  </Callout>
)

const colors = {
  // #ed1b2e
  primary: "hsla(354.6, 85.4%, 51.8%, 1)",
  dark: "hsla(354.6, 70%, 20%, 1)",
  background: "hsla(354.6, 85.4%, 51.8%, 0.3)",
  backgroundLight: "hsla(354.6, 90%, 60%, 0.8)",
  backgroundLightest: "hsla(354.6, 90%, 60%, 0.2)",
  gray: "rgb(78, 97, 108)",
  grayLight: "rgb(107, 114, 128)",
}

const Callout = styled.div`
  margin: 3rem 0;
  padding: 1rem;
  border: 3px ${colors.primary} solid;
  background: ${colors.backgroundLightest};
`

const Layout = styled.div`
  color: rgb(12, 30, 41);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Fira Sans, sans-serif;
  -webkit-font-smoothing: antialiased;

  a {
    text-decoration: none;
    box-shadow: none;
    color: rgb(12, 30, 41);
    font-weight: 600;
    background-image: linear-gradient(
      180deg,
      transparent 70%,
      ${colors.background} 0
    );
    transition: box-shadow 0.2s;
  }

  a:hover,
  a:focus,
  a:active {
    background: 0 0;
    box-shadow: inset 0 -1.3em 0 ${colors.background};
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: Montserrat, sans-serif;

    & .highlight {
      font-style: normal;
      color: ${colors.primary};
    }
  }

  h2.quote {
    position: relative;
    font-style: italic;

    &::before {
      position: absolute;
      z-index: -1;
      top: -30px;
      left: -60px;
      content: "";
      width: 72px;
      height: 72px;
      display: block;
      opacity: 0.75;
      background-image: url("data:image/svg+xml,%3Csvg width='72' height='72' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z' fill='%23ed1b2e' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
    }
  }

  ${getCssForSettings("lcfak", {
    rotate: 30,
    rotateHover: 0,
    perspective: 600,
    transitionDuration: 1,
    radius: 2,
    thickness: 50,
    bgColor: "#01060f",
    height: 480,
    width: 300,
    pagesOffset: 3,
  })}
`

const NumberedList = styled.ol`
  @media (min-width: 600px) {
    margin-left: 2rem;
    padding-left: 2rem;
  }

  & > li {
    list-style-type: none;
    margin-left: 2rem;
    position: relative;
    counter-increment: step-counter;
    font-weight: 600;

    &::before {
      content: counter(step-counter);
      margin-right: 1em;
      line-height: 1;
      background-color: ${colors.primary};
      box-shadow: 0.2em 0.2em 0 rgba(128, 128, 128, 0.2);
      color: white;
      padding: 2px 0;
      width: 2.7em;
      height: 1.2em;
      display: block;
      position: absolute;
      box-sizing: border-box;
      margin-left: -62px;
      margin-top: -3px;
      top: 8px;
      text-align: center;
      font-size: 0.9em;
      font-style: normal;
      font-family: sharp-sans, sans-serif;
      font-variant-numeric: lining-nums;
      font-feature-settings: "lnum";
    }
  }

  & > li:nth-of-type(2n + 1)::before {
    transform: rotate(4deg);
  }
`

const TopBar = styled.div`
  height: 0.5rem !important;
  background-color: ${colors.primary};
`

const SectionAlt = styled.div`
  background-color: #f3f7f9;
  padding: 5rem 1rem;

  @media (min-width: 768px) {
    padding: 5rem 3rem;
  }
`

const SectionColored = styled.div`
  background-color: ${colors.backgroundLight};
  padding: 5rem 3rem;

  h2 {
    margin-top: 1rem;
    font-size: 3rem;
    color: white;
    text-align: center;
  }
`

const Header = styled.div`
  max-width: 1280px;
  margin: auto;

  display: flex;
  flex-direction: column;

  @media (min-width: 1100px) {
    flex-direction: row;
    place-content: space-between;
  }
`

const HeaderText = styled.div`
  flex-basis: 65%;
  margin-bottom: 4rem;

  h1 {
    font-size: 2.5rem;

    em {
      color: ${colors.primary};
    }
  }

  p {
    font-size: 1.5rem;
    line-height: 2.5rem;
    font-weight: 400;
    color: ${colors.gray};
  }

  .formkit-form > div {
    padding-left: 0 !important;
  }

  .formkit-input {
    height: 50px !important;
  }

  @media (min-width: 1100px) {
    margin-bottom: 0;

    h1 {
      font-size: 3rem;
    }
  }
`

const HeaderBook = styled.div`
  flex-basis: 30%;
`

const Content = styled.div`
  max-width: 768px;
  margin: auto;
  padding: 2rem;
  font-size: 1rem;

  @media (min-width: 768px) {
    padding-left: 0;
    padding-right: 0;
    font-size: 1.25rem;
  }
`

const PricingContainer = styled.div`
  max-width: 1280px;
  margin: auto;
  margin-top: 4rem;
`

const Pricing = styled.div`
  display: flex;
  justify-content: space-around;
`

const PriceCard = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
`

const PriceCardTop = styled.div`
  background: white;
  padding: 2.5rem;
  padding-bottom: 1.5rem;
`

const PriceCardTitle = styled.h3`
  display: inline-flex;
  margin-top: 0;
  padding: 0.25rem 1rem;
  border-radius: 9999px;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  font-size: 0.875em;
  font-weight: 600;
  color: ${colors.dark};
  background-color: ${colors.background};
  font-family: Inter var, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
`

const Price = styled.div`
  margin-top: 1rem;
  line-height: 1;
  font-size: 4rem;
  font-weight: 800;
  align-items: baseline;
  display: flex;
`

const Currency = styled.span`
  color: ${colors.grayLight};
  line-height: 2rem;
  font-size: 1.5rem;
  font-weight: 500;
`

const PriceCardContent = styled.div`
  padding: 2.5rem;
  padding-top: 1.5rem;

  display: flex;
  flex: 1 1 0%;
  justify-content: space-between;
  flex-direction: column;

  background: rgb(249, 250, 251);

  ul,
  ol {
    list-style: none;
    margin: 0;
    margin-bottom: 1rem;
    padding: 0;
  }

  li {
    display: flex;
    align-items: flex-start;
  }
`

const PriceListIcon = () => (
  <div style={{ flexShrink: 0 }}>
    <svg
      style={{ width: "1.5rem", color: "rgba(14, 159, 110)" }}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 13l4 4L19 7"
      ></path>
    </svg>
  </div>
)

const PriceListItem = styled.p`
  color: ${colors.gray};
  margin-left: 0.75rem;
  line-height: 1.5rem;
  font-size: 1rem;
`

const PriceLink = styled.a`
  width: 100%;
  text-align: center;
  padding: 1rem 1.5rem;
  line-height: 1.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  display: block;
  border-width: 1px;
  border-color: transparent;
  background: ${colors.primary};
  color: white !important;

  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    background: ${colors.backgroundLight} !important;
    box-shadow: none !important;
  }
`

const CheckedLi = styled.li`
  position: relative;
  margin-left: 1rem;
  padding-left: 26px;
  color: ${colors.gray};

  &::before {
    content: "";
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMTAiIGZpbGw9IiNDNkY2RDUiLz4KICAgIDxwYXRoIGZpbGw9IiMzOEExNjkiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTEuNzA0NDU1NDUsNC41ODg5MTA4OSBMMy42MDczMjY3Myw2Ljc4OTIwNzkyIEw5LjE2NzMyNjczLDAuMTg4NDE1ODQyIEM5LjU4MzQ3NTI1LC0wLjI1NzUxNDg1MSAxMC4yMzc4MjE4LDAuMjE4MTk2MDQgOS45MTA2NzMyNywwLjcyMzY4MzE2OCBMNC40Mzk5ODAyLDkuMDc4NDM1NjQgQzQuMDIzODMxNjgsOS42MTM3MDI5NyAzLjQ1ODc3MjI4LDkuNjczMjY3MzMgMi45ODMwNDk1LDkuMTM3OTk2MDQgTDAuMjE3NzAyOTcsNS44Mzc3OTgwMiBDLTAuMzE3NTY0MzU2LDUuMDY0NjY5MzEgMS4wNTAzOTYwNCwzLjk2NDcyODcxIDEuNzA0NDM1NjQsNC41ODg5ODYxNCBMMS43MDQ0NTU0NSw0LjU4ODkxMDg5IFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUgNSkiLz4KICA8L2c+Cjwvc3ZnPgo=");
    width: 20px;
    height: 20px;
    position: absolute;
    left: 0;
    top: 8px;
  }
`

const DictList = styled.dl`
  > div {
    margin-top: 1rem;
  }

  dt {
    color: #111223;
    line-height: 1.5rem;
    font-size: 1.125rem;
    font-weight: 500;
    margin-top: 2rem;
  }

  dd {
    margin: 0;
    margin-top: 0.5rem;
  }

  p {
    color: ${colors.gray};
    line-height: 1.5rem;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 768px) {
    > div {
      margin-top: 0;
    }
  }
`
const Author = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  flex-direction: column;

  img {
    max-width: 350px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0;

    img {
      margin-right: 2rem;
    }
  }
`

export default Page

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: ["approval tests"] } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`
