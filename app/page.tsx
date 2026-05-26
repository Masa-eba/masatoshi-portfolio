import {
  BadgeCheck,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type BrandIconProps = {
  className?: string;
};

function GitHubLogo({ className }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.41-4.04-1.41-.55-1.37-1.33-1.73-1.33-1.73-1.09-.74.08-.72.08-.72 1.2.08 1.84 1.23 1.84 1.23 1.08 1.83 2.82 1.3 3.5.99.1-.77.42-1.3.76-1.6-2.67-.3-5.48-1.32-5.48-5.9 0-1.3.47-2.36 1.23-3.2-.12-.3-.53-1.54.12-3.2 0 0 1.01-.32 3.3 1.22a11.5 11.5 0 0 1 6 0c2.28-1.54 3.29-1.22 3.29-1.22.65 1.66.24 2.9.12 3.2.77.84 1.23 1.9 1.23 3.2 0 4.6-2.81 5.6-5.5 5.9.43.37.82 1.1.82 2.23v3.3c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function XLogo({ className }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M18.9 2H22l-6.76 7.72L23.2 22h-6.24l-4.9-7.5L5.5 22H2.4l7.23-8.26L1.8 2H8.2l4.43 6.96L18.9 2Zm-1.1 18h1.73L7.25 3.9H5.4L17.8 20Z" />
    </svg>
  );
}

function InstagramLogo({ className }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function SpotifyLogo({ className }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M12 1.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21Zm4.82 15.12a.9.9 0 0 1-1.24.3 9.96 9.96 0 0 0-8.36-.92.9.9 0 1 1-.57-1.7 11.75 11.75 0 0 1 9.88 1.08.9.9 0 0 1 .29 1.24Zm1.78-3.09a1.12 1.12 0 0 1-1.53.37 12.13 12.13 0 0 0-10.17-1.1 1.12 1.12 0 0 1-.69-2.13 14.38 14.38 0 0 1 12.07 1.31 1.12 1.12 0 0 1 .32 1.55Zm.15-3.2a1.35 1.35 0 0 1-1.84.44 14.93 14.93 0 0 0-12.47-1.36A1.35 1.35 0 0 1 3.65 6.8a17.62 17.62 0 0 1 14.72 1.6 1.35 1.35 0 0 1 .38 1.87Z" />
    </svg>
  );
}

function AppleMusicLogo({ className }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M17.5 3.2v11.1a3.3 3.3 0 1 1-1.5-2.77V7.03l-6 1.2v8.07a3.3 3.3 0 1 1-1.5-2.77V5.7l9-1.8Z" />
    </svg>
  );
}

function YouTubeLogo({ className }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M23 12s0-3.02-.39-4.48a2.8 2.8 0 0 0-1.97-1.97C19.18 5.16 12 5.16 12 5.16s-7.18 0-8.64.39A2.8 2.8 0 0 0 1.39 7.52C1 8.98 1 12 1 12s0 3.02.39 4.48a2.8 2.8 0 0 0 1.97 1.97c1.46.39 8.64.39 8.64.39s7.18 0 8.64-.39a2.8 2.8 0 0 0 1.97-1.97C23 15.02 23 12 23 12ZM9.7 15.75v-7.5L16 12l-6.3 3.75Z" />
    </svg>
  );
}

function TuneCoreLogo({ className }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M8 8.5h8" />
      <path d="M12 8.5v7.5" />
      <path d="M9.5 16.5h5" />
    </svg>
  );
}

const strengths = [
  {
    title: "Research",
    body: "EV充電ステーション配置最適化",
  },
  {
    title: "Product",
    body: "設計 実装 リリース",
  },
  {
    title: "Sound",
    body: "作詞作曲 Beat Maker Guitar",
  },
];

