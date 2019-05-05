var itemVue = new Vue({
  el: "#selfInformation",
  data: {
    selfInfor: {},
    changeTitle: "信息修改",
    textIsChange: false,
    changeContent: "",
    clickIndex: 1,
    unread: 0
  },
  created: function() {
    this.getInfor();
  },
  methods: {
    getInfor: function() {
      var _this = this;
      $.ajax({
        url: contextPath + "patient/info",
        dataType: "json",
        success: function(res) {
          if (res.code === 0) {
            _this.selfInfor = res.content.info;
            _this.unread = res.content.unRead > 99 ? "..." : res.content.unRead;
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
    goShare: function() {
      window.location.href = "patient/share.htm";
    }
  }
});

