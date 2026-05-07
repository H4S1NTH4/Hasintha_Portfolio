import { Cpu, Github, Linkedin, Mail, MapPin } from "lucide-react";
import type { PortfolioData } from "./types";

type HeroProps = {
  data: PortfolioData;
};

export function Hero({ data }: HeroProps) {
  return (
    <section id="intro" className="section-band pt-8 md:pt-16">
      <div className="grid min-h-[72vh] items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-cyanwire/25 bg-cyanwire/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyanwire">
            <Cpu size={16} />
            IoT | AI Agents | Backend Systems
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.98] text-white md:text-7xl">
            {data.profile.name}
          </h1>
          <p className="mt-5 max-w-3xl text-xl font-semibold text-volt md:text-2xl">{data.profile.title}</p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">{data.about.headline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {data.about.interests.slice(0, 7).map((skill) => (
              <span key={skill} className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="glass-panel rounded-lg p-5">
          <div className="border-b border-white/10 pb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Telemetry Profile</p>
            <p className="mt-2 text-3xl font-bold text-white">Cyber-physical engineer in progress</p>
          </div>
          <div className="mt-5 space-y-4 text-sm text-slate-300">
            <a className="flex items-center gap-3 transition hover:text-cyanwire" href={`mailto:${data.profile.email}`}>
              <Mail size={18} />
              {data.profile.email}
            </a>
            <a className="flex items-center gap-3 transition hover:text-cyanwire" href={data.profile.github}>
              <Github size={18} />
              github.com/H4S1NTH4
            </a>
            <a className="flex items-center gap-3 transition hover:text-cyanwire" href={data.profile.linkedin}>
              <Linkedin size={18} />
              LinkedIn profile
            </a>
            <p className="flex items-center gap-3">
              <MapPin size={18} />
              {data.profile.location}
            </p>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              ["3.59", "GPA"],
              ["4", "Core roles"],
              ["9+", "Tech focus"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-md border border-white/10 bg-white/[0.04] p-3">
                <p className="text-2xl font-black text-cyanwire">{value}</p>
                <p className="text-xs uppercase tracking-[0.14em] text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
