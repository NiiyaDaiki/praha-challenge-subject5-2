const express = require("express");
const app = express();

/**
 * TODO: static利用時のクッキー設定方法
 * staticを利用した時、クッキーの設定方法をどうすれば良いかわからない。
 * ルーティングをしなくても良くなってしまうので、クッキーをセットする処理をどこに書けば良いかわからない。
 * app.use(express.static(__dirname + '/public'));
 */

// port番号
const port = 8081;
// サーバー起動
app.listen(port);

// ルーティング
// 埋め込む用のページを返す。オリジン間でもクッキーの送信を許可するためにsameSite属性とsecure属性を付与する。
app.get("/index2", (req, res) => {
    // クッキーの設定
    res.cookie('5-2', 'value2', {
        sameSite: 'none',
        secure: 'true',
        httpOnly: true
    })
    res.sendFile(__dirname + '/public/index2.html');
});