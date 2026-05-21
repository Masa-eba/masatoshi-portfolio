import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "匠 -takumi-",
    description:
      "Engineer Guild Hackathonで開発した、師弟関係を通じて学びを支援するソーシャルラーニングアプリ。",
    url: "https://github.com/Engineer-Guild-Hackathon/team-4-app",
  },
  {
    title: "Word Galaxy",
    description:
      "単語間の関連性を可視化する学習支援Webアプリ。BERT、Flask、Three.js、Vis.jsを活用。",
    url: "https://github.com/Masa-eba/Word_Galaxy",
  },
];

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Ruby on Rails",
  "Python",
  "Django",
  "FastAPI",
  "PostgreSQL",
  "AWS",
  "Docker",
];

const youtubeEmbedUrl =
  "https://www.youtube.com/embed/T2-BBHQJNTs?list=OLAK5uy_l0bqCM8wOGUQNP81KtM8n8QrPvDhN4Roo";

const musicLinks = [
  {
    title: "Apple Music",
    url: "https://music.apple.com/jp/album/%E3%81%A0%E3%82%8A%E3%81%83/1890611237?i=1890611241",
  },
  {
    title: "Spotify",
    url: "https://open.spotify.com/artist/4ZIHxbWmvE32SNAF6XMjOc",
  },
  {
    title: "YouTube",
    url: "https://www.youtube.com/watch?v=T2-BBHQJNTs&list=OLAK5uy_l0bqCM8wOGUQNP81KtM8n8QrPvDhN4Roo",
  },
  {
    title: "TuneCore",
    url: "https://www.tunecore.co.jp/artists?id=1107044",
  },
  {
    title: "X",
    url: "https://x.com/_Masatoshi_eba_",
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/_masatoshi_for_eba_/",
  },
  {
    title: "SoundCloud",
    url: "https://soundcloud.com/cow85nbld6bp",
  },
  {
    title: "TikTok",
    url: "https://www.tiktok.com/@_masatoshi_for_eba_",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-20">
        <div className="mb-10 flex flex-wrap gap-2">
          <Badge variant="secondary">Software Engineer</Badge>
          <Badge variant="secondary">Research</Badge>
          <Badge variant="secondary">Beatmaker</Badge>
        </div>

        <div className="max-w-3xl">
          <p className="mb-4 text-sm tracking-[0.3em] text-zinc-400 uppercase">
            Masatoshi Abe
          </p>
          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            阿部 勝寿
          </h1>
          <p className="mt-6 text-xl leading-9 text-zinc-300">
            同志社大学大学院 情報工学専攻。交通流シミュレータUXsimを用いた
            EV充電ステーション配置最適化を研究しながら、Webアプリケーション開発とクラウド技術に取り組んでいます。
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href="https://github.com/Masa-eba"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
          >
            GitHub
          </a>
          <a
            href="#projects"
            className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-100 transition hover:bg-zinc-900"
          >
            Projects
          </a>
          <a
            href="#music"
            className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-100 transition hover:bg-zinc-900"
          >
            Music
          </a>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20" id="projects">
        <h2 className="text-3xl font-semibold">Projects</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="block h-full"
            >
              <Card className="h-full cursor-pointer border-zinc-800 bg-zinc-900 transition hover:-translate-y-1 hover:border-zinc-600 hover:bg-zinc-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-zinc-50">
                    {project.title}
                  </h3>
                  <p className="mt-4 leading-7 text-zinc-400">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold">Skills</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="border-zinc-700 px-4 py-2 text-zinc-200"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20" id="music">
        <h2 className="text-3xl font-semibold">Music</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <Card className="border-zinc-800 bg-zinc-900">
            <CardContent className="p-6">
              <p className="text-sm tracking-[0.25em] text-zinc-500 uppercase">
                Artist / Beatmaker
              </p>
              <h3 className="mt-4 text-3xl font-semibold text-zinc-50">
                MASATOSHI / 勝寿
              </h3>
              <p className="mt-5 leading-8 text-zinc-400">
                ピアノ、ギター、作曲、声楽を経て、ヒップホップを軸にしたビートメイクと楽曲制作に取り組んでいます。
                音を過剰に重ねるのではなく、言葉が強く響くための余白とグルーヴを設計することを重視しています。
              </p>
            </CardContent>
          </Card>

          <Card className="border-zinc-800 bg-zinc-900">
            <CardContent className="p-6">
              <p className="text-sm tracking-[0.25em] text-zinc-500 uppercase">
                Latest Release
              </p>
              <h3 className="mt-4 text-3xl font-semibold text-zinc-50">
                だりぃ
              </h3>
              <p className="mt-2 text-zinc-400">O-7z & 勝寿</p>
              <p className="mt-5 leading-8 text-zinc-400">
                O-7zがリリック、勝寿がビートを担当した初の共作。
                鋭く突き刺さるビートと挑発的な言葉が交差する、両者の原点となる一曲です。
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-800">
                <iframe
                  className="aspect-video w-full"
                  src={youtubeEmbedUrl}
                  title="だりぃ - YouTube"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {musicLinks.map((link) => (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-zinc-800 bg-zinc-900 px-5 py-4 text-sm font-medium text-zinc-100 transition hover:-translate-y-1 hover:border-zinc-600 hover:bg-zinc-800"
            >
              {link.title}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}