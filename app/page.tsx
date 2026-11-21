"use client"

import { Fragment, useState, useSyncExternalStore } from "react"

const hobbies = [
  "reading & listening to audiobooks",
  "exploring museums in SF",
  "drinking sparkling water",
  "practicing badminton trickshots",
  "discovering hiking trails",
  "thinking about pushing to git",
]

const profileLinks = [
  { href: "https://drive.google.com/file/d/1alYXNIwHRUtblUzGPGK3b8kSBHmdDIMx/view?usp=sharing", label: "resume" },
  { href: "https://www.linkedin.com/in/rishi-khare/", label: "linkedin" },
  { href: "https://github.com/rishiskhare", label: "github" },
  { href: "https://x.com/rishiskhare", label: "x" },
  { href: "https://www.instagram.com/rishiskhare/", label: "instagram" },
  { href: "https://scholar.google.com/citations?user=1SFrDE4AAAAJ", label: "scholar" },
]

const papers = [
  {
    title: "GEPA: Reflective Prompt Evolution Can Outperform Reinforcement Learning",
    href: "https://arxiv.org/abs/2507.19457",
    venue: "ICLR 2026 (Oral)",
    image: "/papers/gepa.webp",
  },
  {
    title: "Think Before You Speak: Enabling Training-Free Latent Communication Between Language Models",
    href: "https://arxiv.org/abs/2610.16165",
    venue: "COLM 2026 Workshop on Efficient Reasoning · solo author",
    image: "/papers/cachefuse.webp",
  },
  {
    title: "AgentSuite: Toward More Reliable Agent Evaluation with a Component-Based Benchmark Auditing Pipeline",
    href: "https://proceedings.mlr.press/v306/suh26a.html",
    venue: "ICML 2026",
    image: "/papers/agentsuite.webp",
  },
]

const greeting = "Hi, I’m Rishi!"

// One color per character position, blue to red, matching the old CSS.
const greetingColors = ["#336ee2", "#4e64d6", "#695aca", "#8450be", "#9f46b2", "#ba3ca6", "#c83a92", "#d5387e", "#e2366a", "#ee3456", "#f63342", "#ff0000", "#ff0000", "#ff0000"]

const greetingWords = greeting.split(" ").map((word, w, words) => {
  const start = words.slice(0, w).join(" ").length + (w > 0 ? 1 : 0)
  return [...word].map((char, c) => {
    const index = start + c
    return {
      char,
      index,
      color: greetingColors[Math.min(index, greetingColors.length - 1)],
      // Stagger each letter's bounce by 0.1s; negative delays start the wave mid-motion on load.
      delay: `${(index - 20) / 10}s`,
    }
  })
})

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

export default function Home() {
  const randomHobbyIndex = useSyncExternalStore(
    subscribeToHobbyIndex,
    getClientHobbyIndex,
    () => 0,
  )
  const [chosenHobbyIndex, setChosenHobbyIndex] = useState<number | null>(null)
  const hobbyIndex = chosenHobbyIndex ?? randomHobbyIndex

  function cycleHobby() {
    setChosenHobbyIndex((hobbyIndex + 1) % hobbies.length)
  }

  return (
    <div className="flex min-h-dvh items-center justify-center px-8 py-10">
      <div className="max-w-[40rem] w-full">
        <h1 className="text-center retro-heading text-5xl" aria-label={greeting}>
          {greetingWords.map((letters, w) => (
            <Fragment key={w}>
              {w > 0 && " "}
              <span className="wave-word" aria-hidden="true">
                {letters.map(({ char, index, color, delay }) => (
                  <span key={index} className="wave-letter" style={{ color, animationDelay: delay }}>
                    {char}
                  </span>
                ))}
              </span>
            </Fragment>
          ))}
        </h1>

        <div className="text-sm mt-8 space-y-10">
          <div className="space-y-6">
            <div className="bio flex flex-col-reverse items-center gap-6 md:flex-row md:gap-8">
              <div className="w-full min-w-0 md:basis-[63%]">
                <p>
                  I’m a <b>researcher</b> and <b>engineer</b>. I build algorithms and systems that help foundation models accelerate scientific discovery, especially in system development and architecture design. I work on:
                </p>
                <ul className="list-disc pl-8 mt-3 space-y-2">
                  <li>self-improving AI systems, especially for <span className="whitespace-nowrap">difficult-to-verify</span> domains</li>
                  <li>efficient inference and training at scale</li>
                </ul>
                <p className="mt-4">
                  {profileLinks.map((link, index) => (
                    <Fragment key={link.label}>
                      {/* Keep each link with its trailing slash so wrapped lines never start with "/". */}
                      <span className="whitespace-nowrap">
                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="link">
                          {link.label}
                        </a>
                        {index < profileLinks.length - 1 && " /"}
                      </span>{" "}
                    </Fragment>
                  ))}
                </p>
              </div>
              <div className="flex justify-center md:basis-[37%]">
                <div className="profile-image-container-circle w-[160px] h-[160px] md:w-full md:h-auto md:aspect-square">
                  <img src="/rishi-pic.webp" alt="Rishi Khare" className="profile-image" />
                </div>
              </div>
            </div>

            <div className="bio space-y-4">
              <p>
                I envision a future with <span className="whitespace-nowrap">on-device</span> intelligence that augments human craftsmanship, rather than replacing it.
              </p>

              <p>
                Right now, I’m finishing my CS master’s at <b>Georgia Tech</b> with Prof. Zishen Wan and interning at <b>NVIDIA</b>, building self-improving agents that triage GPU driver bugs.
              </p>

              <p>
                Before that, I studied CS and data science at <b>UC Berkeley</b>, where I <span className="whitespace-nowrap">co-authored</span>{" "}
                <a href="https://github.com/gepa-ai/gepa" target="_blank" rel="noopener noreferrer" className="link">GEPA</a>, an evolutionary algorithm that lets AI systems improve by reflecting on their own prior attempts at a task, without retraining model weights. I also spent a year at <b>T-Mobile Research</b>, where I <span className="whitespace-nowrap">fine-tuned</span> local models for telecommunications and filed three patents.
              </p>
            </div>
          </div>

          <section aria-labelledby="papers-heading">
            <h2 id="papers-heading" className="font-bold">selected papers</h2>
            <ul className="mt-3 space-y-4">
              {papers.map((paper) => (
                <li key={paper.href} className="grid grid-cols-1 sm:grid-cols-[176px_1fr] gap-3 sm:gap-4 sm:items-center">
                  <img src={paper.image} alt="" width={176} height={110} loading="lazy" className="paper-thumb max-w-[200px]" />
                  <div>
                    <a href={paper.href} target="_blank" rel="noopener noreferrer" className="link">
                      {paper.title}
                    </a>
                    <div className="text-[#4d4d4d]">{paper.venue}</div>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              <a href="https://scholar.google.com/citations?user=1SFrDE4AAAAJ" target="_blank" rel="noopener noreferrer" className="link">
                all papers on Google Scholar →
              </a>
            </p>
          </section>

          <div className="bio space-y-4">
            <p>
              Growing up, I <a href="https://www.worldcubeassociation.org/persons/2016KHAR03" target="_blank" rel="noopener noreferrer" className="link">speedsolved Rubik’s cubes</a>. When I’m not pushing to git, you can find me{" "}
              <button type="button" className="link hobby-link" onClick={cycleHobby}>
                {hobbies[hobbyIndex]}
              </button>
              .
            </p>

            <p>
              Reach me anytime at <b>rishiskhare [at] gmail [dot] com</b>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
