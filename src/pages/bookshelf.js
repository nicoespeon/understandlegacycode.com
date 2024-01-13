import { graphql, Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"

import Bio from "../components/bio"
import CTA from "../components/cta"
import SEO from "../components/seo"
import Title from "../components/title"
import Layout from "../templates/layout"
import { rhythm } from "../utils/typography"

function Page({ data, location }) {
  const siteDescription = data.site.siteMetadata.description

  return (
    <Layout location={location} description={siteDescription}>
      <SEO
        title="Books on Legacy Code"
        description="My collection of books that can help you tame legacy codebases"
        date="2023-12-24"
        slug="/bookshelf"
        keywords={["legacy code", "book", "refactoring"]}
      />
      <Title>Books on Legacy Code</Title>

      <LegacyCodeBooks />

      <CTA />
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
      <Bio />
    </Layout>
  )
}

export function LegacyCodeBooks() {
  // Size sm => ~200 pages / lg => 400+ pages
  const books = [
    {
      title: "Working Effectively with Legacy Code",
      yearOfPublication: 2004,
      authors: ["Michael Feathers"],
      summary:
        "This book is a reference. Feathers provides a wide range of strategies to help understand, refactor, and improve existing code. He emphasizes the importance of testing and shows various dependency-breaking techniques to facilitate the gradual transformation of legacy systems.",
      link: "/blog/key-points-of-working-effectively-with-legacy-code",
      coverUrl: "/assets/wewlc.jpeg",
      spineBackgroundColor: "#1e2020",
      spineForegroundColor: "#cccc68",
      size: "lg",
      fontSize: "14px",
    },
    {
      title: "Refactoring: Improving the Design of Existing Code",
      yearOfPublication: 2018,
      authors: ["Martin Fowler"],
      summary:
        "The first edition came out in 1999! This book is a classic reference for any professional developer. In particular, it will teach you how to change the structure of existing code without breaking it. It's a catalog of moves you can lean on in your day-to-day work.",
      link: "/blog/key-points-of-refactoring",
      coverUrl: "/assets/refactoring.jpg",
      spineBackgroundColor: "#20191b",
      spineForegroundColor: "#fff",
      size: "md",
      fontSize: "10px",
    },
    {
      title: "Software Design X-Rays",
      yearOfPublication: 2018,
      authors: ["Adam Tornhill"],
      summary:
        "This book presents the concept of Behavioral Analysis. Adam Tornhill shows how to use git logs to infer insights about the codebase. For instance, he explains how to identify hotspots or find coupling between apparently unrelated files.",
      link: "/blog/key-points-of-software-design-x-rays",
      coverUrl: "/assets/software-design-xrays.jpg",
    },
    {
      title: "Legacy Code: First Aid Kit",
      yearOfPublication: 2021,
      authors: ["Nicolas Carlo (hey, itsa me! ⭐)"],
      summary:
        "I wrote this one. I detailed the techniques I use the most to tame legacy codebases. This is a book with concrete code examples, written from the trenches.",
      link: "/first-aid-kit",
      coverUrl: "/assets/first-aid-kit-cover.png",
      spineBackgroundColor: "#ed1b2e",
      spineForegroundColor: "#fff",
    },
    {
      title: "The Programmer's Brain",
      yearOfPublication: 2021,
      authors: ["Dr. Felienne Hermans"],
      summary:
        "You will find here a mix of cognitive science and programming. Dr. Felienne Hermans explains how to best approach unfamiliar codebases, based on how your brain works.",
      link: "/blog/key-points-of-programmer-brain",
      coverUrl: "/assets/the-programmer-brain.png",
      spineBackgroundColor: "#1c293d",
      spineForegroundColor: "#d2aa4a",
    },
    {
      title: "Kill It with Fire",
      yearOfPublication: 2021,
      authors: ["Marianne Belotti"],
      summary:
        "This is a great book for anyone involved modernization projects, and for tech leaders in particular. Marianne Belotti shares lessons she learned from personal experience.",
      link: "/blog/key-points-of-kill-it-with-fire",
      coverUrl: "/assets/kill-it-with-fire.jpg",
      spineBackgroundColor: "#244565",
      spineForegroundColor: "#db664b",
      size: "md",
    },
    {
      title: "Beyond Legacy Code",
      yearOfPublication: 2015,
      authors: ["David Bernstein"],
      summary:
        "David Bernstein shares nine concepts and strategies to help you manage legacy code, from automating your tests suite to setting up a Buddy program.",
      link: "/blog/key-points-of-beyond-legacy-code",
      coverUrl: "/assets/beyond-legacy-code.jpg",
    },
    {
      title: "The Legacy Code Programmer's Toolbox",
      yearOfPublication: 2019,
      authors: ["Jonathan Boccara"],
      summary:
        "In this book, Jonathan Boccara shares a collection of techniques he recommends using on legacy codebases. From chosing a stronghold to setting up Dailies at work, it might inspire you.",
      link: "/blog/key-points-of-legacy-code-programmer-toolbox",
      coverUrl: "/assets/legacy-code-progammer-toolbox.jpg",
      fontSize: "12px",
    },
    {
      title: "Re-Engineering Legacy Software",
      yearOfPublication: 2016,
      authors: ["Chris Birchall"],
      summary:
        "I particularly like the fact that Chris Birchall not only shares techniques to improve Legacy Code, but also how to address the Legacy Culture.",
      link: "/blog/key-points-reengineering-legacy-software",
      coverUrl: "/assets/re-engineering-legacy-software.png",
      spineBackgroundColor: "#17191e",
      spineForegroundColor: "#d73639",
      fontSize: "14px",
    },
  ]

  return (
    <>
      <p>
        Few books dig into the challenges of working with legacy systems. These
        ones do.
      </p>
      <p>
        Here is my personal bookshelf. For each book, I've written a high-level
        overview of what you can expect from it. Their salient points, according
        to me.
      </p>
      <p>
        Click the ones that intrigue you to get more details. I put the ones
        that were the most insightful to me first.
      </p>

      <BookGallery books={books} />
    </>
  )
}

function BookGallery({ books }) {
  const [selectedBook, setSelectedBook] = useState(null)

  return (
    <div style={{ marginTop: "50px", marginBottom: "60px" }}>
      <PaperSvg>
        <defs>
          <filter id="paper" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="8"
              result="noise"
            />
            <feDiffuseLighting
              in="noise"
              lighting-color="white"
              surfaceScale="1"
              result="diffLight"
            >
              <feDistantLight azimuth="45" elevation="35" />
            </feDiffuseLighting>
          </filter>
        </defs>
      </PaperSvg>

      {/* Inspired from https://alexandru.so/experiments/book-gallery */}
      <BookList role="list">
        {books.map(book => {
          const isSelected = selectedBook === book
          const bookWidth =
            book.size === "lg" ? 62 : book.size === "md" ? 44 : 28

          return (
            <BookCover
              role="listitem"
              key={book.title}
              onClick={() => setSelectedBook(isSelected ? null : book)}
              className={isSelected && "is-selected"}
              style={{
                flexBasis: isSelected ? "240px" : `${50 + bookWidth}px`,
              }}
            >
              <BookCoverSide
                style={{
                  backgroundColor: book.spineBackgroundColor ?? "#ccc",
                  color: book.spineForegroundColor ?? "#474545",
                  width: `${bookWidth}px`,
                }}
              >
                <span aria-hidden />
                <h2 style={{ fontSize: book.fontSize ?? "16px" }}>
                  {book.title}
                </h2>
              </BookCoverSide>
              <BookCoverFront>
                <span className="right" aria-hidden />
                <span className="left" aria-hidden />
                <img src={book.coverUrl} alt={book.title} />
              </BookCoverFront>
            </BookCover>
          )
        })}
      </BookList>

      {selectedBook && (
        <SelectedBook>
          <dl>
            <dt>Title</dt>
            <dd style={{ fontSize: "18px", fontStyle: "italic" }}>
              {selectedBook.title}
            </dd>
          </dl>
          <dl>
            <dt>Publication</dt>
            <dd>{selectedBook.yearOfPublication}</dd>
          </dl>
          <dl>
            <dt>{selectedBook.authors.length > 1 ? "Authors" : "Author"}</dt>
            <dd>{selectedBook.authors.join(", ")}</dd>
          </dl>
          <dl>
            <dt>What to expect?</dt>
            <dd>{selectedBook.summary}</dd>
          </dl>

          <p style={{ fontSize: "18px" }}>
            Intrigued?{" "}
            <Link to={selectedBook.link}>Read my detailed notes</Link>.
          </p>
        </SelectedBook>
      )}
    </div>
  )
}

const PaperSvg = styled.svg`
  visibility: hidden;
  position: absolute;
  inset: 0;
`

const SelectedBook = styled.div`
  margin-top: 40px;

  & > dl {
    display: flex;
    margin-bottom: 0;

    & > dt {
      flex-basis: 160px;
      flex-shrink: 0;
      font-weight: 600;
    }
  }
`

const BookList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 1rem;
  margin-right: 1rem;
`

const BookCover = styled.button`
  cursor: pointer;
  border: 0;
  appearance: button;
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;

  display: flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;
  outline: 2px solid transparent;
  outline-offset: 2px;

  transition-property: all;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  will-change: auto;

  perspective: 1000px;
  -webkit-perspective: 1000px;

  flex-basis: 100px;
  &:hover,
  &:focus-visible {
    transform: translateY(-16px);
  }
`

const BookCoverSide = styled.div`
  z-index: 50;
  height: 288px;
  flex-shrink: 0;
  padding-top: 16px;
  padding-bottom: 16px;
  filter: contrast(2) brightness(0.8);
  transform-origin: right;
  transform-style: preserve-3d;

  transition-property: all;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  will-change: auto;

  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(-10deg) rotateZ(0deg) skew(0deg, 0deg);
  .is-selected & {
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(-70deg) rotateZ(0deg) skew(0deg, 0deg);
  }

  & > span {
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    height: 100%;
    width: 100%;
    opacity: 0.4;
    filter: url(#paper);
  }

  & > h2 {
    margin: auto;
    font-weight: 500;
    writing-mode: vertical-lr;
  }
`

const BookCoverFront = styled.div`
  position: relative;
  z-index: 10;
  overflow: hidden;
  height: 288px;
  flex-shrink: 0;
  filter: contrast(2) brightness(0.8);
  transform-origin: left;
  transform-style: preserve-3d;

  transition-property: all;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  will-change: auto;

  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(80deg) rotateZ(0deg) skew(0deg, 0deg);
  .is-selected & {
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(20deg) rotateZ(0deg) skew(0deg, 0deg);
  }

  & > span {
    pointer-events: none;
    top: 0;
    z-index: 50;
    height: 100%;
    width: 100%;
  }

  & > span.right {
    position: fixed;
    opacity: 0.4;
    right: 0;
    filter: url(#paper);
  }

  & > span.left {
    position: absolute;
    left: 0;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 2px,
      rgba(255, 255, 255, 0.5) 3px,
      rgba(255, 255, 255, 0.25) 4px,
      rgba(255, 255, 255, 0.25) 6px,
      transparent 7px,
      transparent 9px,
      rgba(255, 255, 255, 0.25) 9px,
      transparent 12px
    );
  }

  & > img {
    height: 100%;
    width: 192px;
    background-size: cover;

    transition-property: all;
    transition-duration: 500ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    will-change: auto;
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
  }
`
