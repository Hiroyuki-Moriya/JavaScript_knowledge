  出典 [JavaScript入門](https://www.javadrive.jp/javascript/)
## 1. HTMLページにJavaScriptを記述する
  avaScript のコードを記述するには script 要素を使用します。
  具体的には <script> から </script> の間に JavaScript のコードを記述します。
  記法
  ```
  <script>
  // コードを記述する
  </script>
  ```

  記述例
  ```
  <script>
  document.write("<p>JavaScript テスト</p>");
  </script>
  ```
### HTMLファイルの中でscript要素を記述する場所
script 要素は HTML ファイルの中の head 要素内、または body 要素内に記述します。
script 要素は複数記述することができます。
body 要素のなかに script 要素を 2 つ記述することも可能です。
  ```
  <!DOCTYPE html>
  <html lang="ja">
  <head>
  <meta charset="UTF-8">

  <script>
  // コードを記述する
  </script>

  </head>
  <body>

  <script>
  // コードを記述する
  </script>

  </body>
  </html>
  ```
  サンプルコード
  簡単な JavaScript のコードが含まれる HTML ページを作成し、 sample2-1.html という名前で保存します。
  ブラウザから保存した HTML ページを開きます。
  HTML ページ内に記述された JavaScript コードが実行されて、画面に文字列が出力されます。

  ```
  <!DOCTYPE html>
  <html lang="ja">
  <head>
  <meta charset="UTF-8">
  <title>JavaScript サンプル</title>
  </head>
  <body>

  <p>
  この下に JavaScript を使って文字列を出力します。
  </p>

  <script>
  document.write("<p>JavaScriptのテスト</p>");
  </script>

  </body>
  </html>
  ```
### JavaScriptのコードを別のファイルに記述する
  HTML ファイル内でコードを読み込みたい位置に次のように記述してください。
  記法
  ```
  <script src="コードが記述されたファイルのパス" charset="文字コード">
  </script>
  ```

  例　sample4-1.js
  ```
  document.write("<p>JavaScriptのテスト</p>");
  ```

  例 sample4-1.html
  ```
  <!DOCTYPE html>
  <html lang="ja">
  <head>
  <meta charset="UTF-8">
  <title>JavaScript サンプル</title>
  </head>
  <body>
  
  <p>
  この下に JavaScript を使って文字列を出力します。
  </p>

  <script src="./js/sample4-1.js">
  </script>

  </body>
  </html>
  ```



## 1. JavaScriptの基本事項
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
