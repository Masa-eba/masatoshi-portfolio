# Masatoshi Portfolio

阿部勝寿の個人ポートフォリオサイトです。プロダクト開発、研究、最近の活動を掲載しています。

## URL

https://www.abemasatoshi.com/

## 使用技術

- Next.js
- React
- TypeScript
- Tailwind CSS

## AWS構成

| サービス | 用途 |
| --- | --- |
| AWS Amplify | Next.jsアプリケーションのビルド・デプロイ |
| Amazon S3 | 画像・PDFなどの静的アセットを非公開バケットで保管 |
| Amazon CloudFront | S3上の静的アセットをHTTPSで配信 |
| CloudFront Origin Access Control | CloudFrontからS3へのアクセスだけを許可 |
| Amazon Route 53 | `abemasatoshi.com` の独自ドメイン管理 |

```text
ブラウザ
  ├─ Route 53 → AWS Amplify → Next.jsアプリケーション
  └─ CloudFront → Origin Access Control → 非公開S3バケット
```

## ローカル開発

```bash
npm install
cp .env.example .env.local
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。

## 環境変数

```bash
NEXT_PUBLIC_ASSET_BASE_URL=
```

`NEXT_PUBLIC_ASSET_BASE_URL` には、CloudFrontドメインまたはアセット配信用独自ドメインを設定します。
画像は `<NEXT_PUBLIC_ASSET_BASE_URL>/images/**` に配置します。

GitHub Actionsでは、Repository Variableの `NEXT_PUBLIC_ASSET_BASE_URL` を参照します。

## 検証

```bash
npm run typecheck
npm run lint
npm run build
```
