import { BadgeCheck, ShieldCheck } from "lucide-react";
import Image from "next/image";
import type { ComponentProps } from "react";
import { brandLogos } from "./brand-logos";
import { SectionHeading } from "./section-heading";
import {
  certifications,
  links,
  profileImageSrc,
  projects,
  recentActivities,
  researchPosterSrc,
} from "../_data/portfolio";

const sectionClassName = "mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-20";
const cardClassName =
  "border border-white/10 bg-white/5 shadow-[0_22px_70px_-44px_rgba(0,0,0,0.9)] backdrop-blur-lg";
const linkButtonClassName =
  "inline-flex rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-stone-200 transition hover:border-amber-200/25 hover:bg-white/10 hover:text-stone-50";

const certificationIcons = {
  badge: BadgeCheck,
  shield: ShieldCheck,
};

function Badge({ className = "", ...props }: ComponentProps<"span">) {
  return (
    <span
      className={`inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all [&>svg]:pointer-events-none [&>svg]:size-3! ${className}`}
      {...props}
    />
  );
}

function Card({ className = "", ...props }: ComponentProps<"div">) {
  return (
    <div
      className={`flex flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 ${className}`}
      {...props}
    />
  );
}

function CardContent({ className = "", ...props }: ComponentProps<"div">) {
  return <div className={`px-4 ${className}`} {...props} />;
}

function badgeClassName(tone: "default" | "accent" = "default") {
  const base =
    "border px-3 py-1 text-[0.7rem] font-medium tracking-[0.16em] uppercase backdrop-blur-md";

  if (tone === "accent") {
    return `${base} border-amber-300/35 bg-amber-200/14 text-amber-50 shadow-[0_0_24px_rgba(251,191,36,0.14)]`;
  }

  return `${base} border-white/10 bg-white/6 text-stone-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]`;
}

function isAccentBadge(label: string) {
  return ["Award", "Winner", "Certified"].includes(label);
}

