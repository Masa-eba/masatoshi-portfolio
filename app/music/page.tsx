import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/assets";

type LogoProps = {
  className?: string;
};

function SpotifyLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 1.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21Zm4.82 15.12a.9.9 0 0 1-1.24.3 9.96 9.96 0 0 0-8.36-.92.9.9 0 1 1-.57-1.7 11.75 11.75 0 0 1 9.88 1.08.9.9 0 0 1 .29 1.24Zm1.78-3.09a1.12 1.12 0 0 1-1.53.37 12.13 12.13 0 0 0-10.17-1.1 1.12 1.12 0 0 1-.69-2.13 14.38 14.38 0 0 1 12.07 1.31 1.12 1.12 0 0 1 .32 1.55Zm.15-3.2a1.35 1.35 0 0 1-1.84.44 14.93 14.93 0 0 0-12.47-1.36A1.35 1.35 0 0 1 3.65 6.8a17.62 17.62 0 0 1 14.72 1.6 1.35 1.35 0 0 1 .38 1.87Z" />
    </svg>
  );
}

function AppleMusicLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M17.5 3.2v11.1a3.3 3.3 0 1 1-1.5-2.77V7.03l-6 1.2v8.07a3.3 3.3 0 1 1-1.5-2.77V5.7l9-1.8Z" />
    </svg>
  );
}

function YouTubeLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M23 12s0-3.02-.39-4.48a2.8 2.8 0 0 0-1.97-1.97C19.18 5.16 12 5.16 12 5.16s-7.18 0-8.64.39A2.8 2.8 0 0 0 1.39 7.52C1 8.98 1 12 1 12s0 3.02.39 4.48a2.8 2.8 0 0 0 1.97 1.97c1.46.39 8.64.39 8.64.39s7.18 0 8.64-.39a2.8 2.8 0 0 0 1.97-1.97C23 15.02 23 12 23 12ZM9.7 15.75v-7.5L16 12l-6.3 3.75Z" />
    </svg>
  );
}

function InstagramLogo({ className }: LogoProps) {
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

export const metadata: Metadata = {
  title: "音楽活動",
  description: "Singer-Songwriter & BeatMakerとしての阿部勝寿の音楽活動。",
  openGraph: {
    title: "音楽活動 | 阿部勝寿",
    description: "Singer-Songwriter & BeatMakerとしての作品、配信先、映像。",
    url: "/music",
  },
};

const jacketImageSrc = assetPath("/images/music/darii-cover.png");
const youtubeEmbedUrl =
  "https://www.youtube.com/embed/T2-BBHQJNTs?list=RDT2-BBHQJNTs&start_radio=1";

const musicLinks = [
  {
    title: "Spotify",
    note: "アーティストページ",
    url: "https://open.spotify.com/artist/4ZIHxbWmvE32SNAF6XMjOc",
    icon: SpotifyLogo,
    color: "hover:border-[#1ed760]/50 hover:text-[#1ed760]",
  },
  {
    title: "Apple Music",
    note: "「だりぃ」を聴く",
    url: "https://music.apple.com/jp/album/%E3%81%A0%E3%82%8A%E3%81%83/1890611237?i=1890611241",
    icon: AppleMusicLogo,
    color: "hover:border-[#fa586a]/50 hover:text-[#fa586a]",
  },
  {
    title: "YouTube",
    note: "映像で再生",
    url: "https://www.youtube.com/watch?v=T2-BBHQJNTs&list=OLAK5uy_l0bqCM8wOGUQNP81KtM8n8QrPvDhN4Roo",
    icon: YouTubeLogo,
    color: "hover:border-red-500/50 hover:text-red-400",
  },
  {
    title: "Instagram",
    note: "活動をフォロー",
    url: "https://www.instagram.com/_masatoshi_for_eba_/",
    icon: InstagramLogo,
    color: "hover:border-amber-300/50 hover:text-amber-200",
  },
];

export default function MusicPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-stone-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(239,68,68,0.18),transparent_25%),radial-gradient(circle_at_82%_12%,rgba(34,197,94,0.14),transparent_24%),linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:auto,auto,64px_64px,64px_64px]" />

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
        <Link href="/" className="text-sm tracking-[0.24em] text-stone-400 uppercase transition hover:text-stone-50">
          Masatoshi Abe
        </Link>
        <Link href="/" className="rounded-full border border-white/10 bg-black/30 px-5 py-2 text-sm text-stone-300 backdrop-blur-xl transition hover:border-white/25 hover:text-white">
          ポートフォリオへ戻る
        </Link>
      </header>

      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-104px)] w-full max-w-6xl items-center gap-12 px-6 pb-20 lg:grid-cols-[minmax(0,1fr)_minmax(360px,500px)]">
        <div>
          <p className="text-xs tracking-[0.38em] text-stone-500 uppercase">
            Singer-Songwriter / BeatMaker
          </p>
          <h1 className="mt-6 text-6xl leading-none font-semibold text-stone-50 sm:text-8xl">
            音
            <br />
            言葉
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-9 text-stone-300">
            作詞・作曲・Beat Makingを横断して制作
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {musicLinks.map((link) => (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className={`group flex items-center gap-4 border-b border-white/10 px-1 py-5 text-stone-300 transition ${link.color}`}
              >
                <link.icon className="size-7 shrink-0" />
                <span>
                  <span className="block text-base font-medium">{link.title}</span>
                  <span className="mt-1 block text-xs text-stone-600 group-hover:text-current">
                    {link.note}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-red-500/20 via-transparent to-green-500/20 blur-3xl" />
          <div className="relative aspect-square overflow-hidden rounded-full border border-white/15 bg-black shadow-[0_40px_140px_-60px_rgba(255,255,255,0.45)]">
            <Image
              src={jacketImageSrc}
              alt="だりぃ cover art"
              fill
              unoptimized
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 31rem, 90vw"
            />
          </div>
          <div className="relative -mt-12 ml-auto w-[88%] border border-white/10 bg-black/75 p-6 backdrop-blur-xl">
            <p className="text-xs tracking-[0.28em] text-stone-500 uppercase">Latest Release</p>
            <div className="mt-3 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-4xl font-semibold text-stone-50">だりぃ</h2>
                <p className="mt-2 text-stone-400">O-7z & 勝寿</p>
              </div>
              <p className="text-right text-sm leading-6 text-stone-500">
                O-7z : lyric
                <br />
                勝寿 : beat
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="border-t border-white/10 pt-10">
          <p className="text-xs tracking-[0.3em] text-stone-500 uppercase">Music Video</p>
          <div className="mt-6 overflow-hidden border border-white/10 bg-black shadow-[0_30px_100px_-50px_rgba(0,0,0,1)]">
            <iframe
              className="aspect-video w-full"
              src={youtubeEmbedUrl}
              title="だりぃ - YouTube"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </main>
  );
}
