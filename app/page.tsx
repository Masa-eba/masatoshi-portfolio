import {
  BadgeCheck,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { assetPath } from "@/lib/assets";

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

const projects = [
  {
    title: "放置Me",
    category: "AI / 3D Experience",
    highlights: ["Winner", "3D", "AI Agent"],
    description:
      "Engineer Guild Hackathon 2026 presented by 株式会社メルカリ 優勝・賞金100万円獲得\n「放置Me」は、ユーザーのAIクローンが本人に代わって未知の興味や可能性を探索し、まだ見ぬ自分との出会いを生み出すWebアプリケーションです。SupabaseとGemini APIを用いたバックエンド開発、LLM連携を主に担当しました。",
    url: "https://github.com/engineer-guild-hackathon-2026-05/team-05",
    slideUrl:
      "https://www.canva.com/design/DAHKsWlJrzM/346qIoZLeeaV8ABgQlzPHQ/view?embed",
  },
  {
    title: "匠 -takumi-",
    category: "Hackathon / Social Learning",
    highlights: ["Award", "Hackathon", "Team Development"],
    description:
      "Engineer Guild Hackathon 2025 by AtCoder エムスリー賞受賞\n「匠 (Takumi)」は、学びの道のりを可視化し、仲間や「ちょっと先の先輩」との繋がりを通じて成長できる、ソーシャルラーニング・プラットフォームです。私は師弟関係をツリー構造で可視化する中核機能の設計・実装を担当しました。",
    url: "https://github.com/Engineer-Guild-Hackathon/team-4-app",
    slideUrl:
      "https://www.canva.com/design/DAGzTkaDnx4/-4KTiJNVV-PZ5cghKssGbw/view?embed",
  },
  {
    title: "Word Galaxy",
    category: "NLP / Visualization",
    highlights: ["Award", "BERT", "2D / 3D"],
    description:
      "技育CAMP ハッカソン Vol.6 努力賞受賞\n「ことばのほしぞら」は、単語間の関連性を星座のように可視化し、関係性をたどりながら理解を深められる学習Webアプリケーションです。BERTで意味的類似性を算出し、2D/3D表示、検索、単語帳、テストまでを含む学習導線を構築しました。",
    url: "https://github.com/Masa-eba/Word_Galaxy",
    slideUrl:
      "https://docs.google.com/presentation/d/16Fi5WfwiokDrPDSavv5lUgfpazfzo0fI/embed?start=false&loop=false&delayms=3000",
  },
  {
    title: "ISDLシミュレータ",
    category: "Novel Game / Lab Experience",
    highlights: ["Winner", "React", "FastAPI"],
    description:
      "同志社大学 知的システムデザイン研究室 ISDLハッカソン優勝\n「ISDLシミュレータ」は、ISDLでの1年間をノベルゲーム形式で体験できるWebアプリケーションです。役割選択、研究活動、イベント、会話を通して、学生生活の成長と人間関係の変化を表現しました。React + Vite、FastAPI、SQLiteで構成しています。",
    url: "https://github.com/Masa-eba/isdl-hackathon-2025",
    slideUrl:
      "https://docs.google.com/presentation/d/e/2PACX-1vTAJ_aHn2aRKqLqqX2MyyoCRXrtjMAS-6MJJ1BovpeqSS5VQAo0WxAkSAQEU7GjBA/pubembed?start=false&loop=false&delayms=3000",
  },
];

const profileImageSrc = assetPath("/images/profile/masatoshi-portrait-v2");
const jacketImageSrc = assetPath("/images/music/darii-cover.png");
const researchPosterSrc = assetPath("/images/research/poster.png");

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
    earned: "2025.10 合格",
    icon: BadgeCheck,
  },
  {
    title: "AWS Certified Cloud Practitioner",
    note: "AWS CLF",
    earned: "2026.02 取得",
    icon: ShieldCheck,
  },
];

type RecentActivity = {
  date: string;
  category: string;
  title: string;
  description?: string;
  url?: string;
  image?: string;
  imageAlt?: string;
  imageOrientation?: "landscape" | "portrait";
};

