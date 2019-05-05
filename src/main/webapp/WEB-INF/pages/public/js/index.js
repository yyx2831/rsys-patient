var itemVue = new Vue({
    el: '#index',
    data: {
        selfInfor:{}
    },
    created:function () {
        var _this = this;
        $.ajax({
            url: contextPath + "patient/info",
            // data: data,
            dataType: "json",
            success: function (res) {
                if (res.code == 0) {
                    _this.selfInfor = res.content
                } else {
                    myToast(res.msg)
                }
            },
            error: function (res) {
                myToast(res.msg)
            }
        });
    },
    methods: {

    }
});
