<template>
  <div></div>
</template>

<script>
export default {
  name:"mixins",
  data(){
    return{
      coverFile:{}
    }
  },
  methods:{
    Timeoutalert(){
      this.$alert('登录超时，请重新登录！','提示',{
                                confirmButtonText: '确定',
                                callback: () => {
                                    localStorage.removeItem('access_token')
                                    localStorage.removeItem('refresh_token')
                                    this.$router.push('/login')
                                    }
                                });
    },
    imgUrlToFile(url) {
         return new Promise((resolve) => {
          var self = this;
          self.coverFile = {};
          var imgLink = url;
          var tempImage = new Image();
          //如果图片url是网络url，要加下一句代码
          tempImage.src = imgLink+ '?v=' + Math.random();
          tempImage.setAttribute("crossOrigin",'Anonymous')
          tempImage.onload = () => {
                  
              var base64 =  self.getBase64Image(tempImage);
              var imgblob = self.base64toBlob(base64);
              var filename = self.getFileName(url);
              self.coverFile = new File([imgblob], filename);
              console.log(self.coverFile)
              if(self.coverFile){
                resolve(self.coverFile);
              }                               
          };
          //return  self.coverFile;
         })
    },
    getBase64Image(img) {
      
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, img.width, img.height);  
      var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();     
      var dataURL = canvas.toDataURL("image/" + ext);    
      return dataURL;
      
    },
    base64toBlob(base64) {
      let arr = base64.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    },
    getFileName(url) {
      // 获取到文件名
      let pos = url.lastIndexOf("_"); // 查找最后一个/的位置
      return url.substring(pos + 1); // 截取最后一个/位置到字符长度，也就是截取文件名
    }

  }
}
</script>