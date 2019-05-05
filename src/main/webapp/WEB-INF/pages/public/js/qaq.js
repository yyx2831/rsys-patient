var itemVue = new Vue({
  el: "#qaq",
  data: {
    content: "",
    imgs: [],
    isLoading: false
  },
  methods: {
    calcContent() {
      this.content = this.cutstr(this.content, 200);
    },
    cutstr(str, len) {
      var str_length = 0;
      var str_len = 0;
      str_cut = new String();
      str_len = str.length;
      for (var i = 0; i < str_len; i++) {
        a = str.charAt(i);
        str_length++;
        if (escape(a).length > 4) {
          //中文字符的长度经编码之后大于4
          str_length++;
        }
        str_cut = str_cut.concat(a);
        if (str_length >= len) {
          return str_cut;
        }
      }
      //如果给定字符串小于指定长度，则返回源字符串；
      if (str_length < len) {
        return str;
      }
    },
    deleteImg(index) {
      this.imgs.splice(index, 1);
    },
    submit() {
      var self = this;
      if (this.content.length < 10) {
        myToast("问题反馈描述请大于十个字");
        return;
      }
      self.isLoading = true;
      $.post(
        contextPath + "feedBack/add",
        {
          content: self.content,
          imgs: JSON.stringify(self.imgs)
        },
        function(res) {
          self.isLoading = false;
          if (res.code == 0) {
            myToast("提交成功");
            setTimeout(function() {
              window.history.back();
            }, 2000);
          }
        }
      );
    }
  }
});
var uploader = new plupload.Uploader({
  runtimes: "html5,flash,silverlight,html4",
  browse_button: "selectfiles",
  url: "http://oss.aliyuncs.com",
  filters: {
    mime_types: [
      //只允许上传图片文件
      { title: "Image files", extensions: "jpg,gif,png,bmp" }
    ],
    max_file_size: "10mb", //最大只能上传10mb的文件
    prevent_duplicates: true //不允许选取重复文件
  },

  init: {
    PostInit: function() {
      // document.getElementById('ossfile').innerHTML = '';
      // document.getElementById('postfiles').onclick = function() {
      //     set_upload_param(uploader, '', false);
      //     return false;
      // };
    },
    FilesAdded: function(up, files) {
      set_upload_param(uploader, "", false);
    },

    BeforeUpload: function(up, file) {
      set_upload_param(up, file.name, true);
    },

    // UploadProgress: function(up, file) {
    //     var d = document.getElementById(file.id);
    //     d.getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
    //     var prog = d.getElementsByTagName('div')[0];
    //     var progBar = prog.getElementsByTagName('div')[0]
    //     progBar.style.width= 2*file.percent+'px';
    //     progBar.setAttribute('aria-valuenow', file.percent);
    // },

    FileUploaded: function(up, file, info) {
      if (info.status == 200) {
        var url = host + "/" + get_uploaded_object_name(file.name);
        itemVue.imgs.push(url);
      } else {
        console.log(info.response);
      }
    },
    Error: function(up, err) {
      console.log(err);
    }
  }
});

uploader.init();