export function HeroSection() {
  return (
    <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-16 pt-6 sm:pt-8">
      <header className="sticky top-0 z-20 -mx-6 flex items-center gap-6 border-b border-white/10 bg-black/35 px-6 pb-4 pt-2 backdrop-blur-xl sm:justify-between sm:pb-6 sm:pt-4">
        <p className="hidden shrink-0 text-sm tracking-[0.28em] text-stone-400 uppercase sm:block">
          Masatoshi Abe
        </p>
        <nav
          aria-label="メインナビゲーション"
          className="flex w-full gap-5 overflow-x-auto text-sm text-stone-400 sm:w-auto"
        >
          <a href="#certifications" className="shrink-0 transition hover:text-stone-50">
            Certifications
          </a>
          <a href="#activity" className="shrink-0 transition hover:text-stone-50">
            Activity
          </a>
          <a href="#projects" className="shrink-0 transition hover:text-stone-50">
            Projects
          </a>
          <a href="#research" className="shrink-0 transition hover:text-stone-50">
            Research
          </a>
        </nav>
      </header>

      <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:py-20 xl:grid-cols-[minmax(0,1fr)_440px]">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge className={badgeClassName()}>Software Engineer / M1</Badge>
            <Badge className={badgeClassName()}>Web / AI / Cloud</Badge>
          </div>

          <h1 className="mt-8 max-w-4xl text-5xl leading-[1.04] font-semibold text-stone-50 sm:text-7xl">
            阿部 勝寿
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-stone-300 sm:text-xl">
            同志社大学大学院 理工学研究科 情報工学専攻
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-2xl bg-stone-50 px-6 py-3 text-sm font-medium text-stone-950 transition hover:bg-amber-100"
            >
              View Projects
            </a>
            <a
              href="https://github.com/Masa-eba"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-stone-100 backdrop-blur-md transition hover:border-amber-200/30 hover:bg-white/10"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="grid gap-4">
          <Card className="overflow-hidden border border-white/10 bg-white/5 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.9)] backdrop-blur-lg">
            <div className="relative aspect-[4/5]">
              <Image
                src={profileImageSrc}
                alt="Masatoshi Abe portrait"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 28rem, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="text-xs tracking-[0.24em] text-stone-400 uppercase">
                  Profile
                </p>
                <p className="mt-3 text-3xl leading-tight font-semibold text-stone-50">
                  Masatoshi Abe
                </p>
                <p className="mt-2 text-sm text-stone-300">
                  Graduate Student / Software Engineer
                </p>
              </div>
            </div>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            {links.map((link) => {
              const Icon = brandLogos[link.icon];

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-6 text-base font-medium text-stone-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-amber-200/25 hover:bg-white/8 hover:text-stone-50"
                >
                  <span>{link.label}</span>
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CertificationsSection() {
  return (
    <section
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-16"
      id="certifications"
    >
      <SectionHeading label="Certifications" title="取得資格" />

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {certifications.map((certification) => {
          const Icon = certificationIcons[certification.icon];

          return (
            <Card
              key={certification.title}
              className="group relative overflow-hidden border border-amber-200/18 bg-gradient-to-br from-amber-200/12 via-white/6 to-white/[0.03] shadow-[0_28px_90px_-46px_rgba(251,191,36,0.7)] backdrop-blur-lg transition hover:-translate-y-1 hover:border-amber-200/35"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-amber-200/12 blur-2xl transition group-hover:bg-amber-200/20" />
              <CardContent className="relative p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex size-16 items-center justify-center rounded-3xl border border-amber-200/20 bg-black/30 text-amber-100 shadow-[0_0_32px_rgba(251,191,36,0.16)]">
                    <Icon className="size-8" />
                  </div>
                  <Badge className={badgeClassName("accent")}>Certified</Badge>
                </div>
                <h3 className="mt-6 text-2xl leading-tight font-semibold text-stone-50">
                  {certification.title}
                </h3>
                <p className="mt-4 text-sm tracking-[0.2em] text-stone-400 uppercase">
                  {certification.note}
                </p>
                <p className="mt-5 text-sm font-medium tracking-[0.14em] text-amber-100">
                  {certification.earned}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export function ActivitySection() {
  return (
    <section className={sectionClassName} id="activity">
      <SectionHeading label="Recent Activity" title="最近の活動" />

      <div className="relative mt-10 border-l border-white/10 pl-6 sm:pl-10">
        {recentActivities.map((activity, index) => (
          <article
            key={`${activity.date}-${activity.title}`}
            className={`relative grid gap-4 pb-10 sm:grid-cols-[220px_1fr] sm:gap-8 ${
              index === recentActivities.length - 1 ? "pb-0" : ""
            }`}
          >
            <span className="absolute -left-[1.78rem] top-1.5 size-3 rounded-full border-2 border-black bg-amber-200 shadow-[0_0_18px_rgba(251,191,36,0.6)] sm:-left-[2.78rem]" />
            <time className="whitespace-nowrap text-sm font-medium tracking-[0.12em] text-amber-100">
              {activity.date}
            </time>
            <div className="border-b border-white/10 pb-10">
              <p className="text-xs tracking-[0.24em] text-stone-500 uppercase">
                {activity.category}
              </p>
              <h3 className="mt-3 whitespace-pre-line text-xl font-semibold text-stone-50 sm:text-2xl">
                {activity.url ? (
                  <a
                    href={activity.url}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-amber-100"
                  >
                    {activity.title}
                  </a>
                ) : (
                  activity.title
                )}
              </h3>
              {activity.description ? (
                <p className="mt-4 max-w-3xl leading-8 text-stone-300">
                  {activity.description}
                </p>
              ) : null}
              {activity.image && activity.imageAlt ? (
                <a
                  href={activity.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`relative mx-auto mt-6 block overflow-hidden rounded-2xl border border-white/10 bg-black ${
                    activity.imageOrientation === "portrait"
                      ? "aspect-[3/4] w-full max-w-lg"
                      : "aspect-[16/9] w-full max-w-3xl"
                  }`}
                >
                  <Image
                    src={activity.image}
                    alt={activity.imageAlt}
                    fill
                    className={`transition duration-500 hover:scale-[1.02] ${
                      activity.imageOrientation === "portrait"
                        ? "object-contain"
                        : "object-cover"
                    }`}
                    sizes={
                      activity.imageOrientation === "portrait"
                        ? "(min-width: 1024px) 32rem, 100vw"
                        : "(min-width: 1024px) 48rem, 100vw"
                    }
                  />
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section className={sectionClassName} id="projects">
      <SectionHeading label="Selected Projects" title="開発実績" />

      <div className="mt-10 grid gap-5">
        {projects.map((project) => (
          <Card key={project.title} className={`h-full ${cardClassName}`}>
            <CardContent className="p-8">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
                <div>
                  <p className="text-xs tracking-[0.24em] text-stone-400 uppercase">
                    {project.category}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.highlights.map((highlight) => (
                      <Badge
                        key={highlight}
                        className={badgeClassName(
                          isAccentBadge(highlight) ? "accent" : "default"
                        )}
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-stone-50">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm font-medium tracking-[0.14em] text-amber-100 uppercase">
                    {project.role}
                  </p>
                  <p className="mt-5 whitespace-pre-line leading-8 text-stone-300">
                    {project.description}
                  </p>
                </div>

                <aside className="border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                  <p className="text-xs tracking-[0.24em] text-stone-500 uppercase">
                    Outcome
                  </p>
                  <p className="mt-3 text-sm leading-7 text-stone-200">
                    {project.outcome}
                  </p>
                  <p className="mt-6 text-xs tracking-[0.24em] text-stone-500 uppercase">
                    Stack
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech} className={badgeClassName()}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </aside>
              </div>

              <div className="mt-7 border-t border-white/10 pt-5">
                <p className="text-xs tracking-[0.24em] text-stone-500 uppercase">
                  Links
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`${linkButtonClassName} items-center gap-2`}
                  >
                    <brandLogos.github className="size-4" />
                    GitHub
                  </a>
                  <a
                    href={project.slideUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`${linkButtonClassName} items-center`}
                  >
                    Slides
                  </a>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_22px_80px_-44px_rgba(0,0,0,1)]">
                <iframe
                  src={project.slideUrl}
                  className="aspect-[16/9] w-full"
                  title={`${project.title} 発表資料`}
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function ResearchSection() {
  return (
    <section className={sectionClassName} id="research">
      <SectionHeading
        label="Research"
        title="研究"
        description="交通流シミュレーションと最適化を用いて、EV充電インフラ配置を評価しています。"
      />

      <div className="mt-10 grid gap-5">
        <Card className={`${cardClassName} text-stone-100`}>
          <CardContent className="p-8">
            <p className="text-xs tracking-[0.24em] text-amber-200/70 uppercase">
              Research Theme
            </p>
            <h3 className="mt-4 text-3xl font-semibold">
              EV充電ステーション配置最適化
            </h3>
            <p className="mt-6 leading-8 text-stone-300">
              京田辺市のゼロカーボンシティ実現に向け、電気自動車の導入拡大を見据えた充電ステーション配置最適化に取り組んでいます。
              交通流、充電需要、待ち時間、未充電量、設置コストを同時に評価し、利用者の負担と設置側のコストを抑える配置を検討しています。
              第29回進化計算学会研究会で発表し、実観測データ、OpenStreetMap道路網、ODデータを組み合わせ、目的関数に基づいて候補配置を評価しました。
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["UXsim", "OpenStreetMap", "OD Data", "Optimization"].map(
                (tech) => (
                  <Badge key={tech} className={badgeClassName()}>
                    {tech}
                  </Badge>
                )
              )}
            </div>
            <a
              href="https://sites.google.com/view/doshisha-isdl"
              target="_blank"
              rel="noreferrer"
              className={`${linkButtonClassName} mt-7 hover:text-amber-100`}
            >
              研究室サイトを見る
            </a>
          </CardContent>
        </Card>

        <Card className={`${cardClassName} overflow-hidden text-stone-100`}>
          <CardContent className="p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.24em] text-stone-400 uppercase">
                  Conference Poster
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-stone-50">
                  学会発表ポスター
                </h3>
                <p className="mt-3 leading-7 text-stone-400">
                  EV充電ステーション配置問題の定式化
                </p>
              </div>
              <Badge className={badgeClassName("accent")}>Poster</Badge>
            </div>

            <div className="mx-auto mt-6 aspect-[3/4] w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_22px_80px_-44px_rgba(0,0,0,1)]">
              <iframe
                src={researchPosterSrc}
                title="EV充電ステーション配置最適化の学会発表ポスター"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
