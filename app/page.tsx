import {
  AtSign,
  BadgeCheck,
  Camera,
  Disc3,
  FolderGit2,
  Music2,
  Play,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const strengths = [
  {
    title: "Research",
    body: "EV充電ステーション配置最適化",
  },
  {
    title: "Product",
    body: "設計　実装　リリース",
  },
  {
    title: "Sound",
    body: "作詞作曲 Beat Maker Guitar",
  },
];

const projects = [
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

const profileImageSrc = "/images/profile/masatoshi-portrait.jpg";
const jacketImageSrc = "/images/music/darii-cover.png";

const musicLinks = [
  {
    title: "Spotify",
    url: "https://open.spotify.com/artist/4ZIHxbWmvE32SNAF6XMjOc",
    icon: Music2,
  },
  {
    title: "Apple Music",
    url: "https://music.apple.com/jp/album/%E3%81%A0%E3%82%8A%E3%81%83/1890611237?i=1890611241",
    icon: Disc3,
  },
  {
    title: "YouTube",
    url: "https://www.youtube.com/watch?v=T2-BBHQJNTs&list=OLAK5uy_l0bqCM8wOGUQNP81KtM8n8QrPvDhN4Roo",
    icon: Play,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/_masatoshi_for_eba_/",
    icon: Camera,
  },
];

const links = [
  {
    label: "GitHub",
    href: "https://github.com/Masa-eba",
    icon: FolderGit2,
    cardClassName:
      "border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] hover:border-stone-200/30 hover:bg-white/10",
    iconWrapClassName:
      "border-white/10 bg-stone-200/8 text-stone-100 shadow-[0_0_30px_rgba(255,255,255,0.08)]",
  },
  {
    label: "X",
    href: "https://x.com/_Masatoshi_eba_",
    icon: AtSign,
    cardClassName:
      "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] hover:border-slate-200/25 hover:bg-slate-100/6",
    iconWrapClassName:
      "border-white/10 bg-black/40 text-white shadow-[0_0_30px_rgba(255,255,255,0.04)]",
  },
  {
    label: "TuneCore",
    href: "https://www.tunecore.co.jp/artists?id=1107044",
    icon: Disc3,
    cardClassName:
      "border-amber-200/12 bg-[linear-gradient(180deg,rgba(251,191,36,0.09),rgba(255,255,255,0.03))] hover:border-amber-200/30 hover:bg-amber-200/10",
    iconWrapClassName:
      "border-amber-200/18 bg-amber-200/10 text-amber-100 shadow-[0_0_34px_rgba(251,191,36,0.16)]",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/_masatoshi_for_eba_/",
    icon: Camera,
    cardClassName:
      "border-fuchsia-300/12 bg-[linear-gradient(180deg,rgba(244,114,182,0.10),rgba(139,92,246,0.05))] hover:border-fuchsia-300/28 hover:bg-fuchsia-200/10",
    iconWrapClassName:
      "border-fuchsia-300/16 bg-fuchsia-300/10 text-fuchsia-100 shadow-[0_0_34px_rgba(217,70,239,0.18)]",
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
              This is
              <span className="block bg-gradient-to-r from-stone-50 via-amber-200 to-stone-400 bg-clip-text text-transparent">
                my LIFE.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-stone-300 sm:text-xl">
              阿部勝寿 同志社大学大学院 理工学研究科 情報工学専攻
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
                  className={`rounded-[1.9rem] p-5 text-stone-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md transition hover:-translate-y-0.5 hover:text-stone-50 ${link.cardClassName}`}
                >
                  <div className="flex h-full min-h-32 flex-col justify-between gap-7">
                    <div
                      className={`flex size-20 items-center justify-center rounded-3xl ${link.iconWrapClassName}`}
                    >
                      <link.icon className="size-10" />
                    </div>
                    <span className="text-xs font-medium tracking-[0.22em] uppercase">
                      {link.label}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <SectionHeading
          label="About"
          title="作る　届ける　そして楽しむ"
          description="研究、開発、音楽"
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
          description="基礎知識だけでなく、継続して技術を整理し直すための指標として資格取得にも取り組んでいます。"
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

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <Card className="border border-white/10 bg-white/6 shadow-[0_22px_70px_-40px_rgba(0,0,0,0.9)] backdrop-blur-lg">
            <CardContent className="p-8">
              <p className="text-xs tracking-[0.24em] text-stone-400 uppercase">
                Takumi Pitch Deck
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
                Word Galaxy Deck
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
          description="シミュレーションを使って、充電需要と交通流の両方を踏まえた配置最適化を検討しています。"
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
              <p className="mt-6 leading-8 text-stone-300">
                UXsimを用いた交通流シミュレーションをもとに、利用需要・待ち時間・配置コストのバランスを考慮した最適化を扱っています。
                実装と分析を往復しながら、現実の制約に耐える設計を目指しています。
              </p>
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
                O-7zがlyric、勝寿がbeatを担当
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
