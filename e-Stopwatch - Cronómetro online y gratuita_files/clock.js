if(typeof mode == "undefined"||(mode != 1 && mode != 2 && mode != 3 && mode != 4)) mode=3;
if(typeof cssA != "string") cssA="";
function refreshClock(){
    var dobj=new Date();var apm="";var hh=dobj.getHours();var mm=dobj.getMinutes();var ss=dobj.getSeconds();var pre="";var post="";
    if(mode==2||mode==3||mode==4){
        apm=" am";
        if(hh==0){
            hh=12;apm=" am";
        } else if(hh==12) {
            apm=" pm";
        } else if(hh>12){
            apm=" pm";hh=hh%12;
        }
    }
    if(mode==4) apm="";
    if(mode==3) {
        pre="<span style=\"white-space:nowrap;\">";
        post="</span>";
    }
    if(hh<10) hh="0"+hh;
    if(mm<10) mm="0"+mm;
    if(ss<10) ss="0"+ss;
    document.getElementById('clock').innerHTML=pre+"<span id=\"dwrClock\" style=\"text-decoration:none;"+cssA+"\">"+hh+":"+mm+apm+"</span>"+post;
}
function initClock(){
    var sample=[];
    sample[1]="<span id=\"dwrClock\">88:88:88</span>";
    sample[2]="<a id=\"dwrClock\" href=\"http://www.dwebresources.com\" target=\"_blank\" style=\"text-decoration:none;\">88:88:88 pm</a>";
    sample[3]="<span style=\"white-space:nowrap;\"><a id=\"dwrClock\" href=\"http://www.dwebresources.com\" target=\"_blank\" style=\"text-decoration:none;\">88:88:88 pm</a></span>";
    sample[1]="<span id=\"dwrClock\">88:88:88</span>";
    var i;
    document.getElementById('clock').innerHTML=sample[mode];
    var Width=document.compatMode==='CSS1Compat' && !window.opera ? document.documentElement.clientWidth : document.body.clientWidth;
    var Height=document.compatMode==='CSS1Compat' && !window.opera ? document.documentElement.clientHeight : document.body.clientHeight;
    for(i=2;i<300;i++){
        //document.body.div.clock.style.fontSize=i+"px";
        var xWithScroll = document.getElementById("dwrClock").offsetWidth;
        var yWithScroll=document.getElementById("dwrClock").offsetHeight;
        if(Width <= xWithScroll || Height <= yWithScroll) break;
    }
    //document.body.style.fontSize=(i-1)+"px";
    refreshClock();
    setInterval(refreshClock,500);
}
setTimeout(initClock, 500);