const recentActivities: RecentActivity[] = [
  {
    date: "2026.09.02 - 2026.09.18",
    category: "Internship",
    title: "LINEヤフー株式会社",
  },
  {
    date: "2026.08.22",
    category: "Internship",
    title: "朝日新聞社",
  },
  {
    date: "2026.08.10 - 2026.08.14",
    category: "Internship",
    title: "日本経済新聞社",
  },
  {
    date: "2026.05.24 - 2026.05.26",
    category: "Award",
    title:
      "Engineer Guild Hackathon 2026 presented by 株式会社メルカリ\n優勝・賞金100万円獲得",
    description:
      "ユーザーのAIクローンが未知の興味を探索するWebアプリケーション「放置Me」を開発し、優勝・賞金100万円を獲得しました。",
    url: "https://careers.mercari.com/mercan/articles/62377/",
    image: assetPath("/images/activities/Hackathon_2026.jpeg"),
    imageAlt: "Engineer Guild Hackathon 2026 記念写真",
  },
  {
    date: "2026.04.01",
    category: "Education",
    title: "同志社大学大学院 入学",
    description: "同志社大学大学院 理工学研究科 情報工学専攻に入学しました。",
    url: "https://www.doshisha.ac.jp/",
  },
  {
    date: "2026.03.22",
    category: "Education",
    title: "同志社大学 卒業",
    description: "同志社大学 理工学部を卒業しました。",
    url: "https://www.doshisha.ac.jp/",
  },
  {
    date: "2026.03.16 - 2026.03.17",
    category: "Research",
    title: "第29回進化計算学会研究会で研究発表",
    description:
      "「UXsimを用いたEV充電ステーション配置問題の定式化」について、交通流と充電需要を考慮した配置最適化の研究成果を発表しました。",
    url: "https://www.jpnsec.org/symposium202601.html",
    image: assetPath("/images/activities/Gakkai_2026.jpg"),
    imageAlt: "第29回進化計算学会研究会でのポスターとの記念写真",
    imageOrientation: "portrait",
  },
  {
    date: "2026.02",
    category: "Certification",
    title: "AWS Certified Cloud Practitioner 取得",
    description:
      "AWS Certified Cloud Practitioner（CLF）を取得しました。",
  },
  {
    date: "2026.02.18",
    category: "Research",
    title: "卒業論文発表",
    description: "卒業論文を発表しました。",
    url: "https://sites.google.com/view/doshisha-isdl",
    image: assetPath("/images/activities/graduate.JPG"),
    imageAlt: "卒業論文発表の写真",
  },
  {
    date: "2025.10",
    category: "Certification",
    title: "応用情報技術者試験 合格",
    description: "情報処理技術者試験 応用情報技術者試験に合格しました。",
  },
  {
    date: "2025.10 - 2026.05",
    category: "Career",
    title: "Software Engineer Intern",
    description:
      "タレントプールサービスの開発に従事しました。Next.js、TypeScript、Ruby on Railsを用いたフロントエンド・バックエンド開発を担当し、企業向け管理画面やユーザー向け機能の実装、UI改善に取り組みました。",
  },
  {
    date: "2025.09.03 - 2025.09.20",
    category: "Award",
    title: "Engineer Guild Hackathon 2025 by AtCoder\nエムスリー賞受賞",
    description:
      "学びの道のりと師弟関係を可視化するソーシャルラーニング・プラットフォーム「匠 -takumi-」を4人チームで開発しました。",
    url: "https://github.com/Engineer-Guild-Hackathon/team-4-app",
    image: assetPath("/images/activities/Hackathon_2025.jpg"),
    imageAlt: "Engineer Guild Hackathon 2025 受賞写真",
  },
  {
    date: "2025.08.30 - 2025.09.12",
    category: "Award",
    title: "ISDLハッカソン 優勝",
    description:
      "知的システムデザイン研究室内のハッカソンで、研究室での1年間を体験できるノベルゲーム形式のWebアプリケーション「ISDLシミュレータ」を開発し、優勝しました。",
    url: "https://github.com/Masa-eba/isdl-hackathon-2025",
    image: assetPath("/images/activities/Hackathon_isdl.jpg"),
    imageAlt: "ISDLハッカソンの発表写真",
  },
  {
    date: "2025.07.03 - 2025.07.13",
    category: "Award",
    title: "技育CAMP ハッカソン Vol.6 努力賞受賞",
    description:
      "単語間の関連性を星座のように可視化する学習Webアプリケーション「ことばのほしぞら / Word Galaxy」を4人チームで開発しました。",
    url: "https://x.com/geek_pjt/status/1944327502555725871",
    image: assetPath("/images/activities/Word_Galaxy.png"),
    imageAlt: "技育CAMP ハッカソン Vol.6 努力賞の賞状",
    imageOrientation: "portrait",
  },
  {
    date: "2025.05.18 - 2025.06.22",
    category: "Award",
    title: "プログラミング初学者の会主催 WEBアプリハッカソン\n最優秀賞",
    description:
      "社会人を含む参加者が集まる初心者向けハッカソンで、Gemini APIを用いてユーザーに合ったトレーニングを提案する筋トレアプリを開発し、最優秀賞を受賞しました。",
    url: "https://pg-beginner-mtg.connpass.com/event/352268/",
  },
  {
    date: "2025.04 - Present",
    category: "Research",
    title: "知的システムデザイン研究室（ISDL）に所属",
    description:
      "研究活動に取り組みながら、チーフとして研究室運営にも携わっています。",
    url: "https://sites.google.com/view/doshisha-isdl",
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
      <h2 className="mt-3 text-3xl font-semibold text-stone-50 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-stone-300">
          {description}
        </p>
      ) : null}
    </div>
  );
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

