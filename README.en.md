# Nourished is a web magazine advocating zero food waste

Read me in other languages: [:jp:日本語](README.md)

## Note

The ``master`` and ``master-lfs`` branches contain the source code. The latter tracks binary files with [Git LFS](https://git-lfs.github.com/). GitHub Pages does not support LFS, so binary files in the ``master`` branch must be kept vanilla. **_Do NOT push raw binary files to ``master-lfs`` branch!_**

GitHub natively supports Jekyll, so there is no need to manually build the source code. Files in ``master`` will be automatically rebuilt upon push.

## Writing Posts

1. Commit images used for posts to ``/assets/img`` directory
2. Commit post files to ``/_posts`` directory. The fastest way to grasp [post file name format](https://jekyllrb.com/docs/posts/#creating-post-files), [front matter YAML](https://jekyllrb.com/docs/frontmatter/), and [Markdown syntax](https://help.github.com/articles/basic-writing-and-formatting-syntax/#styling-text) is referring to other posts

## Setup

1. Install [Git](https://git-scm.com/), [Git LFS](https://git-lfs.github.com/), [RubyGems](https://rubygems.org/), [Jekyll](https://jekyllrb.com/), and [Bundler](http://bundler.io/)
2. On terminal, run:
```
git clone https://github.com/nourished-jp/nourished-jp.github.io nourished
cd nourished
bundle install
bundle exec jekyll serve
```
3. Open browser and type in: ``http://127.0.0.1:4000``
4. Start editing source. Check out [Jekyll docs](https://jekyllrb.com/docs/home/) for more info

### License

GNU General Public License v3.0
