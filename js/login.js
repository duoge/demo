/**
 * Created by wuduo on 2016/12/14.
 */

(function () {

    function changeUser() {
        var btn = document.getElementsByClassName("log_change_b");
        var logCon = document.getElementsByClassName("log_container");
        for (var i = 0; i < btn.length; i++) {
            (function (i) {
                btn[i].onclick = function () {
                    for (var j = 0; j < btn.length; j++) {
                        btn[j].classList.remove("btn_bgcolor");
                        logCon[j].classList.remove("log_visibility");
                    }
                    btn[i].classList.add("btn_bgcolor");
                    logCon[i].classList.add("log_visibility");
                }
            })(i);
        }
    }

    changeUser();

})();