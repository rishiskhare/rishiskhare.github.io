"use client"

import { useState } from "react"

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

  return (
    <>
      <button
        type="button"
        className="link hobby-link"
        onClick={() => setHobbyIndex((index) => (index + 1) % hobbies.length)}
        aria-describedby="hobby-hint"
      >
        {hobbies[hobbyIndex]}
      </button>
      <span id="hobby-hint" className="visually-hidden">shows another hobby</span>
    </>
  )
}
