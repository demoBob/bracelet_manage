<!--  -->
<template>
<div class="article">
  <div class="top">
    <el-button type="primary" @click="create">+添加文章</el-button>
    <el-select v-model="topicId" class="code"  @change="getarticleList">
          <el-option  label="全部" value="0"></el-option>
          <el-option v-for="(item,index) in topicList" :key="index" :label="item.title" :value="item.topicId"></el-option>
    </el-select>
  </div>
  <div class="listTable">
      <el-table
      :data="articleList"
      border
      style="width: 100%"
      max-height="650">
      <el-table-column
        prop="articleId"
        label="文章ID"
        width="100"
        >
      </el-table-column>
      <el-table-column
        prop="title"
        label="文章标题"
        >
      </el-table-column>
      <el-table-column
        prop="hint"
        label="提示语">
      </el-table-column>
       <el-table-column
        prop="content"
        label="文章内容">
      </el-table-column>
      <el-table-column
        prop="tag"
        label="标签">
      </el-table-column>
      <el-table-column
        prop="keyword"
        label="关键字">
      </el-table-column>
      <el-table-column
        prop="url"
        label="链接URL"
        width="250">
      </el-table-column>
      <el-table-column
        prop="level"
        label="权重"
        width="100">
      </el-table-column>
       <el-table-column
        label="文章图片">
        <template slot-scope="scope">
          <img :src="scope.row.imageUrl" v-if="scope.row.imageUrl != ''" />
          <div v-else>无</div>
        </template>
      </el-table-column>
      <el-table-column
        prop="description"
        label="描述">
      </el-table-column>
       <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button @click="update(scope.row)" type="text" size="small">
            <i class="el-icon-edit"></i>
            更新
          </el-button>
          <el-button @click="deleted(scope.row)" type="text" size="small" style="color:#f56c6c;">
            <i class="el-icon-delete"></i>
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <el-dialog title="添加文章" :visible.sync="addModal" :close-on-click-modal="false"  center class="addModal2">
    <el-form  ref="addForm"  label-position="right" label-width="150px" >
      <el-form-item label="文章标题：">
        <el-input v-model="addForm.title" placeholder="请输入文章标题"></el-input>
      </el-form-item>
      <el-form-item label="提示语：">
        <el-input v-model="addForm.hint"></el-input>
      </el-form-item>                  
      <el-form-item label="文章内容：">
          <el-input type="textarea"  v-model="addForm.content"></el-input>
      </el-form-item>
      <el-form-item label="标签：">
        <el-input v-model="addForm.tag"></el-input>
      </el-form-item>  
      <el-form-item label="关键词：">
        <el-input v-model="addForm.keyword"></el-input>
      </el-form-item>  
      <el-form-item label="链接URL：">
        <el-input v-model="addForm.url" placeholder="手动输入html文件url或链接网址url"></el-input>
      </el-form-item>  
      <el-form-item label="权重：">
        <el-input v-model="addForm.level" placeholder="1(默认值)"></el-input>
      </el-form-item>  
      <el-form-item label="文章图片URL：">
        <el-input v-model="addForm.imageUrl" placeholder="手动输入图片链接"></el-input>
      </el-form-item>  
      <el-form-item label="描述：">
        <el-input v-model="addForm.description"></el-input>
      </el-form-item>  
      <el-form-item label="图片或html文件：">
          <el-upload
            action="#"
            class="upload-demo"
            :on-remove="handleRemove"
            accept=".jpg,.jpeg,.png,.html"
            :on-change="handleChange"
            :http-request="httpRequest">
            <el-button size="small" type="primary" class="btn">点击上传</el-button>
          </el-upload>
      </el-form-item>
    </el-form>
    <div slot="footer" class="sure">
      <el-button type="primary" @click="created" class="btn">立即添加</el-button>
    </div>
  </el-dialog>

  <el-dialog title="更新文章" :visible.sync="updateModal" :close-on-click-modal="false"  center>
    <el-form  ref="addForm"  label-position="right" label-width="150px" >
      <el-form-item label="文章标题：">
        <el-input v-model="updateForm.title" placeholder="请输入文章标题"></el-input>
      </el-form-item>
      <el-form-item label="提示语：">
        <el-input v-model="updateForm.hint"></el-input>
      </el-form-item>                  
      <el-form-item label="文章内容：">
          <el-input type="textarea"  v-model="updateForm.content"></el-input>
      </el-form-item>
      <el-form-item label="标签：">
        <el-input v-model="updateForm.tag"></el-input>
      </el-form-item>  
      <el-form-item label="关键词：">
        <el-input v-model="updateForm.keyword"></el-input>
      </el-form-item>  
      <el-form-item label="链接URL：">
        <el-input v-model="updateForm.url" placeholder="手动输入html文件url或链接网址url"></el-input>
      </el-form-item>  
      <el-form-item label="权重：">
        <el-input v-model="updateForm.level" placeholder="1(默认值)"></el-input>
      </el-form-item>  
      <el-form-item label="文章图片URL：">
        <el-input v-model="updateForm.imageUrl" placeholder="手动输入图片链接"></el-input>
      </el-form-item>  
      <el-form-item label="描述：">
        <el-input v-model="updateForm.description"></el-input>
      </el-form-item>  
      <el-form-item label="图片或html文件：">
          <el-upload
            action="#"
            class="upload-demo"
            :on-remove="handleRemove"
            accept=".jpg,.jpeg,.png,.html"
            :on-change="handleChange"
            :http-request="httpRequest">
            <el-button size="small" type="primary" class="btn">点击上传</el-button>
          </el-upload>
      </el-form-item>
    </el-form>
    <div slot="footer" class="sure">
      <el-button type="primary" @click="updateds" class="btn">更 新</el-button>
    </div>
  </el-dialog>

  <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="20%">
    <span>确认要删除吗？</span>
    <span slot="footer" class="dialog-footer">
      <el-button style="color: black;background-color: white;" @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="remove">确 定</el-button>
    </span>
  </el-dialog>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import MixinItem from '../Mixins/Mixins'

