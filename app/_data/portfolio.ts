import { assetPath } from "@/lib/assets";

export const projects = [
  {
    title: "放置Me",
    category: "生成AI・3Dアプリケーション",
    outcome: "Engineer Guild Hackathon 2026 最優秀賞（賞金100万円）",
    description:
      "AIクローンがユーザーに代わって未知の興味を探索するWebアプリ。バックエンド開発とLLM連携を担当。",
    url: "https://github.com/engineer-guild-hackathon-2026-05/team-05",
    slideUrl:
      "https://www.canva.com/design/DAHKsWlJrzM/346qIoZLeeaV8ABgQlzPHQ/view?embed",
  },
  {
    title: "匠 -takumi-",
    category: "ソーシャルラーニング",
    outcome: "Engineer Guild Hackathon 2025 by AtCoder エムスリー賞",
    description:
      "学習の進捗や仲間とのつながりを可視化する学習プラットフォーム。師弟関係を表すツリー機能の設計・実装を担当。",
    url: "https://github.com/Engineer-Guild-Hackathon/team-4-app",
    slideUrl:
      "https://www.canva.com/design/DAGzTkaDnx4/-4KTiJNVV-PZ5cghKssGbw/view?embed",
  },
  {
    title: "Word Galaxy",
    category: "自然言語処理・可視化",
    outcome: "技育CAMP ハッカソン Vol.6 努力賞",
    description:
      "単語間の意味的な関連を星座のように表示する学習アプリ。単語検索から単語帳・テストまでの学習機能を実装。",
    url: "https://github.com/Masa-eba/Word_Galaxy",
    slideUrl:
      "https://docs.google.com/presentation/d/16Fi5WfwiokDrPDSavv5lUgfpazfzo0fI/embed?start=false&loop=false&delayms=3000",
  },
  {
    title: "ISDLシミュレータ",
    category: "研究室紹介アプリ",
    outcome: "同志社大学 ISDLハッカソン 最優秀賞",
    description:
      "研究室での1年間をノベルゲーム形式で体験できるアプリ。選択や会話を通して、学生生活と人間関係の変化を表現。",
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
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/masatoshi-abe-0ab5912b5/",
    icon: "linkedin",
  },
] as const;

export const certifications = [
  {
    title: "応用情報技術者試験",
    note: "情報処理技術者試験",
    earned: "2025.12 合格",
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
    date: "2026.09.02〜2026.09.18",
    category: "インターン",
    title: "LINEヤフー株式会社",
    description:
      "大規模サービスの開発に参加。設計・実装・レビューを通じ、チーム開発の進め方を経験。",
  },
  {
    date: "2026.08.31",
    category: "資格",
    title: "AWS Certified AI Practitioner 取得",
  },
  {
    date: "2026.08.28",
    category: "資格",
    title: "AWS Certified Solutions Architect - Associate 取得",
  },
  {
    date: "2026.08.22",
    category: "インターン",
    title: "朝日新聞社",
    description:
      "報道サービスを支える開発やデータ活用、プロダクト改善について学習。",
  },
  {
    date: "2026.08.10〜2026.08.14",
    category: "インターン",
    title: "日本経済新聞社",
    description:
      "ニュースサービスの開発現場で、システム設計やチームでの課題解決を経験。",
  },
  {
    date: "2026.05.24〜2026.05.26",
    category: "受賞",
    title: "Engineer Guild Hackathon 2026 優勝・賞金100万円",
    description: "AIアプリ「放置Me」を開発。",
    url: "https://careers.mercari.com/mercan/articles/62377/",
    image: assetPath("/images/activities/Hackathon_2026.jpeg"),
    imageAlt: "Engineer Guild Hackathon 2026 記念写真",
  },
  {
    date: "2025.11〜2026.05",
    category: "インターン",
    title: "SaaSフルスタック開発",
  },
  {
    date: "2026.04.01",
    category: "学歴",
    title: "同志社大学大学院 入学",
    url: "https://www.doshisha.ac.jp/",
  },
  {
    date: "2026.03.22",
    category: "学歴",
    title: "同志社大学 卒業",
    url: "https://www.doshisha.ac.jp/",
  },
  {
    date: "2026.03.16〜2026.03.17",
    category: "研究",
    title: "第29回進化計算学会研究会で研究発表",
    description:
      "「UXsimを用いたEV充電ステーション配置問題の定式化」を発表。",
    url: "https://www.jpnsec.org/symposium202601.html",
    image: assetPath("/images/activities/Gakkai_2026.jpg"),
    imageAlt: "第29回進化計算学会研究会でのポスターとの記念写真",
    imageOrientation: "portrait",
  },
  {
    date: "2026.02",
    category: "資格",
    title: "AWS Certified Cloud Practitioner 取得",
  },
  {
    date: "2026.02.18",
    category: "研究",
    title: "卒業論文発表",
    url: "https://sites.google.com/view/doshisha-isdl",
    image: assetPath("/images/activities/graduate.JPG"),
    imageAlt: "卒業論文発表の写真",
  },
  {
    date: "2025.12",
    category: "資格",
    title: "応用情報技術者試験 合格",
  },
  {
    date: "2025.09.03〜2025.09.20",
    category: "受賞",
    title: "Engineer Guild Hackathon 2025 by AtCoder エムスリー賞",
    description: "4人チームで学習プラットフォーム「匠 -takumi-」を開発。",
    url: "https://github.com/Engineer-Guild-Hackathon/team-4-app",
    image: assetPath("/images/activities/Hackathon_2025.jpg"),
    imageAlt: "Engineer Guild Hackathon 2025 受賞写真",
  },
  {
    date: "2025.08.30〜2025.09.12",
    category: "受賞",
    title: "ISDLハッカソン 最優秀賞",
    description: "研究室の1年間を体験できる「ISDLシミュレータ」を開発。",
    url: "https://github.com/Masa-eba/isdl-hackathon-2025",
    image: assetPath("/images/activities/Hackathon_isdl.jpg"),
    imageAlt: "ISDLハッカソンの発表写真",
  },
  {
    date: "2025.07.03〜2025.07.13",
    category: "受賞",
    title: "技育CAMP ハッカソン Vol.6 努力賞",
    description: "4人チームで学習アプリ「ことばのほしぞら / Word Galaxy」を開発。",
    url: "https://x.com/geek_pjt/status/1944327502555725871",
    image: assetPath("/images/activities/Word_Galaxy.png"),
    imageAlt: "技育CAMP ハッカソン Vol.6 努力賞の賞状",
    imageOrientation: "portrait",
  },
  {
    date: "2025.05.18〜2025.06.22",
    category: "受賞",
    title: "プログラミング初学者の会主催 WEBアプリハッカソン\n最優秀賞",
    description:
      "利用者に合わせてトレーニングを提案する筋トレアプリを開発。",
    url: "https://pg-beginner-mtg.connpass.com/event/352268/",
  },
  {
    date: "2025.04〜現在",
    category: "研究",
    title: "知的システムデザイン研究室（ISDL）に所属",
    description:
      "研究活動とチーフとしての研究室運営に従事。",
    url: "https://sites.google.com/view/doshisha-isdl",
  },
];
