import Image from "next/image"
import HobbyButton from "./hobby-button"
import profilePhoto from "./images/rishi-pic.webp"
import gepaFigure from "./images/papers/gepa.webp"
import cachefuseFigure from "./images/papers/cachefuse.webp"
import agentsuiteFigure from "./images/papers/agentsuite.webp"

const profileLinks = [
  { href: "https://drive.google.com/file/d/1alYXNIwHRUtblUzGPGK3b8kSBHmdDIMx/view?usp=sharing", label: "resume" },
  { href: "https://www.linkedin.com/in/rishi-khare/", label: "linkedin" },
  { href: "https://github.com/rishiskhare", label: "github" },
  { href: "https://x.com/rishiskhare", label: "x" },
  { href: "https://scholar.google.com/citations?user=1SFrDE4AAAAJ", label: "scholar" },
]

const papers = [
  {
    title: "GEPA: Reflective Prompt Evolution Can Outperform Reinforcement Learning",
    href: "https://arxiv.org/abs/2507.19457",
    venue: "ICLR 2026 (Oral)",
    image: gepaFigure,
  },
  {
    title: "Think Before You Speak: Enabling Training-Free Latent Communication Between Language Models",
    href: "https://arxiv.org/abs/2610.16165",
    venue: "COLM 2026 Workshop on Efficient Reasoning",
    image: cachefuseFigure,
  },
  {
    title: "AgentSuite: Toward More Reliable Agent Evaluation with a Component-Based Benchmark Auditing Pipeline",
    href: "https://proceedings.mlr.press/v306/suh26a.html",
    venue: "ICML 2026",
    image: agentsuiteFigure,
  },
]

export default function Home() {
  return (
    <div className="flex min-h-dvh items-center justify-center px-8 py-10">
      <div className="max-w-[40rem] w-full">
        <header className="profile-header">
          <div className="profile-image-container-circle profile-header-photo">
            <Image src={profilePhoto} alt="Rishi Khare" loading="eager" fetchPriority="high" className="profile-image" />
          </div>
          <h1 className="profile-header-name retro-heading greeting text-[40px] sm:text-[48px] md:text-[56px]">Hi, I’m Rishi!</h1>
          <nav aria-label="Profiles" className="profile-header-links flex flex-wrap gap-1.5">
            {profileLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="profile-link">
                {link.label}
              </a>
            ))}
          </nav>
        </header>

        <main className="text-base mt-9 space-y-10">
          <div className="space-y-6">
            <div className="bio">
              <p>
                I’m a <a href="https://scholar.google.com/citations?user=1SFrDE4AAAAJ" target="_blank" rel="noopener noreferrer" className="link">researcher</a> and <a href="https://github.com/rishiskhare" target="_blank" rel="noopener noreferrer" className="link">engineer</a>. I enjoy creating algorithms and systems that help foundation models accelerate scientific discovery, particularly in system development and architecture design. I work on:
              </p>
              <ul className="list-disc pl-8 mt-3 space-y-2">
                <li>self-improving AI systems, especially for <span className="whitespace-nowrap">difficult-to-verify</span> domains</li>
                <li>efficient inference and training at scale</li>
              </ul>
            </div>

            <div className="bio space-y-4">
              <p>
                These days, I’m completing my master’s in computer science at <b>Georgia Tech</b> with Prof. Zishen Wan and interning at <b>NVIDIA</b>, building self-improving coding agents that triage GPU driver bugs.
              </p>

              <p>
                Before that, I studied computer science at <b>UC Berkeley</b>, where I <span className="whitespace-nowrap">co-authored</span>{" "}
                <a href="https://github.com/gepa-ai/gepa" target="_blank" rel="noopener noreferrer" className="link">GEPA</a>, an evolutionary algorithm that lets AI systems improve by reflecting on their own prior attempts at a task, without retraining model weights. I also spent a year at <b className="whitespace-nowrap">T-Mobile</b> <b>Research</b>, where I <span className="whitespace-nowrap">fine-tuned</span> local models for telecommunications and filed three patents.
              </p>
            </div>
          </div>

          <section>
            <h2 className="mono font-bold">selected papers</h2>
            <ul className="mt-3 space-y-4">
              {papers.map((paper) => (
                <li key={paper.href} className="grid grid-cols-1 sm:grid-cols-[176px_1fr] gap-3 sm:gap-4 sm:items-center">
                  <Image src={paper.image} alt="" className="paper-thumb max-w-[200px]" />
                  <div>
                    <a href={paper.href} target="_blank" rel="noopener noreferrer" className="link">
                      {paper.title}
                    </a>
                    <div className="mono text-sm">{paper.venue}</div>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              <a href="https://scholar.google.com/citations?user=1SFrDE4AAAAJ" target="_blank" rel="noopener noreferrer" className="link">
                all papers on Google Scholar <span aria-hidden="true">→</span>
              </a>
            </p>
          </section>

          <div className="bio space-y-4">
            <p>
              Growing up, I <a href="https://www.worldcubeassociation.org/persons/2016KHAR03" target="_blank" rel="noopener noreferrer" className="link">speedsolved Rubik’s cubes</a>. When I’m not pushing to git, you can find me{" "}
              <HobbyButton />
              .
            </p>

            <p>
              Reach me anytime at <b className="mono">rishiskhare [at] gmail [dot] com</b>.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
