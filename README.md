# 西園寺聖樹 オフィシャルサイト

東京大学理学部化学科卒の化学・生物講師、西園寺聖樹のオフィシャルホームページです。

## 概要

このホームページは、以下の内容で構成されています：

- **トップページ（index.html）** - プロフィール、指導実績、推薦の声、Note記事
- **授業ページ（class.html）** - 集団授業、個別授業、オンライン授業の説明
- **お問い合わせページ（contact.html）** - お問い合わせフォーム
- **教材ページ（resources.html）** - 各種教材・リソース置き場
- **リンク集ページ（links.html）** - 各プラットフォームへのリンク

## ファイル構成

```
.
├── index.html           # トップページ
├── class.html          # 授業ページ
├── contact.html        # お問い合わせページ
├── resources.html      # 教材ページ
├── links.html          # リンク集ページ
├── style.css           # スタイルシート
├── script.js           # JavaScriptファイル
├── assets/             # ビルド済みアセット
│   ├── index-BMsOGRN_.css  # Tailwind CSS（参考）
│   └── index-dGsla3qN.js   # React JS（参考）
└── images/             # 画像ファイル
```

## 特徴

- **静的HTML/CSS/JavaScript** - サーバーサイド処理不要で、どのホスティングでも動作
- **レスポンシブデザイン** - モバイル、タブレット、デスクトップに対応
- **軽量** - 総ファイルサイズ約50KB（アセット除外）
- **モダンデザイン** - ミニマリスト系で洗練された見た目
- **アクセシビリティ** - セマンティックHTMLで検索エンジン最適化

## 使用方法

### ローカルで確認

```bash
# ブラウザでindex.htmlを開く
open index.html
```

または、ローカルサーバーで実行：

```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server
```

### GitHubへのアップロード

1. このディレクトリ全体をGitHubリポジトリにアップロード
2. GitHub Pagesを有効化（Settings > Pages）
3. 自動的にホスト可能

### カスタムドメイン設定

GitHub Pagesでカスタムドメインを使用する場合：

1. `CNAME`ファイルを作成し、ドメイン名を記入
2. DNSレコードを設定
3. GitHub Pagesの設定でカスタムドメインを指定

## カスタマイズ

### スタイルの変更

`style.css`を編集して、色やフォント、レイアウトをカスタマイズできます。

主な色変数：
- `--primary`: #1E40AF（深い青）
- `--foreground`: #1F2937（濃いグレー）
- `--background`: #FFFFFF（白）

### コンテンツの更新

各HTMLファイルを直接編集して、コンテンツを更新できます。

### フォーム機能

お問い合わせフォーム（contact.html）は、以下の方法で機能させることができます：

1. **Google Formに連携** - フォーム送信をGoogle Formに送信
2. **メールサービス連携** - Formspree、Netlify Formsなどを使用
3. **バックエンド構築** - Node.js、Python等でバックエンド実装

## ブラウザ対応

- Chrome（最新版）
- Firefox（最新版）
- Safari（最新版）
- Edge（最新版）

## ライセンス

このホームページは西園寺聖樹のオフィシャルサイトです。

## 連絡先

- **Note**: https://note.com/saionji_chem
- **X（旧Twitter）**: @saionji_chem
- **ミセルリカ**: https://miserurika.com

---

© 2026 西園寺聖樹. All rights reserved.
