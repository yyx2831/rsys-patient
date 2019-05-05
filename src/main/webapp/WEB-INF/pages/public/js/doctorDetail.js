var ctrl = new Vue({
    el: '.ctrl',
    data (){
        return {
            doctor: {
                consultation: {
                    quantity: 0
                }
            },
            isLoading: false
        }
    },
    methods: {
        queryDetail: function () {
            var self = this;
            $.post(
                contextPath + "doctor/doctorHasConsu",
                {
                    "id": $("#doctorId").val()
                },
                function (res) {
                    if (res.code === 0) {
                        if (!res.content.consultation) {
                            res.content.consultation = {
                                quantity: 0
                            }
                        }
                        self.doctor = res.content;
                    }
                }
            );
        },
        pay: function () {
            $.ajax({
                url: contextPath + "order/pay",
                data: {
                    "doctorId": $("#doctorId").val()
                },
                dataType: "json",
                success: function (res) {
                    if (res.code == 0) {
                        var data = res.content;
                        data["package"] = data.packageValue;
                        delete data.packageValue;
                        onBridgeReady(data);
                    } else {
                        myToast(res.msg);
                    }
                },
                error: function (res) {
                    myToast("支付失败");
                }
            });
        },
        goToChat: function () {
            var self = this;
            $.ajax({
                url: contextPath + "doctor/checkCanChat",
                data: {
                    "doctorId": $("#doctorId").val()
                },
                dataType: "json",
                success: function (res) {
                    if (res.code == 0) {
                        if(res.content){
                            //聊天
                        }else{
                            self.pay();
                        }
                    } else {
                        myToast(res.msg);
                    }
                },
                error: function (res) {
                    myToast("网络失败");
                }
            });
        }
    },
    mounted: function () {
        this.queryDetail();
    }
});

function onBridgeReady(data) {
    WeixinJSBridge.invoke(
        'getBrandWCPayRequest', data,
        function (res) {
            if (res.err_msg == "get_brand_wcpay_request:ok") {
                myToast("支付成功");
            } else {
                myToast("支付失败");
            }
        }
    );
}
