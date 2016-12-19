/**
 * Created by wuduo on 2016/12/6.
 */

(function () {
    function changeIdentity() {
        var btn = document.getElementsByClassName("reg_identity_b");
        var regCon = document.getElementsByClassName("reg_ide_con");
        for (var i = 0; i < btn.length; i++) {
            (function (i) {
                btn[i].onclick = function () {
                    for (var j = 0; j < btn.length; j++) {
                        btn[j].classList.remove("reg_ide_bg");
                        regCon[j].classList.remove("display");
                    }
                    btn[i].classList.add("reg_ide_bg");
                    regCon[i].classList.add("display");
                }
            })(i);
        }
    }

    function inpBorder() {
        var inp = document.querySelectorAll(".reg_inp input");
        for (var i = 0; i < inp.length; i++) {
            inp[i].onfocus = function () {
                this.style.borderColor = "#fe9d50";
            };
            inp[i].onblur = function () {
                this.style.borderColor = "#dbdbdb";
            }
        }
    }

    changeIdentity();
    inpBorder();
    //验证输入
    $(function () {
        function checkUser() {
            var userName = $("#user_name");
            var userEmail = $("#user_email");
            var userPsw = $("#user_psw");
            var userPsw2 = $("#user_psw2");
            var userCode = $("#user_code");


            userName.blur(function () {
                if (userName.val() == "") {
                    userName.parents('.reg_inp').find('span').html("! 用户名不能为空");
                    userName.parents('.reg_inp').find('span').css({color: "red"});
                } else if (userName.val().length < 3 || userName.val().length > 15) {
                    userName.parents('.reg_inp').find('span').html("× 用户名格式不正确");
                    userName.parents('.reg_inp').find('span').css({color: "red"})
                } else if (3 <= userName.val().length <= 15) {
                    userName.parents('.reg_inp').find('span').html("√ 格式正确");
                    userName.parents('.reg_inp').find('span').css({color: "green"})
                }

            });

            userEmail.blur(function () {
                //var emailRrg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
                if (userEmail.val() == "") {
                    userEmail.parents('.reg_inp').find('span').html("! 邮箱不能为空");
                    userEmail.parents('.reg_inp').find('span').css({color: "red"});
                } else if (userEmail.val().indexOf("@") == -1 && userEmail.val().indexOf(".") == -1) {
                    userEmail.parents('.reg_inp').find('span').html("× 邮箱格式不正确");
                    userEmail.parents('.reg_inp').find('span').css({color: "red"})
                } else if (userEmail.val().indexOf("@") != -1 && userEmail.val().indexOf(".") != -1) {
                    userEmail.parents('.reg_inp').find('span').html("√ 邮箱格式正确");
                    userEmail.parents('.reg_inp').find('span').css({color: "green"})
                }
            });

            userPsw.blur(function () {
                if (userPsw.val() == "") {
                    userPsw.parents('.reg_inp').find('span').html("! 密码不能为空");
                    userPsw.parents('.reg_inp').find('span').css({color: "red"});
                } else if (userPsw.val().length < 6 || userPsw.val().length > 16) {
                    userPsw.parents('.reg_inp').find('span').html("× 密码格式不正确");
                    userPsw.parents('.reg_inp').find('span').css({color: "red"})
                } else if (6 <= userPsw.val().length <= 16) {
                    userPsw.parents('.reg_inp').find('span').html("√ 密码格式正确");
                    userPsw.parents('.reg_inp').find('span').css({color: "green"})
                }
            });

            userPsw2.blur(function () {
                if (userPsw2.val() == "") {
                    userPsw2.parents('.reg_inp').find('span').html("! 密码不能为空");
                    userPsw2.parents('.reg_inp').find('span').css({color: "red"});
                } else if (userPsw2.val() != userPsw.val()) {
                    userPsw2.parents('.reg_inp').find('span').html("× 两次密码输入不一致");
                    userPsw2.parents('.reg_inp').find('span').css({color: "red"})
                } else if (userPsw2.val() == userPsw.val()) {
                    userPsw2.parents('.reg_inp').find('span').html("√ 确认密码正确");
                    userPsw2.parents('.reg_inp').find('span').css({color: "green"})
                }
            });

            userCode.blur(function () {
                if (userCode.val() == '') {
                    userCode.parents('.reg_inp').find('span').html("! 验证码不能为空");
                    userCode.parents('.reg_inp').find('span').css({color: "red"});
                }
            })


        }

        function checkAgency() {
            var agencyName = $("#agency_name");
            var agencyEmail = $("#agency_email");
            var agencyPsw = $("#agency_psw");
            var agencyPsw2 = $("#agency_psw2");
            var agencyNum = $("#agency_num");
            var agencyCode = $("#agency_code");

            agencyName.blur(function () {
                if (agencyName.val() == "") {
                    agencyName.parents('.reg_inp').find('span').html("! 用户名不能为空");
                    agencyName.parents('.reg_inp').find('span').css({color: "red"});
                } else if (agencyName.val().length < 3 || agencyName.val().length > 15) {
                    agencyName.parents('.reg_inp').find('span').html("× 用户名格式不正确");
                    agencyName.parents('.reg_inp').find('span').css({color: "red"})
                } else if (3 <= agencyName.val().length <= 15) {
                    agencyName.parents('.reg_inp').find('span').html("√ 格式正确");
                    agencyName.parents('.reg_inp').find('span').css({color: "green"})
                }
            });

            agencyEmail.blur(function () {
                if (agencyEmail.val() == "") {
                    agencyEmail.parents('.reg_inp').find('span').html("! 邮箱不能为空");
                    agencyEmail.parents('.reg_inp').find('span').css({color: "red"});
                } else if (agencyEmail.val().indexOf("@") == -1 && agencyEmail.val().indexOf(".") == -1) {
                    agencyEmail.parents('.reg_inp').find('span').html("× 邮箱格式不正确");
                    agencyEmail.parents('.reg_inp').find('span').css({color: "red"})
                } else if (agencyEmail.val().indexOf("@") != -1 && agencyEmail.val().indexOf(".") != -1) {
                    agencyEmail.parents('.reg_inp').find('span').html("√ 邮箱格式正确");
                    agencyEmail.parents('.reg_inp').find('span').css({color: "green"})
                }
            });

            agencyNum.blur(function () {
                if (agencyNum.val() == "") {
                    agencyNum.parents('.reg_inp').find('span').html("! 统一社会信用代码不能为空");
                    agencyNum.parents('.reg_inp').find('span').css({color: "red"});
                } else if (agencyNum.val().length < 10 || agencyNum.val().length > 18) {
                    agencyNum.parents('.reg_inp').find('span').html("× 统一社会信用代码格式不正确");
                    agencyNum.parents('.reg_inp').find('span').css({color: "red"})
                } else if (3 <= agencyNum.val().length <= 18) {
                    agencyNum.parents('.reg_inp').find('span').html("√ 格式正确");
                    agencyNum.parents('.reg_inp').find('span').css({color: "green"})
                }
            });

            agencyPsw.blur(function () {
                if (agencyPsw.val() == "") {
                    agencyPsw.parents('.reg_inp').find('span').html("! 密码不能为空");
                    agencyPsw.parents('.reg_inp').find('span').css({color: "red"});
                } else if (agencyPsw.val().length < 6 || agencyPsw.val().length > 16) {
                    agencyPsw.parents('.reg_inp').find('span').html("× 密码格式不正确");
                    agencyPsw.parents('.reg_inp').find('span').css({color: "red"})
                } else if (6 <= agencyPsw.val().length <= 16) {
                    agencyPsw.parents('.reg_inp').find('span').html("√ 密码格式正确");
                    agencyPsw.parents('.reg_inp').find('span').css({color: "green"})
                }
            });

            agencyPsw2.blur(function () {
                if (agencyPsw2.val() == "") {
                    agencyPsw2.parents('.reg_inp').find('span').html("! 密码不能为空");
                    agencyPsw2.parents('.reg_inp').find('span').css({color: "red"});
                } else if (agencyPsw2.val() != agencyPsw.val()) {
                    agencyPsw2.parents('.reg_inp').find('span').html("× 两次密码输入不一致");
                    agencyPsw2.parents('.reg_inp').find('span').css({color: "red"})
                } else if (agencyPsw2.val() == agencyPsw.val()) {
                    agencyPsw2.parents('.reg_inp').find('span').html("√ 密码格式正确");
                    agencyPsw2.parents('.reg_inp').find('span').css({color: "green"})
                }
            });
            agencyCode.blur(function () {
                if (userCode.val() == '') {
                    userCode.parents('.reg_inp').find('span').html("! 验证码不能为空");

                }
            });
        }

        checkUser();
        checkAgency();
    });

    //协议账号
    function checkAgreeAccount() {
        var agree = $("#check").is(":checked");
        if (!agree) {
            alert("请先阅读并接受《科服汇服务条款》！");
            return false;
        }
        return true;
    }
})();