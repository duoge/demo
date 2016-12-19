/**
 * Created by wuduo on 2016/12/13.
 */

(function () {
    function searchNav() {
        var nav = document.querySelectorAll(".search_nav ul li");
        for (var i = 0; i < nav.length; i++) {
            (function (i) {
                nav[i].onclick = function () {
                    for (var j = 0; j < nav.length; j++) {
                        nav[j].classList.remove("sea_list_color");
                    }
                    nav[i].classList.add("sea_list_color");
                }
            })(i);
        }
    }

    searchNav();

    /****
     * banner
     * */
    jQuery(".slideBox").slide({
        mainCell: ".bd ul",
        effect: "leftLoop",
        autoPlay: true,
        interTime: 6000
    });

    jQuery(".sideMenu").slide({
        titCell: ".menu_r", //鼠标触发对象
        targetCell: ".menu_list", //与titCell一一对应，第n个titCell控制第n个targetCell的显示隐藏
        effect: "slideDown", //targetCell下拉效果
        delayTime: 300, //效果时间
        triggerTime: 150, //鼠标延迟触发时间（默认150）
        defaultPlay: true,//默认是否执行效果（默认true）
        returnDefault: false, //鼠标从.sideMen移走后返回默认状态（默认false）
        trigger: "click"

    });

    jQuery(".picScroll-left").slide({
        titCell: ".hd ul",
        mainCell: ".bd ul",
        autoPage: true,
        effect: "leftLoop",
        autoPlay: true,
        vis: 2,
        scroll: 2,
        interTime: 3000
    });

    function sideMenu() {
        var menus = document.querySelectorAll(".menu_list li");
        for (var i = 0; i < menus.length; i++) {
            menus[i].i = i;
            (function (i) {
                menus[i].onmouseover = function () {
                    this.className = "menu_onmouseover";
                    menus[i].style.backgroundColor = "rgba(255,255,255,1)";
                    menus[i].style.color = "#fe952a";
                    menus[i].style.fontWeight = "bold";
                    menus[i].style.paddingLeft = "36px";
                    menus[i].style.borderRight = "0";

                };

                menus[i].onmouseout = function () {
                    this.className = "";
                    menus[i].style.backgroundColor = "rgba(255,255,255,0)";
                    menus[i].style.color = "#7f7f7f";
                    menus[i].style.fontWeight = "normal";
                    menus[i].style.paddingLeft = "40px";
                    menus[i].style.borderRight = "1px solid #c7c7c7";
                }
            })(i);

        }
    }

    sideMenu();


    function demendRmove() {
        var oDiv = document.getElementsByClassName("demand_lang_box")[0];
        var lbtn = document.getElementById("demand_lbtn");
        var rbtn = document.getElementById("demand_rbtn");
        var res = 0;

        lbtn.onclick = function () {
            res--;
            indexChg();
            oDiv.style.marginLeft = -res * 1040 + "px";
            // oDiv.style.transition = "marginLeft 1000ms";
        };
        rbtn.onclick = function () {
            res++;
            indexChg();
            oDiv.style.marginLeft = -res * 1040 + "px";

        };
        function indexChg() {
            if (res < 0) {
                res = 2;
            } else if (res > 2) {
                res = 0;
            }
        }
    }

    demendRmove();

})();


/********number特效********/
(function () {

    $.fn.countTo = function (options) {
        options = options || {};

        return $(this).each(function () {
            // set options for current element
            var settings = $.extend({}, $.fn.countTo.defaults, {
                from: $(this).data('from'),
                to: $(this).data('to'),
                speed: $(this).data('speed'),
                refreshInterval: $(this).data('refresh-interval'),
                decimals: $(this).data('decimals')
            }, options);

            // how many times to update the value, and how much to increment the value on each update
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
                increment = (settings.to - settings.from) / loops;

            // references & variables that will change with each update
            var self = this,
                $self = $(this),
                loopCount = 0,
                value = settings.from,
                data = $self.data('countTo') || {};

            $self.data('countTo', data);

            // if an existing interval can be found, clear it first
            if (data.interval) {
                clearInterval(data.interval);
            }
            data.interval = setInterval(updateTimer, settings.refreshInterval);

            // initialize the element with the starting value
            render(value);

            function updateTimer() {
                value += increment;
                loopCount++;

                render(value);

                if (typeof(settings.onUpdate) == 'function') {
                    settings.onUpdate.call(self, value);
                }

                if (loopCount >= loops) {
                    // remove the interval
                    $self.removeData('countTo');
                    clearInterval(data.interval);
                    value = settings.to;

                    if (typeof(settings.onComplete) == 'function') {
                        settings.onComplete.call(self, value);
                    }
                }
            }

            function render(value) {
                var formattedValue = settings.formatter.call(self, value, settings);
                $self.html(formattedValue);
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,               // the number the element should start at
        to: 0,                 // the number the element should end at
        speed: 1000,           // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,           // the number of decimal places to show
        formatter: formatter,  // handler for formatting the value before rendering
        onUpdate: null,        // callback method for every time the element is updated
        onComplete: null       // callback method for when the element finishes updating
    };

    function formatter(value, settings) {
        return value.toFixed(settings.decimals);
    }


// custom formatting example
    $('#count-number').data('countToOptions', {
        formatter: function (value, options) {
            return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        }
    });

// start all the timers
    $('.timer').each(count);

    function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
    }
})();


