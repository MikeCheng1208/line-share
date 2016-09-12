window.onload = function(){
    document.getElementById("LinePc").onclick = function(){
        window.open('https://lineit.line.me/share/ui?url='+encodeURIComponent("https://a3804430.github.io/LineShare_Example/src/"),"_blank","toolbar=yes,location=yes,directories=no,status=no, menubar=yes,scrollbars=yes,resizable=no, copyhistory=yes,width=600,height=400")
    }
    document.getElementById("Linemobile").onclick = function(){
        window.open('http://line.me/R/msg/text/'+ encodeURIComponent("https://a3804430.github.io/LineShare_Example/src/"),"_blank","toolbar=yes,location=yes,directories=no,status=no, menubar=yes,scrollbars=yes,resizable=no, copyhistory=yes,width=600,height=400")
    }
}