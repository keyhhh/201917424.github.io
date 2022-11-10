var msg = "学如逆水行舟，不进则退；心似平原纵马，易放难收";
var i = 0;
function play(){
    if(i <= msg.length){
        var text = document.getElementsByClassName("text")[0];
        text.innerText = msg.substring(0, i);
        setTimeout("play()", 200);
        i++;
    }else {
        i = 0;
        console.clear();
        console.log("一次轮播结束，新一次轮播开始。");
        setTimeout("play()", 1000);
    }
}