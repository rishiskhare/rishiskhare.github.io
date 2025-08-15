"use client"

import { useState } from "react"

const interests = [
  "efficient natural language processing",
  "reinforcement learning for LLM reasoning",
  "agentic function-calling and information retrieval",
]

const hobbies = [
  "reading & listening to audiobooks",
  "exploring museums in SF",
  "drinking sparkling water",
  "practicing badminton trickshots",
  "discovering hiking trails",
  "thinking about pushing to git",
]

const greeting = "Hi, I'm Rishi!"

export default function Home() {
  const [hobbyIndex, setHobbyIndex] = useState(Math.floor(Math.random() * hobbies.length))

  const greetingCharacters = greeting.split("").map((char) => (char === " " ? "\u00A0" : char))

  function cycleHobby() {
    setHobbyIndex((hobbyIndex + 1) % hobbies.length)
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-8 py-8">
      <div className="max-w-4xl w-full">
        <h1 className="text-center retro-heading text-5xl wave">
            {greetingCharacters.map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
        </h1>

        <div className="lg:hidden flex justify-center mt-8 mb-4">
          <div className="profile-image-container-circle w-[160px] h-[160px] md:w-[220px] md:h-[220px]">
            <img src="/rishi-pic.webp" alt="Rishi Khare" className="profile-image" />
          </div>
        </div>

        <div className="text-base mt-8 space-y-8">
          <div className="relative md:p-6 md:bg-white md:border-[1.5px] md:border-solid md:border-[rgba(0,0,0,0.85)] md:shadow-[4px_4px_0px_#000] rounded-md">
            <div className="hidden lg:block float-right ml-6 mb-4 mt-0">
              <div className="profile-image-container-circle w-[240px] h-[240px]">
                <img src="/rishi-pic.webp" alt="Rishi Khare" className="profile-image" />
              </div>
            </div>

            <p>
              I'm a <b>researcher</b> and <b>engineer</b> fascinated by:
            </p>
            <ul className="list-disc pl-8 mt-3 mb-5 space-y-2">
              {interests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>

            <p className="mt-5">
              These days, I'm studying <b>computer science</b> at <b>Georgia Tech</b> as a master's student, while also pursuing efficent ML research at the EIC Lab with Prof. Celine Lin. I recently graduated from <b>UC Berkeley</b>{" "}
              with a bachelor's degree in <b>computer science</b>.
            </p>

            <p className="mt-5">
              Previously, I worked as an undergraduate researcher at the <b>Berkeley AI Research (BAIR) Lab</b> with the <a href="https://sky.cs.berkeley.edu/project/matryoshka/" target="_blank" rel="noopener noreferrer" className="link">AI security group</a>.
              I've also spent a year interning at <b>T-Mobile Research</b>, finetuning
              telco-RAG systems for domain adaptation and building evaluation frameworks for synthetic datasets (and filing <b>2 USPTO utility patents</b> for my work).
              I've also interned at <b>Amazon</b>, evaluating the shopping multi-agent framework.
            </p>

            <p className="mt-5">
              Growing up, I <a href="https://www.worldcubeassociation.org/persons/2016KHAR03" target="_blank" rel="noopener noreferrer" className="link">speedsolved Rubik's cubes</a>. When I'm not pushing to git, you can find me{" "}
              <a className="link hobby-link" onClick={cycleHobby}>
                {hobbies[hobbyIndex]}
              </a>
              .
            </p>

            <p className="mt-5">
              I'm constantly looking to <a href="https://github.com/rishiskhare/perplexity-on-google-search" target="_blank" rel="noopener noreferrer" className="link">build something new</a>. Reach me anytime at <b>rishi.khare [at] berkeley [dot] edu.</b>
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mt-8">
            {[
              { href: "https://drive.google.com/file/d/1alYXNIwHRUtblUzGPGK3b8kSBHmdDIMx/view?usp=sharing", label: "resume" },
              { href: "https://www.linkedin.com/in/rishi-khare/", label: "linkedin" },
              { href: "https://github.com/rishiskhare", label: "github" },
              { href: "https://x.com/rishiskhare", label: "x" },
              { href: "https://www.instagram.com/rishiskhare/", label: "instagram" },
              { href: "https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=ANZ5fUP-D0RMLmTn3pZ9BBawlICFWs8WBxt3Ruir1vK9oZ_H5vrFHFiewFtE1y1EIX5RTAarwfun-EhDV8_z-g&user=1SFrDE4AAAAJ", label: "scholar" },
            ].map((link, index) => (
              <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="social-link rounded-md">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
