var itemVue = new Vue({
  el: "#recommend",
  data: {
    list: [],
    index: 1,
    isLoading: false,
    isMore: true,
    level: 1,
    info: {
      "money":"加载中",
      "ticket":"加载中",
      "count":"加载中",
    }
  },
  created: function() {
    var _this = this;
    this.getRecommendList();
    this.getCouponData();
  },
  methods: {
    getRecommendList: function() {
      var _this = this;
      if (this.isLoading) {
        return;
      }
      if (!this.isMore) {
        return;
      }
      this.isLoading = true;
      $.ajax({
        url: contextPath + "patient/myRecommendsMember",
        dataType: "json",
        data: { index: _this.index, level: _this.level },
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
        this.getRecommendList();
      }
    },
    changeTab: function(level) {
      this.level = level;
      this.index = 1;
      this.isMore = true;
      this.list = [];
      this.getRecommendList();
    },
    getCouponData: function() {
      var self = this;
      $.ajax({
        url: contextPath + "patient/commission",
        dataType: "json",
        methods: "POST",
        success: function(res) {
          if (res.code == 0) {
            self.info = res.content;
          } else {
            myToast(res.msg);
          }
        },
        error: function(res) {
          myToast("网络错误");
        }
      });
    }
  },
  mounted() {
    window.addEventListener("scroll", this.menu);
  }
});
