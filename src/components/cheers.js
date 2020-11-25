import React from "react"
import styled from "styled-components"
import { Twitter, Facebook, Reddit, Mail } from "react-social-sharing"

import { colors } from "../utils/typography"

function Cheers(props) {
  const { message, link } = props

  const [clapped, toggleClap] = React.useState(false)
  const clap = () => toggleClap(true)

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <Button className={clapped ? "is-clapped" : ""} onClick={clap}>
        <Confettis className={clapped ? "animate" : ""} />
        <Hidden>Cheers!</Hidden>
        {clapped && <SocialMedia message={message} link={link} />}
      </Button>
    </div>
  )
}

function SocialMedia({ text = "Glad you liked this post! 🍷", message, link }) {
  return (
    <Share className="share">
      {/* 📕 https://react-social-sharing.now.sh/#/linkedin */}
      <p>
        {text}
        <br />
        Share it with others who could learn from it.
      </p>
      <Twitter solid small message={message} link={link} />
      <Facebook solid small link={link} />
      <Reddit solid small link={link} />
      <Mail solid small subject={message} link={link} />
    </Share>
  )
}

const Button = styled.button`
  position: relative;
  width: 6em;
  height: 6em;
  border-radius: 50%;
  border-width: 0;
  margin-bottom: 5.5em; // 3.5 (base) + 2
  background: ${colors.white};
  box-shadow: inset 0 0 0 0.25em ${colors.primary},
    inset 0 0 0 2em ${colors.white}, inset 0 0 0 6em ${colors.primary};
  transition: box-shadow 0.5s, margin 1s;

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: "+1";
    font-weight: bold;
    font-size: 2em;
    color: ${colors.white};
    opacity: 0;
    transition: opacity 0;
  }

  &::after {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    content: "👏 Kudos!";
    padding-top: 0.25em;
    font-size: 1.25em;
  }

  &:hover,
  &.is-clapped {
    // Don't visual outline at this point (still accessible on focus)
    outline: none;

    cursor: pointer;
    box-shadow: inset 0 0 0 6.25em ${colors.primary};
    transition-duration: 1.2s;

    &::before {
      opacity: 1;
      transition-delay: 0.2s;
      transition-duration: 0.8s;
    }
  }

  .share {
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translate(1.5em, -50%);
    width: 300px;
    text-align: left;
    display: none;
    opacity: 0;
  }

  &.is-clapped {
    .share {
      display: block;
      opacity: 1;
      animation: appear 1s cubic-bezier(0.99, 0.02, 0.38, 0.99);
    }

    // Keep the whole thing centered
    margin-left: -300px;

    // Hide Kudos
    margin-bottom: 3.5em;

    &::after {
      content: "";
    }
  }

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const Share = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  p {
    margin-bottom: 0;
  }

  a {
    margin-top: 0.25em;
    box-shadow: none;

    &:first-of-type {
      margin-left: 0;
    }
  }
`

const Confettis = styled.div`
  // By default, they are not visible
  &::before,
  &::after {
    position: absolute;
    content: "";
    display: block;
    width: 140%;
    height: 100%;
    left: -20%;
    z-index: -1000;
    transition: all ease-in-out 0.5s;
    background-repeat: no-repeat;
  }

  &::before {
    display: none;
    top: -75%;
    // Draw a few bubbles with different sizes and colors
    background-image: radial-gradient(
        circle,
        ${colors.primary} 20%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        transparent 20%,
        ${colors.primary} 20%,
        transparent 30%
      ),
      radial-gradient(circle, ${colors.primary} 20%, transparent 20%),
      radial-gradient(circle, ${colors.primary} 20%, transparent 20%),
      radial-gradient(
        circle,
        transparent 10%,
        ${colors.primary} 15%,
        transparent 20%
      ),
      radial-gradient(circle, ${colors.primary} 20%, transparent 20%),
      radial-gradient(circle, ${colors.primary} 20%, transparent 20%),
      radial-gradient(circle, ${colors.primary} 20%, transparent 20%),
      radial-gradient(circle, ${colors.primary} 20%, transparent 20%);
    background-size: 20% 20%, 30% 30%, 25% 25%, 30% 30%, 28% 28%, 20% 20%,
      25% 25%, 20% 20%, 28% 28%;
  }

  &::after {
    display: none;
    bottom: -75%;
    // Draw a few bubbles with different sizes and colors
    background-image: radial-gradient(
        circle,
        ${colors.primary} 20%,
        transparent 20%
      ),
      radial-gradient(circle, ${colors.primary} 20%, transparent 20%),
      radial-gradient(
        circle,
        transparent 10%,
        ${colors.primary} 15%,
        transparent 20%
      ),
      radial-gradient(circle, ${colors.primary} 20%, transparent 20%),
      radial-gradient(circle, ${colors.primary} 20%, transparent 20%),
      radial-gradient(circle, ${colors.primary} 20%, transparent 20%),
      radial-gradient(circle, ${colors.primary} 20%, transparent 20%);
    background-size: 25% 25%, 30% 30%, 28% 28%, 30% 30%, 25% 25%, 20% 20%,
      30% 30%;
  }

  // Make them appear and explode!
  &.animate {
    &::before {
      display: block;
      animation: topBubbles ease-in-out 0.75s forwards;
    }

    &::after {
      display: block;
      animation: bottomBubbles ease-in-out 0.75s forwards;
    }
  }

  @keyframes topBubbles {
    // Move each bubble from a grouped position…
    0% {
      background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
        40% 90%, 55% 90%, 70% 90%;
    }

    50% {
      background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
        50% 50%, 65% 20%, 90% 30%;
    }

    // … to a splitted position!
    100% {
      background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
        50% 40%, 65% 10%, 90% 20%;
      // Make them disappear!
      background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
    }
  }

  @keyframes bottomBubbles {
    // Move each bubble from a grouped position…
    0% {
      background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
        70% -10%, 70% 0%;
    }

    50% {
      background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%,
        105% 0%;
    }

    // … to a splitted position!
    100% {
      background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%,
        110% 10%;
      // Make them disappear!
      background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
    }
  }
`

const Hidden = styled.span`
  // Accessible way to hide content visually
  // https://webaim.org/techniques/css/invisiblecontent/
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
`

export { Cheers, SocialMedia }
