/**
 * Created by wuduo on 2016/11/16.
 */

(function () {
    /***
     * menus
     * **/
    function menusnav() {
        var menus = document.querySelectorAll(".menu-left ul");
        for (var i = 0; i < menus.length; i++) {
            menus[i].i = i;
            (function (i) {
                menus[i].onmouseover = function () {
                    this.className = "menu-onmouseover";
                    menus[i].style.backgroundColor = "#eeeeee"
                };

                menus[i].onmouseout = function () {
                    this.className = "";
                    menus[i].style.backgroundColor = ""
                }
            })(i);

        }
    }

    menusnav();

    /****
     * banner
     * */
    jQuery(".slideBox").slide({mainCell: ".bd ul", effect: "leftLoop", autoPlay: true});

    //
    function changeList() {
        var nav = document.getElementsByClassName("announcement-nav-d");
        var newsList = document.getElementsByClassName("annou-con-d");

        for (var i = 0; i < nav.length; i++) {
            (function (i) {
                nav[i].onclick = function () {
                    for (var j = 0; j < nav.length; j++) {
                        nav[j].classList.remove("bg-img");
                        newsList[j].classList.remove("visible");
                    }
                    nav[i].classList.add("bg-img");
                    newsList[i].classList.add("visible");
                }
            })(i);
        }
    }

    changeList();

    /**
     *
     * */

    function remove() {
        var oDiv = document.getElementsByClassName("ins-con-bigcon")[0];
        var lbtn = document.getElementById("lbtn");
        var rbtn = document.getElementById("rbtn");
        var res = 0;

        lbtn.onclick = function () {
            res--;
            indexChg();
            oDiv.style.marginLeft = -res * 942 + "px";
            // oDiv.style.transition = "marginLeft 1000ms";
        };
        rbtn.onclick = function () {
            res++;
            indexChg();
            oDiv.style.marginLeft = -res * 942 + "px";

        };
        function indexChg() {
            if (res < 0) {
                res = 2;
            } else if (res > 2) {
                res = 0;
            }
        }
    }

    remove();


})();