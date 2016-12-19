/**
 * Created by wuduo on 2016/12/12.
 */

(function () {
    var wait = 60;

    function time(o) {
        if (wait == 0) {
            o.removeAttribute("disabled");
            o.value = "免费发送激活邮件";
            o.style.cursor = "pointer";
            o.style.backgroundColor = "#ff952d";

            wait = 60;
        } else {
            o.setAttribute("disabled", true);
            o.value = "重新发送(" + wait + ")";
            o.style.cursor = "not-allowed";
            o.style.backgroundColor = "gray";
            wait--;
            setTimeout(function () {
                time(o)
            }, 1000)
        }
    }

    document.getElementById("activation").onclick = function () {
        time(this);
        alert("发送邮件成功");
    }
})();