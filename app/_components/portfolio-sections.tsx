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
  "border border-white/10 bg-white/[0.025]";
const linkButtonClassName =
  "inline-flex rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-stone-200 transition hover:border-cyan-300/35 hover:bg-white/[0.07] hover:text-stone-50";

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
      className={`flex flex-col gap-4 overflow-hidden rounded-md bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 ${className}`}
      {...props}
    />
  );
}

function CardContent({ className = "", ...props }: ComponentProps<"div">) {
  return <div className={`px-4 ${className}`} {...props} />;
}

function badgeClassName(tone: "default" | "accent" = "default") {
  const base =
    "border px-3 py-1 text-[0.7rem] font-medium uppercase";

  if (tone === "accent") {
    return `${base} border-cyan-300/30 bg-cyan-300/10 text-cyan-100`;
  }

  return `${base} border-white/10 bg-white/[0.04] text-stone-300`;
}

function isAccentBadge(label: string) {
  return ["最優秀賞", "企業賞", "努力賞", "Certified"].includes(label);
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
            資格
          </a>
          <a href="#activity" className="shrink-0 transition hover:text-stone-50">
            活動
          </a>
          <a href="#projects" className="shrink-0 transition hover:text-stone-50">
            プロジェクト
          </a>
          <a href="#research" className="shrink-0 transition hover:text-stone-50">
            研究
          </a>
        </nav>
      </header>

      <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:py-20 xl:grid-cols-[minmax(0,1fr)_440px]">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge className={badgeClassName()}>大学院生・ソフトウェアエンジニア</Badge>
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
              className="rounded-md bg-cyan-200 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
            >
              プロジェクトを見る
            </a>
            <a
              href="https://github.com/Masa-eba"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium text-stone-100 transition hover:border-cyan-300/35 hover:bg-white/[0.08]"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="grid gap-4">
          <Card className="overflow-hidden border border-white/10 bg-white/[0.025]">
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
                  プロフィール
                </p>
                <p className="mt-3 text-3xl leading-tight font-semibold text-stone-50">
                  Masatoshi Abe
                </p>
                <p className="mt-2 text-sm text-stone-300">
                  大学院生・ソフトウェアエンジニア
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
                  className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.03] px-5 py-4 text-base font-medium text-stone-300 transition hover:border-cyan-300/30 hover:bg-white/[0.07] hover:text-stone-50"
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
      <SectionHeading label="資格" title="取得資格" />

      <div className="mt-10 grid gap-0 border-y border-white/10 md:grid-cols-2">
        {certifications.map((certification) => {
          const Icon = certificationIcons[certification.icon];

          return (
            <Card
              key={certification.title}
              className="group relative overflow-hidden border-b border-white/10 bg-transparent transition hover:bg-white/[0.03] md:even:border-l md:even:pl-5"
            >
              <CardContent className="relative p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex size-12 items-center justify-center rounded-md border border-cyan-300/20 bg-cyan-300/[0.06] text-cyan-200">
                    <Icon className="size-8" />
                  </div>
                  <Badge className={badgeClassName("accent")}>取得済み</Badge>
                </div>
                <h3 className="mt-6 text-2xl leading-tight font-semibold text-stone-50">
                  {certification.title}
                </h3>
                <p className="mt-4 text-sm tracking-[0.2em] text-stone-400 uppercase">
                  {certification.note}
                </p>
                <p className="mt-5 text-sm font-medium text-cyan-200">
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
      <SectionHeading label="活動" title="活動履歴" />

      <div className="relative mt-10 border-l border-white/10 pl-6 sm:pl-10">
        {recentActivities.map((activity, index) => (
          <article
            key={`${activity.date}-${activity.title}`}
            className={`relative grid gap-4 pb-10 sm:grid-cols-[220px_1fr] sm:gap-8 ${
              index === recentActivities.length - 1 ? "pb-0" : ""
            }`}
          >
            <span className="absolute -left-[1.78rem] top-1.5 size-3 rounded-full border-2 border-black bg-cyan-300 sm:-left-[2.78rem]" />
            <time className="whitespace-nowrap text-sm font-medium text-cyan-200">
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
                    className="transition hover:text-cyan-200"
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
      <SectionHeading label="主な取り組み" title="プロジェクト" />

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
                  <p className="mt-4 text-sm font-medium text-cyan-200 uppercase">
                    {project.role}
                  </p>
                  <p className="mt-5 whitespace-pre-line leading-8 text-stone-300">
                    {project.description}
                  </p>
                </div>

                <aside className="border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                  <p className="text-xs tracking-[0.24em] text-stone-500 uppercase">
                    成果
                  </p>
                  <p className="mt-3 text-sm leading-7 text-stone-200">
                    {project.outcome}
                  </p>
                </aside>
              </div>

              <div className="mt-7 border-t border-white/10 pt-5">
                <p className="text-xs tracking-[0.24em] text-stone-500 uppercase">
                  関連リンク
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`${linkButtonClassName} items-center gap-2`}
                  >
                    <brandLogos.github className="size-4" />
                    ソースコード
                  </a>
                  <a
                    href={project.slideUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`${linkButtonClassName} items-center`}
                  >
                    発表資料
                  </a>
                </div>
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
        label="研究"
        title="研究"
      />

      <div className="mt-10 grid gap-5">
        <Card className={`${cardClassName} text-stone-100`}>
          <CardContent className="p-8">
            <p className="text-xs tracking-[0.24em] text-cyan-200/75 uppercase">
              研究テーマ
            </p>
            <h3 className="mt-4 text-3xl font-semibold">
              EV充電ステーション配置最適化
            </h3>
            <p className="mt-6 leading-8 text-stone-300">
              京田辺市のゼロカーボンシティ実現に向け、交通流と充電需要を考慮したEV充電ステーションの配置を研究。待ち時間や未充電量、設置コストを評価して配置候補を比較し、第29回進化計算学会研究会で発表。
            </p>
            <a
              href="https://sites.google.com/view/doshisha-isdl"
              target="_blank"
              rel="noreferrer"
              className={`${linkButtonClassName} mt-7 hover:text-cyan-100`}
            >
              研究室サイト
            </a>
          </CardContent>
        </Card>

        <Card className={`${cardClassName} overflow-hidden text-stone-100`}>
          <CardContent className="p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.24em] text-stone-400 uppercase">
                  学会発表
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-stone-50">
                  発表ポスター
                </h3>
                <p className="mt-3 leading-7 text-stone-400">
                  EV充電ステーション配置最適化
                </p>
              </div>
              <Badge className={badgeClassName("accent")}>ポスター</Badge>
            </div>

            <div className="relative mx-auto mt-6 aspect-[3/4] w-full max-w-3xl overflow-hidden rounded-md border border-white/10 bg-black">
              <Image
                src={researchPosterSrc}
                alt="EV充電ステーション配置最適化の学会発表ポスター"
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 48rem, 100vw"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