const projects = [
  {
    title: "放置Me",
    category: "AI / 3D Experience",
    highlights: ["Winner", "3D", "AI Agent"],
    description:
      "Engineer Guild Hackathon 2026 presented by Mercariで優勝したWebアプリケーション。ユーザーのAIクローンが本人に代わって未知の興味や可能性を探索し、まだ見ぬ自分との出会いを生み出す体験を設計しました。",
    url: "https://github.com/engineer-guild-hackathon-2026-05/team-05",
  },
  {
    title: "匠 -takumi-",
    category: "Hackathon / Social Learning",
    highlights: ["Hackathon", "Team Development"],
    description:
      "Engineer Guild Hackathonで企業賞を受賞したソーシャルラーニングアプリ。スキルツリー、師弟関係スレッド、投稿機能を通じて、学びの道のりを可視化しながら継続を支える体験を設計しました。",
    url: "https://github.com/Engineer-Guild-Hackathon/team-4-app",
  },
  {
    title: "Word Galaxy",
    category: "NLP / Visualization",
    highlights: ["Award", "BERT", "2D / 3D"],
    description:
      "技育CAMP ハッカソン Vol.6で努力賞を受賞した学習支援Webアプリ。BERTで算出した単語同士の関連性を2D/3Dで可視化し、単語帳とテスト機能まで含めて学習体験を設計しました。",
    url: "https://github.com/Masa-eba/Word_Galaxy",
  },
];

const techGroups = [
  ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  ["Python", "FastAPI", "Django", "Ruby on Rails"],
  ["PostgreSQL", "Docker", "AWS", "GitHub"],
];

const youtubeEmbedUrl =
  "https://www.youtube.com/embed/T2-BBHQJNTs?list=RDT2-BBHQJNTs&start_radio=1";

const takumiSlidesEmbedUrl =
  "https://www.canva.com/design/DAGzTkaDnx4/4lzrxPDCpTMXWWQilUAo_Q/view?embed";

const wordGalaxySlidesEmbedUrl =
  "https://docs.google.com/presentation/d/16Fi5WfwiokDrPDSavv5lUgfpazfzo0fI/embed?start=false&loop=false&delayms=3000";

const hochiMeSlidesEmbedUrl =
  "https://www.canva.com/design/DAHKsWlJrzM/346qIoZLeeaV8ABgQlzPHQ/view?embed";

const profileImageSrc = "/images/profile/masatoshi-portrait.jpg";
const jacketImageSrc = "/images/music/darii-cover.png";

const musicLinks = [
  {
    title: "Spotify",
    url: "https://open.spotify.com/artist/4ZIHxbWmvE32SNAF6XMjOc",
    icon: SpotifyLogo,
  },
  {
    title: "Apple Music",
    url: "https://music.apple.com/jp/album/%E3%81%A0%E3%82%8A%E3%81%83/1890611237?i=1890611241",
    icon: AppleMusicLogo,
  },
  {
    title: "YouTube",
    url: "https://www.youtube.com/watch?v=T2-BBHQJNTs&list=OLAK5uy_l0bqCM8wOGUQNP81KtM8n8QrPvDhN4Roo",
    icon: YouTubeLogo,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/_masatoshi_for_eba_/",
    icon: InstagramLogo,
  },
];

const links = [
  {
    label: "GitHub",
    href: "https://github.com/Masa-eba",
    icon: GitHubLogo,
  },
  {
    label: "X",
    href: "https://x.com/_Masatoshi_eba_",
    icon: XLogo,
  },
  {
    label: "TuneCore",
    href: "https://www.tunecore.co.jp/artists?id=1107044",
    icon: TuneCoreLogo,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/_masatoshi_for_eba_/",
    icon: InstagramLogo,
  },
];