export default {
//import引入的组件需要注入到对象中才能使用
name:"article",
components: {},
mixins:[MixinItem],
inject:["reload"],
data() {
//这里存放数据
return {
  topicId:"0",
  articleList:[],
  topicList:[],
  addForm:{
    title:"",
    hint:"",
    content:"",
    tag:"",
    keyword:"",
    url:"",
    level:"",
    imageUrl:"",
    description:"",
    filesList:[],
  },
  updateForm:{
    
  },
  uptfiles:[],
  addModal:false,
  updateModal:false,
  dialogVisible:false,
  articleId:"",
  param:"",
  uploadedFile:{},
  fullscreenLoading:false,
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  handleRemove(file, fileList) {
    console.log(file, fileList);
    this.addForm.filesList = fileList;
  },
  handleChange(file, fileList){
    console.log(file, fileList);
    this.addForm.filesList = fileList;   
  },
  httpRequest(data){
    console.log(data)
    //this.addForm.filesList.push(data.file)
  },
  handleRemove2(file, fileList) {
    console.log(file, fileList);
    this.updateForm.filesList = fileList;
  },
  handleChange2(file, fileList){
    //console.log(file, fileList);   
    this.updateForm.filesList = fileList;   
  },
  httpRequest2(data){
    console.log(data)
    //this.addForm.filesList.push(data.file)
  },
  getarticleList(){
    this.$axios({
        method:"get",
        url:`${this.$ip}/v1/management/articles/${this.topicId}`        
      }).then(res => {
        if(res.data){
          let data = res.data;
          if(data.code == "E_0000_0000"){
            this.articleList = data.data;
          }else if(data.code == "E_0000_0402"){
            this.Timeoutalert()
          }else{
            this.warning(data.msg)
          }
        }
      }).catch(err => {
        console.log(err)
      })
  },
  gettopicList(){
    this.$axios({
        method:"get",
        url:`${this.$ip}/v1/management/topics`        
      }).then(res => {
        if(res.data){
          let data = res.data;
          if(data.code == "E_0000_0000"){
            this.topicList = data.data;
          }else if(data.code == "E_0000_0402"){
            console.log("登录超时！")
          }else{
            this.warning(data.msg)
          }
        }
      }).catch(err => {
        console.log(err)
      })
  },
  created(){
    if(!this.addForm.title){
      this.warning('请输入专题标题！')
    }else if((this.addForm.imageUrl != "" || this.addForm.url != "") && this.addForm.filesList.length != 0){
      this.warning('只能选择一种上传方式！')
    }else{
      var param = new FormData();
      param.append("title",this.addForm.title)
      param.append("hint",this.addForm.hint)
      param.append("content",this.addForm.content)
      param.append("tag",this.addForm.tag)
      param.append("keyword",this.addForm.keyword)
      param.append("url",this.addForm.url)
      param.append("level",this.addForm.level)
      param.append("imageUrl",this.addForm.imageUrl)
      param.append("description",this.addForm.description)
      //param.append("files",this.addForm.filesList)
      this.addForm.filesList.forEach(
        (val) => {
          param.append("files", val.raw);
        }
      );

      this.$axios({
          method:"POST",
          headers: {'Content-Type': 'multipart/form-data'},
          url:`${this.$ip}/v1/management/article/add`,
          data:param        
        }).then(res => {
          if(res.data){
            let data = res.data;
            if(data.code == "E_0000_0000"){
              this.success('上传成功！')
              this.reload()
              this.addModal = false
            }else if(data.code == "E_0000_0402"){
              this.Timeoutalert()
            }else{
              this.warning(data.msg)
            }
          }
        }).catch(err => {
          console.log(err)
        })
    }
  },
  clear(){
    this.addForm.title = "";
    this.addForm.code = "";
    this.addForm.content = "";
    this.addForm.filesList = [];
  },
  create(){
    this.addModal = true
  },
  update(row){
    console.log(row)
    this.updateForm = JSON.parse(JSON.stringify(row));
    this.updateForm.filesList = [];
    this.updateModal = true;
  },
  updateds(){
    if(!this.updateForm.title){
      this.warning('请输入专题标题！')
    }else if((this.updateForm.imageUrl != "" || this.updateForm.url != "") && this.updateForm.filesList.length != 0){
      this.warning('只能选择一种上传方式！')
    }else{
      var param = new FormData();
      param.append("articleId",this.updateForm.articleId)
      param.append("title",this.updateForm.title)
      param.append("hint",this.updateForm.hint)
      param.append("content",this.updateForm.content)
      param.append("tag",this.updateForm.tag)
      param.append("keyword",this.updateForm.keyword)
      param.append("url",this.updateForm.url)
      param.append("level",this.updateForm.level)
      param.append("imageUrl",this.updateForm.imageUrl)
      param.append("description",this.updateForm.description)
      //param.append("files",this.addForm.filesList)
      this.updateForm.filesList.forEach(
        (val) => {
          param.append("files", val.raw);
        }
      );

      this.$axios({
          method:"POST",
          headers: {'Content-Type': 'multipart/form-data'},
          url:`${this.$ip}/v1/management/article/update`,
          data:param        
        }).then(res => {
          if(res.data){
            let data = res.data;
            if(data.code == "E_0000_0000"){
              this.success('更新成功！')
              this.reload()
              this.addModal = false
            }else if(data.code == "E_0000_0402"){
              this.Timeoutalert()
            }else{
              this.warning(data.msg)
            }
          }
        }).catch(err => {
          console.log(err)
        })
    }
  },
  deleted(row){
    console.log(row)
    this.articleId = row.articleId;
    this.dialogVisible = true;
  },
  remove(){
    this.$axios({
        method:"post",
        url:`${this.$ip}/v1/management/article/remove/${this.articleId}`        
      }).then(res => {
        if(res.data){
          let data = res.data;
          if(data.code == "E_0000_0000"){
            this.success('删除成功!');
            this.dialogVisible = false;
            this.reload()
          }else if(data.code == "E_0000_0402"){
            this.Timeoutalert()
          }else{
            this.warning(data.msg)
          }
        }
      }).catch(err => {
        console.log(err)
      })
  },
  success(val) {
    this.$message({
      message: val,
      type: "success"
    });
  },
  warning(val) {
    this.$message.error(`Error：${val}`);
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
  this.getarticleList()
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
  this.gettopicList()
},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
@import '/css/article.less';
</style>