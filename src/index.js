const device = require('current-device').default;
class Line{
    constructor(){
        console.log('init');
    }
    share(url){
        if(device.desktop()){
            window.open('https://lineit.line.me/share/ui?url='+encodeURIComponent(url),"_blank","toolbar=yes,location=yes,directories=no,status=no, menubar=yes,scrollbars=yes,resizable=no, copyhistory=yes,width=600,height=400")
        }else{
            window.open('line://msg/text/'+ encodeURIComponent(url),"_blank","toolbar=yes,location=yes,directories=no,status=no, menubar=yes,scrollbars=yes,resizable=no, copyhistory=yes,width=600,height=400")
        }
    }
}
export default Line;
