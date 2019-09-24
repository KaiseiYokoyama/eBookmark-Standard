![logo](https://user-images.githubusercontent.com/29916489/65482810-35970200-ded5-11e9-893b-af9d4173a782.jpg)

## コニカミノルタハッカソン2019審査員特別賞受賞  

## ターゲット  
+ 読書家  
+ 管理する資料が多い会社員  

## ターゲットが抱える課題  
本を本棚から探すのに時間がかかる  
本の情報（感想やお気に入りなど）を管理したい  

## サービス，機能概要  
nfcタグとOLEDから構成される次世代のしおり．

![e-Bookmark](https://user-images.githubusercontent.com/29916489/65483463-34ff6b00-ded7-11e9-8f39-fad4eb1f182a.png)

ケータイなどの端末からしおりごとに本のデータをサーバ上に登録できる．  
登録した本を探したいときは，本棚にスマホを順にかざしていき，登録されたしおりのはさんである本の前でケータイに通知やバイブレーションが送られるとともにしおりが光るのでどこにあるのかが簡単にわかります．この時，SFなど本のジャンルなど独自の分類での検索もできます．  
つまり，物理的な書籍に電子書籍の利便性の一部が移植されます．

![diagram](https://user-images.githubusercontent.com/29916489/65483409-f5d11a00-ded6-11e9-910c-5cff4a443837.png)

機能としては，タイトル・タグ・メモ・お気に入りを管理できます．
## メリット  
しおりを挟むだけなので導入が簡単です．タグを貼り付けないので本を汚しません．  

## 関連するSDGsテーマ  
暮らし  

## 使用するコニカミノルタのデバイス  
OLED  

## デモ動画  
AndroidアプリのUI上の操作のデモとAndroidアプリの代わりとなるArduinoでのデモ  
しおりが背表紙に貼ってありますが今回使用したNFCタグの規格ではこの距離のみでしか通信できないためそうしてあります．
実際に使用する場合には適度な通信距離のタグを使用すれば実現可能です．
<table>
<tr>
<td><a href = "https://youtu.be/zThKJ1CCut4"><img src="http://img.youtube.com/vi/zThKJ1CCut4/default.jpg"></a></td>
<td><a href = "https://youtu.be/jpwZXuaXR50"><img src="http://img.youtube.com/vi/jpwZXuaXR50/default.jpg"></a></td>
</tr>
</table>

## 仕様  
https://github.com/KaiseiYokoyama/eBookmark-Standard

## デザイン  
[Taisuke Washino](http://tstyleworks.html.xdomain.jp/)

## フロントエンド（PC側）  
https://github.com/masao1211/ebook  
https://github.com/masao1211/ebook-individual  
https://github.com/masao1211/ebook-edit  
https://github.com/KaiseiYokoyama/eBookmark-JSFunctions  

## フロントエンド（Android側）  
[準備中](https://github.com/Kenta-Miyazaki-jazz?tab=repositories)

## バックエンド  
https://github.com/KaiseiYokoyama/eBookmark-Backend  

## デバイス  
OLED＆NFC  
Arduinoによる代替  
https://github.com/yagijin/ebookmark_device
