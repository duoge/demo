/**
 * Created by wuduo on 2016/12/12.
 */

(function () {
    var i = 5;
    var t = setInterval(function(){
        if (i == 0) {
            clearInterval(t);
            return;
        }
        document.getElementById("reg_success_num").innerHTML = i;
        i--;
    }, 1000);
    setTimeout( "this.location.href= '../index.html' ",6000)

})();