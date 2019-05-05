var itemVue = new Vue({
  el: "#vip",
  data: {
    selfInfor: {
      vipLevel: -1
    }
  },
  created: function() {
    this.getInfor();
  },
  methods: {
    getInfor: function() {
      var _this = this;
      $.ajax({
        url: contextPath + "patient/info",
        // data: data,
        dataType: "json",
        success: function(res) {
          if (res.code == 0) {
            _this.selfInfor = res.content.info;
            if (_this.selfInfor.vipLevel == 1) {
              _this.calcEndTime();
            }
          } else {
            myToast(res.msg);
          }
        },
        error: function(res) {
          myToast("网络错误");
        }
      });
    },
    goInfo: function() {
      window.location.href = "patient/selfInformation.htm";
    },
    calcEndTime: function() {
      var date1 = new Date(); //开始时间
      var date2 = new Date(this.selfInfor.vipEndTime); //结束时间
      var date3 = date2.getTime() - date1.getTime(); //时间差的毫秒数
      //计算出相差天数
      var days = Math.floor(date3 / (24 * 3600 * 1000));
      this.selfInfor.vipEndDay = days;
    }
  }
});
