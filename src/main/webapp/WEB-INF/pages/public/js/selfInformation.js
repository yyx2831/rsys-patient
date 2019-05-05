var itemVue = new Vue({
  el: "#selfInformation",
  data: {
    selfInfor: {},
    changeTitle: "信息修改",
    textIsChange: false,
    changeContent: "",
    clickIndex: 1
  },
  created: function() {
    this.getInfor();
  },
  methods: {
    selfMsgChange: function(title, index) {
      this.textIsChange = !this.textIsChange;
      this.changeTitle = title;
      this.changeContent = "";
      this.clickIndex = index;
    },
    selfSexChange: function() {
      var isSex = this.selfInfor.sex,
        _this = this;
      isSex == 1 ? (isSex = 2) : (isSex = 1);
      $.ajax({
        url: contextPath + "patient/updateSexOrAge",
        data: { sex: isSex },
        dataType: "json",
        success: function(res) {
          if (res.code == 0) {
            myToast("性别修改成功");
            _this.getInfor();
          } else {
            myToast(res.msg);
          }
        },
        error: function(res) {
          myToast("网络错误");
        }
      });
    },
    selfNameChange: function() {
      var self = this;
      if (self.changeContent == "") {
        myToast("名字不能为空");
        return;
      }
      $.ajax({
        url: contextPath + "patient/updateSexOrAge",
        data: { name: self.changeContent },
        dataType: "json",
        success: function(res) {
          if (res.code == 0) {
            myToast("名字修改成功");
            self.getInfor();
            self.textIsChange = !self.textIsChange;
          } else {
            myToast(res.msg);
          }
        },
        error: function(res) {
          myToast("网络错误");
        }
      });
    },
    selfPhoneChange: function() {
      var self = this;
      if (!/^1[34578]\d{9}$/.test(self.changeContent)) {
        myToast("手机号码有误，请重填");
        return;
      }
      $.ajax({
        url: contextPath + "patient/updateSexOrAge",
        data: { phone: self.changeContent },
        dataType: "json",
        success: function(res) {
          if (res.code == 0) {
            myToast("手机号修改成功");
            self.getInfor();
            self.textIsChange = !self.textIsChange;
          } else {
            myToast(res.msg);
          }
        },
        error: function(res) {
          myToast("网络错误");
        }
      });
    },
    selfAgeChange: function() {
      var _this = this;
      if (_this.changeContent > 120 || _this.changeContent < 0) {
        myToast("请输入正确的年龄");
        return
      }
      $.ajax({
        url: contextPath + "patient/updateSexOrAge",
        data: { age: _this.changeContent },
        dataType: "json",
        success: function(res) {
          if (res.code == 0) {
            myToast("年龄修改成功");
            _this.getInfor();
            _this.textIsChange = !_this.textIsChange;
          } else {
            myToast(res.msg);
          }
        },
        error: function(res) {
          myToast("网络错误");
        }
      });
    },
    getInfor: function() {
      var _this = this;
      $.ajax({
        url: contextPath + "patient/info",
        dataType: "json",
        success: function(res) {
          if (res.code == 0) {
            _this.selfInfor = res.content.info;
          } else {
            myToast(res.msg);
          }
        },
        error: function(res) {
          myToast("网络错误");
        }
      });
    }
  }
});
