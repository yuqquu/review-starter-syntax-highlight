# Re:VIEW Starter Syntax Highlight
[Re:VIEW Starter](https://kauplan.org/reviewstarter/) 用のシンタックスハイライト・コード補完の VSCode 拡張機能です。

![VSCODEのスクリーンショット](images/preview_top.png)


## 特徴
### シンタックスハイライト
命令語に色が付きます。


### コード補完
![コード補完をしている様子](images/preview_code_completion.gif)

Re:VIEW Starter の命令語を補完します。


### 入れ子が可能
![インライン命令の入れ子が動作している様子](images/preview_inline_inline.png)

Re:VIEW Starter の拡張であるインライン命令とブロック命令の入れ子に対応しています。
また、エスケープも有効です。


## 注意点
その他の Re:VIEW プロジェクトとは違い、プレビューウィンドウはありません。


## 既知の不具合
- ブロック命令の内側でリストが有効になっている
- プログラムコードやターミナルの中の `#@` から始まる行(コメントアウト)の色分けができていない

## バージョン履歴
### 1.0.8
- 20210715版に対応。
  - ins を追加。

### 1.0.7
- 20210630、20210709版に対応。
  - term, termnoidx を追加。

### 1.0.6
- 20210308版に対応。
  - chapterauthor, output を追加。
- 追加を忘れていた20210223版の構文を追加。
  - par を追加。

### 1.0.5
- 20210223版に対応。
  - talklist, talk, needvspace, vspace, desclist, desc, vspace, imgtable を追加。

### 1.0.3
- 対応バージョンの広範囲化 (1.25.1～)

### 1.0.2
- Marketplace の背景色を変更

### 1.0.0
- 最初のリリース


## その他のプロジェクト
- [Yet Another VSCode language Re:VIEW](https://github.com/erukiti/ya-language-review)
- [vscode-language-review](https://github.com/atsushieno/vscode-language-review)

