"use client"

import { useState, useSyncExternalStore } from "react"

const hobbies = [
  "reading & listening to audiobooks",
  "exploring museums in SF",
  "drinking sparkling water",
  "practicing badminton trickshots",
  "discovering hiking trails",
  "thinking about pushing to git",
]

let clientHobbyIndex: number | null = null

function subscribeToHobbyIndex() {
  return () => {}
}

function getClientHobbyIndex() {
  if (clientHobbyIndex === null) {
    clientHobbyIndex = Math.floor(Math.random() * hobbies.length)
  }
  return clientHobbyIndex
}

export default function HobbyButton() {
  const randomHobbyIndex = useSyncExternalStore(subscribeToHobbyIndex, getClientHobbyIndex, () => 0)
  const [chosenHobbyIndex, setChosenHobbyIndex] = useState<number | null>(null)
  const hobbyIndex = chosenHobbyIndex ?? randomHobbyIndex

  function cycleHobby() {
    setChosenHobbyIndex((hobbyIndex + 1) % hobbies.length)
  }

  return (
    <>
      <button type="button" className="link hobby-link" onClick={cycleHobby} aria-describedby="hobby-hint">
        {hobbies[hobbyIndex]}
      </button>
      <span id="hobby-hint" className="sr-only">shows another hobby</span>
    </>
  )
}
