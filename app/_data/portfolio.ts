import { assetPath } from "@/lib/assets";

export const projects = [
  {
    title: "放置Me",
    category: "AI / 3D Experience",
    highlights: ["Winner", "3D", "AI Agent"],
    role: "Backend / LLM Integration",
    stack: ["Next.js", "Supabase", "Gemini API", "TypeScript"],
    outcome: "Engineer Guild Hackathon 2026 優勝・賞金100万円獲得",
    description:
      "ユーザーのAIクローンが本人に代わって未知の興味や可能性を探索し、まだ見ぬ自分との出会いを生み出すWebアプリケーションです。SupabaseとGemini APIを用いたバックエンド開発、LLM連携を主に担当しました。",
    url: "https://github.com/engineer-guild-hackathon-2026-05/team-05",
    slideUrl:
      "https://www.canva.com/design/DAHKsWlJrzM/346qIoZLeeaV8ABgQlzPHQ/view?embed",
  },
  {
    title: "匠 -takumi-",
    category: "Hackathon / Social Learning",
    highlights: ["Award", "Hackathon", "Team Development"],
    role: "Feature Design / Frontend",
    stack: ["React", "TypeScript", "Tree UI", "Team Development"],
    outcome: "Engineer Guild Hackathon 2025 by AtCoder エムスリー賞受賞",
    description:
      "学びの道のりを可視化し、仲間や「ちょっと先の先輩」との繋がりを通じて成長できる、ソーシャルラーニング・プラットフォームです。師弟関係をツリー構造で可視化する中核機能の設計・実装を担当しました。",
    url: "https://github.com/Engineer-Guild-Hackathon/team-4-app",
    slideUrl:
      "https://www.canva.com/design/DAGzTkaDnx4/-4KTiJNVV-PZ5cghKssGbw/view?embed",
  },
  {
    title: "Word Galaxy",
    category: "NLP / Visualization",
    highlights: ["Award", "BERT", "2D / 3D"],
    role: "NLP / Visualization",
    stack: ["BERT", "React", "2D / 3D", "Search"],
    outcome: "技育CAMP ハッカソン Vol.6 努力賞受賞",
    description:
      "単語間の関連性を星座のように可視化し、関係性をたどりながら理解を深められる学習Webアプリケーションです。BERTで意味的類似性を算出し、2D/3D表示、検索、単語帳、テストまでを含む学習導線を構築しました。",
    url: "https://github.com/Masa-eba/Word_Galaxy",
    slideUrl:
      "https://docs.google.com/presentation/d/16Fi5WfwiokDrPDSavv5lUgfpazfzo0fI/embed?start=false&loop=false&delayms=3000",
  },
  {
    title: "ISDLシミュレータ",
    category: "Novel Game / Lab Experience",
    highlights: ["Winner", "React", "FastAPI"],
    role: "Full-stack Development",
    stack: ["React", "Vite", "FastAPI", "SQLite"],
    outcome: "同志社大学 ISDLハッカソン優勝",
    description:
      "ISDLでの1年間をノベルゲーム形式で体験できるWebアプリケーションです。役割選択、研究活動、イベント、会話を通して、学生生活の成長と人間関係の変化を表現しました。React + Vite、FastAPI、SQLiteで構成しています。",
    url: "https://github.com/Masa-eba/isdl-hackathon-2025",
    slideUrl:
      "https://docs.google.com/presentation/d/e/2PACX-1vTAJ_aHn2aRKqLqqX2MyyoCRXrtjMAS-6MJJ1BovpeqSS5VQAo0WxAkSAQEU7GjBA/pubembed?start=false&loop=false&delayms=3000",
  },
];

export const profileImageSrc = assetPath("/images/profile/masatoshi-portrait-v2");
export const researchPosterSrc = assetPath("/images/research/poster.png");

export const links = [
  {
    label: "GitHub",
    href: "https://github.com/Masa-eba",
    icon: "github",
  },
  {
    label: "X",
    href: "https://x.com/_Masatoshi_eba_",
    icon: "x",
  },
] as const;

export const certifications = [
  {
    title: "応用情報技術者試験",
    note: "情報処理技術者試験",
    earned: "2025.10 合格",
    icon: "badge",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    note: "AWS CLF",
    earned: "2026.02 取得",
    icon: "shield",
  },
  {
    title: "AWS Certified Solutions Architect - Associate",
    note: "AWS SAA",
    earned: "2026.08 取得",
    icon: "shield",
  },
  {
    title: "AWS Certified AI Practitioner",
    note: "AWS AIF",
    earned: "2026.08 取得",
    icon: "shield",
  },
] as const;

export type RecentActivity = {
  date: string;
  category: string;
  title: string;
  description?: string;
  url?: string;
  image?: string;
  imageAlt?: string;
  imageOrientation?: "landscape" | "portrait";
};

export const recentActivities: RecentActivity[] = [
  {
    date: "2026.09.02 - 2026.09.18",
    category: "Internship",
    title: "LINEヤフー株式会社",
  },
  {
    date: "2026.08.31",
    category: "Certification",
    title: "AWS Certified AI Practitioner 取得",
    description: "AWS Certified AI Practitioner（AIF）を取得しました。",
  },
  {
    date: "2026.08.28",
    category: "Certification",
    title: "AWS Certified Solutions Architect - Associate 取得",
    description:
      "AWS Certified Solutions Architect - Associate（SAA）を取得しました。",
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
