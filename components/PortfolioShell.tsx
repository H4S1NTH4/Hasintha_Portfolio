"use client";

import { useRef } from "react";
import { Award, BookOpen, BriefcaseBusiness, CircuitBoard, GraduationCap, RadioTower } from "lucide-react";
import { CertificateGallery } from "./CertificateGallery";
import { Chatbot } from "./Chatbot";
import { DownloadControls } from "./DownloadControls";
import { Hero } from "./Hero";
import { PortfolioTimeline } from "./PortfolioTimeline";
import type { PortfolioData } from "./types";

type PortfolioShellProps = {
  data: PortfolioData;
};

const navItems = [
  ["Intro", "#intro"],
  ["Journal", "#journal"],
  ["Plan", "#plan"],
  ["CV", "#cv"],
  ["Certificates", "#certificates"],
];

export function PortfolioShell({ data }: PortfolioShellProps) {
  const printRef = useRef<HTMLElement>(null);

  return (
    <>
      <header className="no-print sticky top-0 z-30 border-b border-white/10 bg-graphite/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <a href="#intro" className="flex items-center gap-2 font-black text-white">
            <CircuitBoard className="text-cyanwire" size={22} />
            HD
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white">
                {label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <DownloadControls cvUrl={data.cv_download_url} printRef={printRef} />
      <Chatbot />

      <main ref={printRef} className="print-root mx-auto max-w-7xl px-4 pb-32">
        <section className="print-only print-header">
          <h1>{data.profile.name}</h1>
          <p>
            {data.profile.title} | {data.profile.location}
          </p>
          <p>
            {data.profile.email} | {data.profile.phone} | {data.profile.github} | {data.profile.linkedin}
          </p>
          <p>{data.about.headline}</p>
        </section>

        <div className="no-print">
          <Hero data={data} />
        </div>

        <section id="journal" className="section-band my-14">
          <div className="mb-5 flex items-center gap-3">
            <BookOpen className="text-volt" />
            <h2 className="text-3xl font-black text-white">Reflective Journal</h2>
          </div>
          <div className="glass-panel rounded-lg p-6">
            <p className="text-lg leading-8 text-slate-300">{data.about.summary}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                ["Signal", "Turning embedded sensor data into usable decision flows."],
                ["Systems", "Building Java and WSO2-backed services for real device communication."],
                ["Learning", "Connecting AI agents, IoT, and research-grade behavior modeling."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-md border border-white/10 bg-black/20 p-4">
                  <p className="font-bold text-cyanwire">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="plan" className="section-band my-14">
          <div className="mb-5 flex items-center gap-3">
            <RadioTower className="text-cyanwire" />
            <h2 className="text-3xl font-black text-white">Career Plan</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-4">
            {data.career_plan.map((phase) => (
              <article key={phase.phase} className="glass-panel rounded-lg p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-volt">{phase.phase}</p>
                <h3 className="mt-2 text-xl font-bold text-white">{phase.focus}</h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                  {phase.goals.map((goal) => (
                    <li key={goal} className="border-l border-cyanwire/40 pl-3">
                      {goal}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="cv" className="section-band my-14">
          <div className="mb-5 flex items-center gap-3">
            <BriefcaseBusiness className="text-volt" />
            <h2 className="text-3xl font-black text-white">CV</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
            <aside className="glass-panel rounded-lg p-5">
              <GraduationCap className="text-cyanwire" />
              <h3 className="mt-4 text-xl font-bold text-white">{data.education.degree}</h3>
              <p className="mt-2 text-slate-300">{data.education.institution}</p>
              <p className="mt-4 text-sm text-slate-400">
                {data.education.status} | Cumulative GPA {data.education.gpa}
              </p>
              <div className="mt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-volt">Achievements</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                  {data.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </aside>
            <PortfolioTimeline items={data.cv_content.experience} />
          </div>
        </section>

        <section className="section-band my-14">
          <div className="mb-5 flex items-center gap-3">
            <CircuitBoard className="text-cyanwire" />
            <h2 className="text-3xl font-black text-white">Project Grid</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {data.cv_content.projects.map((project) => (
              <article key={project.name} className="glass-panel rounded-lg p-5">
                <p className="text-sm font-semibold text-volt">{project.stack}</p>
                <h3 className="mt-2 text-xl font-bold text-white">{project.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="certificates" className="section-band my-14">
          <div className="mb-5 flex items-center gap-3">
            <Award className="text-volt" />
            <h2 className="text-3xl font-black text-white">Certificate Grid</h2>
          </div>
          <div className="no-print">
            <CertificateGallery certificates={data.certificates} />
          </div>
          <ul className="print-only">
            {data.certificates.map((certificate) => (
              <li key={certificate.title}>
                <strong>{certificate.title}</strong> - {certificate.issuer}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
