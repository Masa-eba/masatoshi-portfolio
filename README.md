# Masatoshi Portfolio

阿部勝寿の個人ポートフォリオサイトです。プロダクト開発、研究、音楽活動、最近の活動を掲載しています。

## URL

https://www.abemasatoshi.com/

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

- Route 53で独自ドメインを管理
- AWS AmplifyでNext.jsアプリケーションをビルド・デプロイ
- 非公開S3バケットに画像・PDFなどの静的アセットを保存
- CloudFrontとOrigin Access Controlを利用してS3アセットを配信

```text
ブラウザ
  ├─ Route 53 → AWS Amplify → Next.js
  └─ CloudFront → 非公開S3バケット
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

GitHub Actionsでは、Repository Variableの `NEXT_PUBLIC_ASSET_BASE_URL` を参照します。

## 検証

```bash
npm run typecheck
npm run lint
npm run build
```
