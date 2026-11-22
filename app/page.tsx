import Image from "next/image"
import HobbyButton from "./hobby-button"
import profilePhoto from "./images/rishi-pic.webp"
import gepaFigure from "./images/papers/gepa.webp"
import cachefuseFigure from "./images/papers/cachefuse.webp"
import agentsuiteFigure from "./images/papers/agentsuite.webp"

const scholarUrl = "https://scholar.google.com/citations?user=1SFrDE4AAAAJ"
const githubUrl = "https://github.com/rishiskhare"

const profileLinks = [
  { href: "mailto:rishiskhare@gmail.com", label: "email" },
  { href: "https://drive.google.com/file/d/1alYXNIwHRUtblUzGPGK3b8kSBHmdDIMx/view?usp=sharing", label: "resume" },
  { href: "https://www.linkedin.com/in/rishi-khare/", label: "linkedin" },
  { href: githubUrl, label: "github" },
  { href: "https://x.com/rishiskhare", label: "x" },
  { href: scholarUrl, label: "scholar" },
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
    <div className="shell">
      <div className="page">
        <header className="profile-header">
          <Image src={profilePhoto} alt="Rishi Khare" loading="eager" fetchPriority="high" className="profile-photo" />
          <h1 className="profile-name">Hi, I’m Rishi!</h1>
          <nav aria-label="Profiles" className="profile-links">
            {profileLinks.map((link) => (
              <a key={link.label} href={link.href} className="profile-link">
                {link.label}
              </a>
            ))}
          </nav>
        </header>

        <main>
          <div className="intro">
            <div className="bio">
              <p>
                I’m a <a href={scholarUrl} className="link">researcher</a> and <a href={githubUrl} className="link">engineer</a>. I enjoy creating algorithms and systems for foundation models to accelerate scientific discovery, particularly in system development and architecture design. I work on:
              </p>
              <ul>
                <li>self-improving AI systems, especially for <span className="nowrap">difficult-to-verify</span> domains</li>
                <li>efficient inference and training at scale</li>
              </ul>
            </div>

            <div className="bio">
              <p>
                These days, I’m completing my master’s in computer science at <b>Georgia Tech</b> with Prof. Zishen Wan and interning at <b>NVIDIA</b>, building self-improving coding agents that triage GPU driver bugs.
              </p>

              <p>
                Before that, I studied computer science at <b>UC Berkeley</b>, where I <span className="nowrap">co-authored</span>{" "}
                <a href="https://github.com/gepa-ai/gepa" className="link">GEPA</a>, an evolutionary algorithm that lets AI systems improve by reflecting on their own prior attempts at a task, without retraining model weights. I also spent a year at <b className="nowrap">T-Mobile</b> <b>Research</b>, where I <span className="nowrap">fine-tuned</span> local models for telecommunications and filed three patents.
              </p>

              <p>
                Growing up, I <a href="https://www.worldcubeassociation.org/persons/2016KHAR03" className="link">speedsolved Rubik’s cubes</a>. When I’m not pushing to git, you can find me{" "}
                <HobbyButton />
                .
              </p>
            </div>
          </div>

          <section>
            <h2 className="section-title">selected papers</h2>
            <ul className="papers" role="list">
              {papers.map((paper) => (
                <li key={paper.href} className="paper">
                  <Image src={paper.image} alt="" className="paper-thumb" />
                  <div>
                    <a href={paper.href} className="link">
                      {paper.title}
                    </a>
                    <div className="venue">{paper.venue}</div>
                  </div>
                </li>
              ))}
            </ul>
            <p className="more">
              <a href={scholarUrl} className="link">
                all papers on Google Scholar <span aria-hidden="true">→</span>
              </a>
            </p>
          </section>
        </main>
      </div>
    </div>
  )
}
