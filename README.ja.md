# Nourishedとは、食品廃棄物をゼロにすることを目標に掲げるウェブマガジンである。

他の言語で読む：[English](README.md)

## セットアップ

1. [Git](https://git-scm.com/)、[Git LFS](https://git-lfs.github.com/)、[Jekyll](https://jekyllrb.com/)をインストールする
1. ターミナルで以下のコマンドを入力:
```
git clone https://github.com/nourished-jp/nourished-jp.github.io nourished
cd nourished
jekyll serve
```
1. ブラウザで``http://127.0.0.1:4000``を開く
1. ソースの開発を行う。Jekyllの使い方に関しては[Jekyllドキュメンテーション](https://jekyllrb.com/docs/home/)を参照

## 注意事項

ソースコードは``master``、ビルドファイルは``gh-pages``ブランチにコミットされる。つまり``gh-pages``内のファイルを改変しても、ビルド時に削除されるので、基本触らないように。

### ライセンス

GNU General Public License v3.0
