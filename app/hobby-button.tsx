"use client"

import { useState, type KeyboardEvent } from "react"

const hobbies = [
  "reading & listening to audiobooks",
  "exploring museums in SF",
  "drinking sparkling water",
  "practicing badminton trickshots",
  "discovering hiking trails",
  "thinking about pushing to git",
]

export default function HobbyButton() {
  const [hobbyIndex, setHobbyIndex] = useState(0)
  const showNextHobby = () => setHobbyIndex((index) => (index + 1) % hobbies.length)

  // A <button> is always laid out as one atomic box, so a long hobby would wrap
  // inside its own rectangle instead of flowing with the sentence. A span with the
  // button role wraps like text, but needs the keyboard handling a button has built in.
  const handleKeyDown = (event: KeyboardEvent<HTMLSpanElement>) => {
    if (event.repeat) return
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      showNextHobby()
    }
  }

  return (
    <>
      <span
        role="button"
        tabIndex={0}
        className="link hobby-link"
        onClick={showNextHobby}
        onKeyDown={handleKeyDown}
        aria-describedby="hobby-hint"
      >
        {hobbies[hobbyIndex]}
      </span>
      <span id="hobby-hint" className="visually-hidden">shows another hobby</span>
    </>
  )
}
