# Nourishedとは、食品廃棄物をゼロにすることを目標に掲げるウェブマガジンである。

他の言語で読む：[:us:English](README.en.md)

## 備考

ソースコードは``master``もしくは``master-lfs``ブランチにコミットされる。後者はバイナリファイルを[Git LFS](https://git-lfs.github.com/)でトラックしている。GitHub PagesはLFSをサポートしていないので、``master``ブランチではバイナリファイルを生で置かねばならない。追い追い画像・動画など、サイズの大きいファイルがかさばった時は、``master-lfs``で開発すると良いだろう。**_生のバイナリファイルは``master-lfs``にプッシュしないように！_**

GitHubはJekyllをネイティブサポートしている（自動でビルドされる）ので、特に手動でビルドファイルを別ブランチにコミットする必要はない。

## 記事を書く

1. 記事に使う画像は``/assets/img``ディレクトリにコミットする。
2. 本文は``/_posts``ディレクトリにコミットする。[ファイル名](https://jekyllrb.com/docs/posts/#creating-post-files)や[前付けYAML](https://jekyllrb.com/docs/frontmatter/)に関するルール、[Markdown文法](https://github.com/higuma/markdown_cheat_sheet)などは他の記事を参考にしよう。

## セットアップ

1. [Git](https://git-scm.com/)、[Git LFS](https://git-lfs.github.com/)、[RubyGems](https://rubygems.org/)、[Jekyll](https://jekyllrb.com/)、[Bundler](http://bundler.io/)をインストールする
2. ターミナルで以下のコマンドを入力:
```
git clone https://github.com/nourished-jp/nourished-jp.github.io nourished
cd nourished
bundle install
bundle exec jekyll serve
```
3. ブラウザで``http://127.0.0.1:4000``を開く
4. ソースの開発を行う。Jekyllの使い方に関しては[Jekyllドキュメンテーション](https://jekyllrb.com/docs/home/)を参照

### ライセンス

GNU General Public License v3.0
