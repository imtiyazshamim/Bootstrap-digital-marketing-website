//Team Section
var member = document.getElementsByClassName("team");
var boxWidth = member[0].offsetWidth;
var cnt = 0;
for (var i = 0; i < member.length; i++) {
    member[i].style.left = boxWidth * i + "px";
}
document.getElementById("left-arr").addEventListener("click", function(Ev) {
    if (cnt > 0) {
        cnt--;
        for (var i = 0; i < member.length; i++) {
            var leftPos = member[i].offsetLeft;
            member[i].style.left = leftPos + boxWidth + "px";
        }
    }
}, false);
document.getElementById("right-arr").addEventListener("click", function(Ev) {
    if (cnt < member.length - 5) {
        cnt++;
        for (var i = 0; i < member.length; i++) {
            var leftPos = member[i].offsetLeft;
            member[i].style.left = leftPos - boxWidth + "px";
        }
    } else {
        cnt = 0;
        for (var i = 0; i < member.length; i++) {
            member[i].style.left = boxWidth * i + "px";
        }
    }
}, false);
var stopIt1 = setInterval(function() {
    document.getElementById("right-arr").click();
}, 2500);

document.getElementsByClassName("team-bg")[0].addEventListener("mouseover", function(ev) {
    clearInterval(stopIt1);
}, false);
document.getElementById("team").addEventListener("mouseleave", function(ev) {
    stopIt1 = setInterval(function() {
        document.getElementById("right-arr").click();
    }, 4000);
}, false);