const certifications = [
  {
    title: "応用情報技術者試験",
    note: "情報処理技術者試験",
    icon: BadgeCheck,
  },
  {
    title: "AWS Certified Cloud Practitioner",
    note: "AWS CLF",
    icon: ShieldCheck,
  },
];

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-medium tracking-[0.3em] text-stone-400 uppercase">
        {label}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-50 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-stone-300">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-hidden text-stone-100">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[34rem] w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,210,122,0.16),transparent_62%)] blur-3xl" />
      <div className="pointer-events-none absolute right-[-12rem] top-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(132,92,255,0.16),transparent_66%)] blur-3xl" />

      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-16 pt-6 sm:pt-8">
        <header className="sticky top-0 z-20 -mx-6 flex items-center justify-between border-b border-white/10 bg-black/35 px-6 pb-6 pt-2 backdrop-blur-xl sm:pt-4">
          <p className="text-sm tracking-[0.28em] text-stone-400 uppercase">
            Masatoshi Abe
          </p>
          <nav className="hidden gap-6 text-sm text-stone-400 md:flex">
            <a href="#certifications" className="transition hover:text-stone-50">
              Certifications
            </a>
            <a href="#projects" className="transition hover:text-stone-50">
              Projects
            </a>
            <a href="#research" className="transition hover:text-stone-50">
              Research
            </a>
            <a href="#music" className="transition hover:text-stone-50">
              Music
            </a>
            <a href="#contact" className="transition hover:text-stone-50">
              Contact
            </a>
          </nav>
        </header>

        <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.25fr_0.75fr] lg:py-24">
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge className="border-white/12 bg-white/6 text-stone-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md">
                Software Engineer
              </Badge>
              <Badge className="border-white/12 bg-white/6 text-stone-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md">
                Researcher
              </Badge>
              <Badge className="border-white/12 bg-white/6 text-stone-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md">
                Beatmaker
              </Badge>
            </div>

            <h1 className="mt-8 max-w-4xl text-5xl leading-[1.02] font-semibold tracking-tight text-stone-50 sm:text-7xl">
              阿部 勝寿
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-stone-300 sm:text-xl">
              同志社大学大学院 理工学研究科 情報工学専攻
              Singer Song Writer & BeatMaker
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-stone-50 px-6 py-3 text-sm font-medium text-stone-950 transition hover:bg-amber-100"
              >
                View Projects
              </a>
              <a
                href="https://github.com/Masa-eba"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/12 bg-white/6 px-6 py-3 text-sm font-medium text-stone-100 backdrop-blur-md transition hover:border-amber-200/30 hover:bg-white/10"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <Card className="overflow-hidden border border-white/10 bg-white/6 shadow-[0_30px_120px_-48px_rgba(0,0,0,0.8)] backdrop-blur-xl">
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
                    Portrait
                  </p>
                  <p className="mt-3 text-3xl leading-tight font-semibold text-stone-50">
                    Masatoshi Abe
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid gap-4 sm:grid-cols-2">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-[1.75rem] border border-white/10 bg-white/5 px-6 py-6 text-base font-medium text-stone-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-amber-200/25 hover:bg-white/8 hover:text-stone-50"
                >
                  <span>{link.label}</span>
                  <link.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <SectionHeading
          label="About"
          title="研究 開発 音楽"
          description=""
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {strengths.map((strength) => (
            <Card
              key={strength.title}
              className="border border-white/8 bg-white/5 shadow-[0_18px_60px_-36px_rgba(0,0,0,0.9)] backdrop-blur-md"
            >
              <CardContent className="p-7">
                <p className="text-sm font-medium text-stone-400">
                  {strength.title}
                </p>
                <p className="mt-4 text-lg leading-8 text-stone-200">
                  {strength.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section
        className="mx-auto w-full max-w-6xl px-6 py-20"
        id="certifications"
      >
        <SectionHeading
          label="Certifications"
          title="資格"
          description=""
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {certifications.map((certification) => (
            <Card
              key={certification.title}
              className="border border-white/10 bg-white/6 shadow-[0_22px_70px_-40px_rgba(0,0,0,0.9)] backdrop-blur-lg"
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-amber-100 shadow-[0_0_24px_rgba(251,191,36,0.08)]">
                    <certification.icon className="size-7" />
                  </div>
                  <Badge className="border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-[0.7rem] tracking-[0.18em] text-emerald-100 uppercase">
                    Certified
                  </Badge>
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-stone-50">
                  {certification.title}
                </h3>
                <p className="mt-3 text-sm tracking-[0.2em] text-stone-400 uppercase">
                  {certification.note}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20" id="projects">
        <SectionHeading
          label="Projects"
          title="開発物"
          description=""
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <Card className="h-full border border-white/10 bg-white/6 shadow-[0_22px_70px_-40px_rgba(0,0,0,0.9)] backdrop-blur-lg transition hover:-translate-y-1 hover:border-amber-200/20 hover:bg-white/8">
                <CardContent className="p-8">
                  <p className="text-xs tracking-[0.24em] text-stone-400 uppercase">
                    {project.category}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.highlights.map((highlight) => (
                      <Badge
                        key={highlight}
                        className={
                          highlight === "Award"
                            ? "border-amber-300/40 bg-amber-200/18 px-3 py-1 text-[0.7rem] tracking-[0.18em] text-amber-50 uppercase shadow-[0_0_24px_rgba(251,191,36,0.16)]"
                            : "border-amber-200/18 bg-amber-200/8 px-3 py-1 text-[0.7rem] tracking-[0.18em] text-amber-100 uppercase"
                        }
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-stone-50">
                    {project.title}
                  </h3>
                  <p className="mt-5 leading-8 text-stone-300">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <Card className="border border-white/10 bg-white/6 shadow-[0_22px_70px_-40px_rgba(0,0,0,0.9)] backdrop-blur-lg">
            <CardContent className="p-8">
              <p className="text-xs tracking-[0.24em] text-stone-400 uppercase">
                HochiMe
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-stone-50">
                放置Me プレゼン資料
              </h3>

              <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-black shadow-[0_22px_80px_-34px_rgba(0,0,0,1)]">
                <iframe
                  src={hochiMeSlidesEmbedUrl}
                  className="aspect-[16/9] w-full"
                  title="放置Me プレゼン資料"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border border-white/10 bg-white/6 shadow-[0_22px_70px_-40px_rgba(0,0,0,0.9)] backdrop-blur-lg">
            <CardContent className="p-8">
              <p className="text-xs tracking-[0.24em] text-stone-400 uppercase">
                Takumi
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-stone-50">
                匠 -takumi- プレゼン資料
              </h3>

              <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-black shadow-[0_22px_80px_-34px_rgba(0,0,0,1)]">
                <iframe
                  src={takumiSlidesEmbedUrl}
                  className="aspect-[16/9] w-full"
                  title="匠 -takumi- プレゼン資料"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border border-white/10 bg-white/6 shadow-[0_22px_70px_-40px_rgba(0,0,0,0.9)] backdrop-blur-lg">
            <CardContent className="p-8">
              <p className="text-xs tracking-[0.24em] text-stone-400 uppercase">
                Word Galaxy
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-stone-50">
                ことばのほしぞら プレゼン資料
              </h3>

              <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-black shadow-[0_22px_80px_-34px_rgba(0,0,0,1)]">
                <iframe
                  src={wordGalaxySlidesEmbedUrl}
                  className="aspect-[16/9] w-full"
                  title="ことばのほしぞら プレゼン資料"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20" id="research">
        <SectionHeading
          label="Research"
          title="研究テーマ"
          description="交通シミュレーションを用いて、充電需要と交通流の両方を踏まえた配置最適化を検討しています。"
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border border-amber-200/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] text-stone-100 shadow-[0_24px_90px_-36px_rgba(0,0,0,0.95)] backdrop-blur-xl">
            <CardContent className="p-8">
              <p className="text-xs tracking-[0.24em] text-amber-200/70 uppercase">
                Current Thesis
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                EV充電ステーション配置最適化
              </h3>

            </CardContent>
          </Card>

          <Card className="border border-white/10 bg-white/6 shadow-[0_22px_70px_-40px_rgba(0,0,0,0.9)] backdrop-blur-lg">
            <CardContent className="p-8">
              <p className="text-xs tracking-[0.24em] text-stone-400 uppercase">
                Stack
              </p>
              <div className="mt-5 grid gap-3">
                {techGroups.map((group) => (
                  <div key={group.join("-")} className="flex flex-wrap gap-2">
                    {group.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-white/10 bg-white/6 px-3 py-1 text-stone-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20" id="music">
        <SectionHeading
          label="Music"
          title="音楽活動"
          description="Hip hopからJ-Rockまで幅広い音楽を網羅"
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="border border-white/10 bg-white/6 shadow-[0_22px_70px_-40px_rgba(0,0,0,0.9)] backdrop-blur-lg">
            <CardContent className="p-8">
              <div className="relative mb-6 aspect-square overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
                <Image
                  src={jacketImageSrc}
                  alt="だりぃ cover art"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 24rem, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <p className="text-xs tracking-[0.24em] text-stone-400 uppercase">
                Latest Release
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-stone-50">
                だりぃ
              </h3>
              <p className="mt-2 text-stone-400">O-7z & 勝寿</p>
              <p className="mt-5 leading-8 text-stone-300">
                O-7z : lyric
                勝寿 : beat
                原点を回帰した伝説の一曲
              </p>

              <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-black shadow-[0_22px_80px_-34px_rgba(0,0,0,1)]">
                <iframe
                  className="aspect-video w-full"
                  src={youtubeEmbedUrl}
                  title="だりぃ - YouTube"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            {musicLinks.map((link) => (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-[1.75rem] border border-white/10 bg-white/5 px-6 py-6 text-base font-medium text-stone-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-amber-200/25 hover:bg-white/8 hover:text-stone-50"
              >
                <span>{link.title}</span>
                <link.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
