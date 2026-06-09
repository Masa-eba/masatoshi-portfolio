# masatoshi-portfolio

阿部勝寿のポートフォリオサイトです。Next.jsで実装し、AWS Amplifyでデプロイします。

## 開発

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。

## 環境変数

画像・PDFなどの静的アセットはS3/CloudFrontから配信します。ローカル画像へのフォールバックはありません。

```bash
NEXT_PUBLIC_ASSET_BASE_URL=https://d28dol01g1sjdx.cloudfront.net
```

ローカルで確認する場合も、この環境変数を設定してください。

```bash
NEXT_PUBLIC_ASSET_BASE_URL=https://d28dol01g1sjdx.cloudfront.net npm run dev
```

## AWS構成

このサイトは以下の構成で運用します。

- **Route 53**: 独自ドメインを管理します。
- **AWS Amplify**: GitHubと連携し、Next.jsアプリケーションをビルド・デプロイします。
- **Amazon S3**: 本人写真、ジャケ写、研究ポスターなどの静的アセットを保存します。
- **Amazon CloudFront**: S3上のアセットをHTTPSとキャッシュで高速に配信します。

リクエストの流れは以下です。

```text
ユーザー
  -> Route 53
  -> AWS Amplify
  -> Next.jsポートフォリオ
  -> CloudFront
  -> S3アセット
```

## アセット配置

S3には、アプリが参照するパスに合わせて次のように配置します。

```text
s3://abemasatoshi-portfolio-assets/images/profile/masatoshi-portrait-v2
s3://abemasatoshi-portfolio-assets/images/music/darii-cover.png
s3://abemasatoshi-portfolio-assets/images/research/poster.png
```

`poster.png` は現在PDFとして配信されているため、サイト内ではPDFビューアーとして埋め込みます。

Amplifyには、CloudFrontのドメインまたはアセット配信用独自ドメインを設定します。

```bash
NEXT_PUBLIC_ASSET_BASE_URL=https://d28dol01g1sjdx.cloudfront.net
```

将来CloudFrontへ `assets.abemasatoshi.com` を設定した場合は、環境変数だけを変更します。コード内にCloudFrontドメインは直接記述していません。

## 検証

```bash
NEXT_PUBLIC_ASSET_BASE_URL=https://d28dol01g1sjdx.cloudfront.net npm run typecheck
NEXT_PUBLIC_ASSET_BASE_URL=https://d28dol01g1sjdx.cloudfront.net npm run lint
NEXT_PUBLIC_ASSET_BASE_URL=https://d28dol01g1sjdx.cloudfront.net npm run build
```
