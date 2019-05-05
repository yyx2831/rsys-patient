Vue.filter('time', function (value) {
    if (!value) return;
    var d = new Date(value);
    var year = d.getFullYear();
    var month = (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : '' + (d.getMonth() + 1);
    var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
    var hour = d.getHours() < 10 ? '0' + d.getHours() : '' + d.getHours();
    var minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : '' + d.getMinutes();
    var seconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : '' + d.getSeconds();
    return year + '-' + month + '-' + day + " " + hour + ":" + minutes;
});
var ctrl = new Vue({
    el: '.ctrl',
    data: {
        orderLists: [],
        currentIndex: 1,
        size: 10,
        totalCounts: 100,
        isLoading: false
    },
    methods: {
        queryOrder: function () {
            var self = this;
            $.post(
                contextPath + "order/list",
                {
                    "index": self.currentIndex,
                    "size": self.size
                },
                function (res) {
                    self.isLoading = false;
                    if (res.code == 0 && res.content) {
                        self.orderLists = self.orderLists.concat(res.content.list);
                        self.totalCounts = res.content.count;
                    }
                }
            );
        },
        goDetail:function(item){
            window.location.href = "doctor/doctorDetail.htm?doctorId=" + item.id;
        }
    },
    mounted: function () {
        var self = this;
        this.queryOrder();
        window.addEventListener("scroll", function () {
            if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
                if (self.isLoading) {
                    return
                }
                self.isLoading = true;
                if (self.totalCounts <= self.orderLists.length) {
                    myToast("没有更多");
                } else {
                    self.currentIndex += 1;
                    self.queryOrder();
                }

            }
        })
    }
});