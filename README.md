# Masatoshi Portfolio

阿部勝寿の個人ポートフォリオサイトです。プロダクト開発、研究、最近の活動を掲載しています。

## URL

https://www.abemasatoshi.com/

## サイト構成

- Next.js App Routerで構築
- AWS Amplifyでサイト本体をビルド・デプロイ
- 画像・PDFなどの静的アセットはAmazon S3に保管
- S3の静的アセットはAmazon CloudFront経由で配信
- 独自ドメイン `abemasatoshi.com` はAmazon Route 53で管理

## 使用技術

- Next.js
- React
- TypeScript
- Tailwind CSS
- AWS Amplify
- Amazon S3
- Amazon CloudFront
- Amazon Route 53

## AWS構成

このサイトで現在使っているAWS構成です。

```text
ブラウザ
  ├─ Route 53 → AWS Amplify → Next.jsアプリケーション
  └─ CloudFront → Origin Access Control → 非公開S3バケット
```

詳細は [docs/aws.md](docs/aws.md) にまとめています。

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
