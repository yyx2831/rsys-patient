var itemVue = new Vue({
  el: "#msg",
  data: {
    list: [],
    index: 1,
    isLoading: false,
    isMore: true
  },
  created: function() {
    var _this = this;
    this.getSysMsg();
    function pushHistory() {
      var state = {
        title: "title",
        url: "#"
      };
      window.history.pushState(state, "title", "#");
    }

    pushHistory();
    window.addEventListener(
      "popstate",
      function() {
        window.location = document.referrer;
      },
      false
    );
  },
  methods: {
    getSysMsg: function() {
      var _this = this;
      if (this.isLoading) {
        return;
      }
      if (!this.isMore) {
        return;
      }
      this.isLoading = true;
      $.ajax({
        url: contextPath + "sys/list",
        dataType: "json",
        data: { index: _this.index },
        success: function(res) {
          if (res.code == 0) {
            if (_this.index + 1 > res.content.pages) {
              _this.isMore = false;
            }
            _this.list = _this.list.concat(res.content.list);
            _this.index = res.content.index + 1;
          } else {
            myToast(res.msg);
          }
        },
        complete: function() {
          _this.isLoading = false;
        },
        error: function(res) {
          myToast("网络错误");
        }
      });
    },
    menu: function() {
      var innerHeight = window.innerHeight; //window的高度，即手机的高度
      var clientHeight = document.body.clientHeight;
      if ($(window).scrollTop() + innerHeight == $(document).height()) {
        this.getSysMsg();
      }
    },
    goUse: function() {
      window.location.replace("doctor/pharmacist.html");
    }
  }
});
