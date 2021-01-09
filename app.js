// package.jsonのscriptsに"start": "node app.js"を加えて
// npm startでサーバーを立ち上げると、ターミナルにconsole.logで出力できる

// expressの読み込み
const express = require("express");
const app = express();

// URLエンコードされたデータをquerystringライブラリ(falseの場合)とqsライブラリ(trueの場合)のどちらで解析するかを選択することができる。
// qsライブラリでは、リッチオブジェクトや配列をURLエンコードされた形式にエンコードすることができ、URLエンコードされたJSONのようになる。
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// port番号
const port = 8088;
// サーバー起動
app.listen(port);

// ルーティング
// get用
app.get("/", (req, res) => {
    const data = {
        text: "hello world"
    };
    res.status(200).json(data);
});