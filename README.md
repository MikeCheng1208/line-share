# LINE分享

Damo
* https://a3804430.github.io/LineShare_Example/src/

----

Line文件

* 手機版開啟app分享(桌機無法使用)
<https://media.line.me/howto/zh-hant/>

* 桌機跟手機開啟瀏覽器分享
<https://developers.line.me/line-it/line-it-button-for-websites>

----
網站的meta要下
```html
<meta property="og:title" content="標題"/>
<meta property="og:description" content="內容敘述"/>
<meta property="og:url" content="分享網址"/>
<meta property="og:image" content="分享圖片"/>
```


分享的連結
```javascript
//桌機
"https://lineit.line.me/share/ui?url="+ encodeURIComponent("分享的網址")

//手機
"http://line.me/R/msg/text/"+ encodeURIComponent("分享的網址")
```


用法
* 使用window.open方式開啟此網址

```javascript
//桌機
document.getElementById("Line_Pc_Btn").onclick = function(){
    window.open('https://lineit.line.me/share/ui?url='+encodeURIComponent("https://a3804430.github.io/LineShare_Example/src/"),"_blank","toolbar=yes,location=yes,directories=no,status=no, menubar=yes,scrollbars=yes,resizable=no, copyhistory=yes,width=600,height=400")
}
//手機
document.getElementById("Line_mobile_Btn").onclick = function(){
    window.open('http://line.me/R/msg/text/'+ encodeURIComponent("https://a3804430.github.io/LineShare_Example/src/"),"_blank","toolbar=yes,location=yes,directories=no,status=no, menubar=yes,scrollbars=yes,resizable=no, copyhistory=yes,width=600,height=400")
}
```

