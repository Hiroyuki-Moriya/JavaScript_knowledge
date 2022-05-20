### [JavaScript - MDN Web Docs](https://developer.mozilla.org/ja/docs/Web/JavaScript)
* チュートリアル:
** 初級編
** JavaScript ガイド
** 中級編
** 上級編
* リファレンス
** 組み込みオブジェクト
** 式と演算子
** 文と宣言
** 関数
** クラス
** Errors

---
### [今すぐ使えるJavaScriptを実行する環境まとめ](https://qiita.com/ukiuni@github/items/d077e2d450c79829a67f)
Windowsも標準でJavaScriptを動かすことができます。
```
wscript sample.js
```
もしくは
```
cscript sample.js
```
で実行できます。cscriptの方がコマンドライン用です。


最も簡単で誰もが持っているJavaScript実行環境は、ブラウザかも知れません。
上部のURLエリアに
```
javascript:alert("Hello");
```
のようにJavaScriptを入力すると、実行されます。

ブックマークにスクリプトを保存することで、ブックマークレットを作ることもあります。
PCのブラウザだけではなく、大抵のスマフォ用ブラウザでも実行することができます。

また、大抵のブラウザは開発者モードを持っていて、開発者モードで表示されるコンソールにJavaScriptを入力すると実行することができます。
Chromeですと、「表示」→「開発/管理」→「JavaScriptコンソール」でコンソールを表示することができます。

---
### [おすすめの”プレイグラウンド”ベスト3！](https://nuconeco.net/code-playgrounds-best3/)

* [CodePen](https://codepen.io)
** [CodePenの使い方(知らない人向け)](https://qiita.com/fumu238/items/f73274aa1a188eb15794)

* [JSFiddle](https://jsfiddle.net)

* [JS Bin](https://jsbin.com)

* [Javascript Playground -PLAYCODE- ](https://playcode.io/)


---
### [VS-CodeであっさりJavaScript](https://zenn.dev/sdkfz181tiger/articles/e95252e9e98615)
1. 動作確認するための拡張機能(Live Server)のインストール
  検索窓に"Live Server"と入力します。
  すると、画像の様に"Live Server"が表示されます。
  この拡張機能は、作ったコードをブラウザで実行させるための機能です。

1. プロジェクトを作ろう
  さっそく、"プロジェクト"を作ってみましょう。
  "プロジェクト"と言いますが、その実体は空っぽの"フォルダ"です。
  次の手順に従って、プロジェクトを作ります。
  VS-Codeの左側にあるメニューにある、1番上のボタンを押し、"Open Folder"ボタンをクリックします。
  ダイアログで"New Folder"(新しいフォルダ)を選択します。
  ここでは、フォルダ名を"MyProject01"としました。
  新しいフォルダ"MyProject01"を"Open"します。
  これでプロジェクトの完成です。

1. HTMLファイルを作ってみよう
  プロジェクトは完成しましたが、初期状態なので中には何も入っていません。
  次は、HTMLファイルを作ります。
  プロジェクト名の上にマウスカーソルを合わせ、"New File"ボタンをクリックします。
  ファイル名は、"index.html"としましょう。
  ファイルが出来ました。
  HTMLは、このファイルに記述していきます。
```
index.html
<html>
<head>
	<meta charset="UTF-8">
</head>
<body>
	<h1>Hello HTML!!</h1>
</body>
</html>
```

1. ブラウザで動かしてみよう
  このHTMLファイルは、簡単にブラウザで動作確認をする事ができます。
  編集しているhtmlファイルの上で、
  右クリック -> "Open with Live Server"をクリックします。
  すると、自動でブラウザが立ち上がります。
  ブラウザに、"Hello HTML!!"と表示されている事を確認できます。

1. コンソール画面を確認する
"console.log();"は、コンソール画面に文字を出力する命令です。
"コンソール画面"とは、ブラウザに備わった特別な画面であり、
主に、プログラムの動作確認や、エラーの確認をする時に利用します。
次の手順に従って、コンソール画面を開いてみましょう。
GoogleChromeブラウザの、右上にあるメニューボタンから、
"More Tools" -> "Developer Tools"の順番にクリックしていきます。
"Console"のタブをクリックすると、コンソール画面が現れます。
"Hello JavaScript!!"の文字が出力されているのを確認する事ができます。

---
### [JavaScript入門](https://www.javadrive.jp/javascript/)
1. JavaScriptをブラウザで有効にする
1. HTMLページにJavaScriptを記述する
1. ブラウザのコンソールからJavaScriptを利用する
1. JavaScriptの基本事項
1. 数値
1. 長整数
1. 文字列
1. 変数
1. 演算子
1. 繰り返し処理
1. 条件分岐
1. オブジェクト
1. 配列
1. 関数
1. 例外処理
1. JavaScript正規表現
1. グローバル関数
1. Dateオブジェクト
1. Mathオブジェクト
1. Consoleオブジェクト
1. Ajaxを使った非同期通信
1. DOM入門
1. イベント処理
1. ブラウザでのJavaScriptの利用
1. ファームへのアクセス

---
### [AtCoder 第一回 アルゴリズム実技検定 過去問](https://atcoder.jp/contests/past201912-open)
A	2 倍チェック
B	増減管理
C	3 番目
D	重複検査
E	SNS のログ
F	DoubleCamelCase Sort
G	組分け
H	まとめ売り
I	部品調達
J	地ならし
K	巨大企業
L	グラデーション
M	おまかせ
N	整地
O	持久戦