export default function Home() {
  return (
    <main className="relative overflow-hidden text-stone-100">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-16 pt-6 sm:pt-8">
        <header className="sticky top-0 z-20 -mx-6 flex items-center gap-6 border-b border-white/10 bg-black/35 px-6 pb-4 pt-2 backdrop-blur-xl sm:justify-between sm:pb-6 sm:pt-4">
          <p className="hidden shrink-0 text-sm tracking-[0.28em] text-stone-400 uppercase sm:block">
            Masatoshi Abe
          </p>
          <nav
            aria-label="メインナビゲーション"
            className="flex w-full gap-5 overflow-x-auto text-sm text-stone-400 sm:w-auto"
          >
            <a href="#activity" className="shrink-0 transition hover:text-stone-50">
              Activity
            </a>
            <a href="#certifications" className="shrink-0 transition hover:text-stone-50">
              Certifications
            </a>
            <a href="#projects" className="shrink-0 transition hover:text-stone-50">
              Projects
            </a>
            <a href="#research" className="shrink-0 transition hover:text-stone-50">
              Research
            </a>
            <Link href="/music" className="shrink-0 transition hover:text-stone-50">
              Music
            </Link>
          </nav>
        </header>

        <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:py-20 xl:grid-cols-[minmax(0,1fr)_440px]">
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge className={badgeClassName()}>
                Software Engineer
              </Badge>
              <Badge className={badgeClassName()}>
                Researcher
              </Badge>
              <Badge className={badgeClassName()}>BeatMaker</Badge>
            </div>

            <h1 className="mt-8 max-w-4xl text-5xl leading-[1.04] font-semibold text-stone-50 sm:text-7xl">
              阿部 勝寿
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-stone-300 sm:text-xl">
              同志社大学大学院 理工学研究科 情報工学専攻
              <br />
              <a
                href="https://sites.google.com/view/doshisha-isdl"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-amber-100"
              >
                知的システムデザイン研究室（ISDL）
              </a>
              <br />
              Singer-Songwriter / BeatMaker
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
              <Link
                href="/music"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-stone-100 backdrop-blur-md transition hover:border-amber-200/30 hover:bg-white/10"
              >
                音楽活動を見る
              </Link>
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
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-6 text-base font-medium text-stone-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-amber-200/25 hover:bg-white/8 hover:text-stone-50"
                >
                  <span>{link.label}</span>
                  <link.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-20"
        id="activity"
      >
        <SectionHeading
          label="Recent Activity"
          title="最近の活動"
          description="活動を時系列で記録しています。"
        />

        <div className="relative mt-10 border-l border-white/10 pl-6 sm:pl-10">
          {recentActivities.map((activity, index) => (
            <article
              key={`${activity.date}-${activity.title}`}
              className={`relative grid gap-4 pb-10 sm:grid-cols-[220px_1fr] sm:gap-8 ${index === recentActivities.length - 1 ? "pb-0" : ""
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
                    className={`relative mx-auto mt-6 block overflow-hidden rounded-2xl border border-white/10 bg-black ${activity.imageOrientation === "portrait"
                      ? "aspect-[3/4] w-full max-w-lg"
                      : "aspect-[16/9] w-full max-w-3xl"
                      }`}
                  >
                    <Image
                      src={activity.image}
                      alt={activity.imageAlt}
                      fill
                      className={`transition duration-500 hover:scale-[1.02] ${activity.imageOrientation === "portrait"
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

      <section
        className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-20"
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
              className="border border-white/10 bg-white/5 shadow-[0_22px_70px_-44px_rgba(0,0,0,0.9)] backdrop-blur-lg"
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-amber-100 shadow-[0_0_24px_rgba(251,191,36,0.08)]">
                    <certification.icon className="size-7" />
                  </div>
                  <Badge className={badgeClassName("accent")}>
                    Certified
                  </Badge>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-stone-50">
                  {certification.title}
                </h3>
                <p className="mt-3 text-sm tracking-[0.2em] text-stone-400 uppercase">
                  {certification.note}
                </p>
                <p className="mt-4 text-sm font-medium tracking-[0.14em] text-amber-100">
                  {certification.earned}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section
        className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-20"
        id="projects"
      >
        <SectionHeading
          label="Projects"
          title="開発物"
          description=""
        />

        <div className="mt-10 grid gap-5">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="h-full border border-white/10 bg-white/5 shadow-[0_22px_70px_-44px_rgba(0,0,0,0.9)] backdrop-blur-lg"
            >
              <CardContent className="p-8">
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
                <p className="mt-5 whitespace-pre-line leading-8 text-stone-300">
                  {project.description}
                </p>

                <div className="mt-7 border-t border-white/10 pt-5">
                  <p className="text-xs tracking-[0.24em] text-stone-500 uppercase">
                    関連リンク
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-stone-200 transition hover:border-amber-200/25 hover:bg-white/10 hover:text-stone-50"
                    >
                      <GitHubLogo className="size-4" />
                      GitHubを見る
                    </a>
                    <a
                      href={project.slideUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-stone-200 transition hover:border-amber-200/25 hover:bg-white/10 hover:text-stone-50"
                    >
                      発表資料を見る
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

      <section
        className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-20"
        id="research"
      >
        <SectionHeading
          label="Research"
          title="研究"
          description=""
        />

        <div className="mt-10 grid gap-5">
          <Card className="border border-white/10 bg-white/5 text-stone-100 shadow-[0_22px_70px_-44px_rgba(0,0,0,0.9)] backdrop-blur-lg">
            <CardContent className="p-8">
              <p className="text-xs tracking-[0.24em] text-amber-200/70 uppercase">
                研究テーマ
              </p>
              <h3 className="mt-4 text-3xl font-semibold">
                EV充電ステーション配置最適化
              </h3>
              <p className="mt-6 leading-8 text-stone-300">
                京田辺市のゼロカーボンシティ実現に向け、電気自動車の導入拡大を見据えた充電ステーション配置最適化に取り組んでいます。
                交通流、充電需要、待ち時間、未充電量、設置コストを同時に評価し、利用者の負担と設置側のコストを抑える配置を検討しています。
                第29回進化計算学会研究会で発表し、実観測データ、OpenStreetMap道路網、ODデータを組み合わせ、目的関数に基づいて候補配置を評価しました。
              </p>
              <a
                href="https://sites.google.com/view/doshisha-isdl"
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-stone-200 transition hover:border-amber-200/25 hover:bg-white/10 hover:text-amber-100"
              >
                研究室サイトを見る
              </a>

            </CardContent>
          </Card>

          <Card className="overflow-hidden border border-white/10 bg-white/5 text-stone-100 shadow-[0_22px_70px_-44px_rgba(0,0,0,0.9)] backdrop-blur-lg">
            <CardContent className="p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs tracking-[0.24em] text-stone-400 uppercase">
                    学会発表
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-stone-50">
                    学会発表ポスター
                  </h3>
                  <p className="mt-3 leading-7 text-stone-400">
                    EV充電ステーション配置問題の定式化
                  </p>
                </div>
                <Badge className={badgeClassName("accent")}>
                  Poster
                </Badge>
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

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="relative overflow-hidden border-y border-white/10 py-12 sm:py-16">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_280px]">
            <div>

              <SectionHeading
                label="Music"
                title="音楽活動"
                description=""
              />
              <p className="mt-5 max-w-2xl leading-8 text-stone-300">
                Singer-Songwriter / BeatMakerとしての作品、配信先、映像を専用ページにまとめています。
              </p>
              <Link
                href="/music"
                className="mt-8 inline-flex rounded-2xl bg-stone-50 px-6 py-3 text-sm font-medium text-stone-950 transition hover:bg-amber-100"
              >
                音楽ページを見る
              </Link>
            </div>
            <Link
              href="/music"
              className="relative aspect-square overflow-hidden rounded-full border border-white/15 bg-black shadow-[0_30px_100px_-50px_rgba(251,191,36,0.6)] transition hover:rotate-2 hover:scale-[1.02]"
            >
              <Image
                src={jacketImageSrc}
                alt="だりぃ cover art"
                fill
                unoptimized
                className="object-cover"
                sizes="280px"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
