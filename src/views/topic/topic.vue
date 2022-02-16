<!--  -->
<template>
<div class='topic'>
  <div class="top">
    <el-button type="primary" @click="create">+添加专题</el-button>
    <div class="code">
      位置编码：<el-input type="text" v-model="locationCode" />
      <el-button type="primary" @click="seach" class="seach">查  询</el-button>
    </div>
    
  </div>
  <div class="listTable">
      <el-table
      :data="topicList"
      header-cell-class-name="headerRow"
      border
      style="width: 100%"
      max-height="650">
      <el-table-column
        prop="topicId"
        label="专题ID"
        width="130"
        >
      </el-table-column>
      <el-table-column
        prop="title"
        label="专题标题"
        >
      </el-table-column>
      <el-table-column
        prop="locationCode"
        label="专题位置编码">
      </el-table-column>
       <el-table-column
        prop="locationName"
        label="专题位置名字">
      </el-table-column>
      <el-table-column
        prop="level"
        label="权重">
      </el-table-column>
      <el-table-column
        prop="createdTime"
        label="创建时间">
      </el-table-column>
       <el-table-column
        label="专题图片">
        <template slot-scope="scope">        
          <img :src="scope.row.imageUrl" v-if="scope.row.imageUrl != ''" />
          <div v-else>无</div>         
        </template>
      </el-table-column>
      <el-table-column
        prop="updatedTime"
        label="修改时间">
      </el-table-column>
       <el-table-column
        label="操作" width="250">
        <template slot-scope="scope">
          <el-button  @click="editArticle(scope.row)" type="text" size="small">
            <i class="el-icon-edit"></i>
            编辑文章
          </el-button>
          <el-button  @click="update(scope.row)" type="text" size="small">
            <i class="el-icon-edit"></i>
            更新
          </el-button>
          <el-button  @click="deleted(scope.row)" type="text" size="small" style="color:#f56c6c;">
            <i class="el-icon-delete"></i>
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

  <el-dialog title="添加专题" :visible.sync="addModal" :close-on-click-modal="false"  center>
    <el-form  ref="addForm"  label-position="right" label-width="150px" >
      <el-form-item label="专题标题：">
        <el-input v-model="addForm.title" placeholder="请输入专题标题"></el-input>
      </el-form-item>
      <el-form-item label="专题放置位置：" >
        <el-select v-model="addForm.locationCode"  placeholder="请选择">
          <el-option v-for="(item,index) in locationsList" :key="index"  :label="item.locationName" :value="item.locationCode"></el-option>
        </el-select>
      </el-form-item>   
      <el-form-item label="权重：">
        <el-input v-model="addForm.level" placeholder="1(默认值)"></el-input>
      </el-form-item>               
      <el-form-item label="专题图片URL：">
          <el-input  v-model="addForm.imageUrl" placeholder="手动输入图片链接"></el-input>
      </el-form-item>
      <el-form-item label="专题图片：">
          <el-upload
            action="#"
            list-type="picture-card"
            :on-remove="handleRemove"
            accept=".jpg,.jpeg,.png"
            :on-exceed="handleExceed"
            :limit="1"
            :http-request="httpRequest">
            <i class="el-icon-plus"></i>
          </el-upload>
      </el-form-item>
    </el-form>
    <div slot="footer" class="sure">
      <el-button type="primary" @click="created" class="btn">提 交</el-button>
    </div>
  </el-dialog>

  <el-dialog title="更新专题" :visible.sync="updateModal" :close-on-click-modal="false"  center>
    <el-form  ref="addForm"  label-position="right" label-width="150px" >
      <el-form-item label="专题标题：">
        <el-input v-model="updateForm.title" placeholder="请输入专题标题"></el-input>
      </el-form-item>
      <el-form-item label="专题放置位置：">
        <el-select v-model="updateForm.locationCode"  placeholder="请选择">
          <el-option v-for="(item,index) in locationsList" :key="index"  :label="item.locationName" :value="item.locationCode"></el-option>
        </el-select>
      </el-form-item>   
      <el-form-item label="权重：">
        <el-input v-model="updateForm.level" placeholder="1(默认值)"></el-input>
      </el-form-item>               
      <el-form-item label="专题图片URL：">
          <el-input  v-model="updateForm.imageUrl" placeholder="手动输入图片链接"></el-input>
      </el-form-item>
      <el-form-item label="专题图片：">
          <el-upload
            action="#"
            list-type="picture-card"
            :on-remove="handleRemove2"
            accept=".jpg,.jpeg,.png"
            :on-exceed="handleExceed2"
            :file-list="updateForm.fileList"
            :limit="1"
            :http-request="httpRequest2">
            <i class="el-icon-plus"></i>
          </el-upload>
      </el-form-item>
    </el-form>
    <div slot="footer" class="sure">
      <el-button type="primary" @click="updateds" class="btn">更 新</el-button>
    </div>
  </el-dialog>
  <el-dialog title="编辑文章" :visible.sync="editModal" width="80%" center>
    <div class="table">
      <div class="header"><span>未被本专题添加的文章列表</span><el-button type="primary" @click="addArticles(tableChecked)" class="btn">批量添加</el-button></div>
      <el-table
      :data="notarticlesList"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
      max-height="350">
      <el-table-column
        type="selection"
        width="55"
        label="全选">
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
        label="链接URL">
      </el-table-column>
      <el-table-column
        prop="level"
        label="权重"
        width="100">
      </el-table-column>
      <el-table-column
        label="文章图片">
        <template slot-scope="scope">        
          <img class="articleimg" :src="scope.row.imageUrl" v-if="scope.row.imageUrl != ''" />
          <div v-else>无</div>         
        </template>
      </el-table-column>
       <el-table-column
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button  style="background-color: white;" @click="addArticle(scope.row)"  size="small" >添 加</el-button>
        </template>
      </el-table-column>
    </el-table>
    </div>
    <div class="table">
        <div class="header haved"><span>本专题添加过的文章列表</span><el-button type="primary" @click="delArticles(deltableChecked)" class="btn">批量删除</el-button></div>
        <el-table
        :data="articlesList"
        border
        style="width: 100%"
        @selection-change="handleSelectionChange2"
        max-height="350">
        <el-table-column
          type="selection"
          width="55"
          label="全选">
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
          label="链接URL">
        </el-table-column>
        <el-table-column
          prop="level"
          label="权重"
          width="100">
        </el-table-column>
        <el-table-column
          label="文章图片">
          <template slot-scope="scope">        
            <img class="articleimg" :src="scope.row.imageUrl" v-if="scope.row.imageUrl != ''" />
            <div v-else>无</div>         
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button  style="background-color: white;" @click="delArticle(scope.row)"  size="small" >删 除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-dialog>

  <el-dialog
  title="删除专题"
  :visible.sync="dialogVisible"
  width="20%">
    <span>确认要删除专题吗？</span>
    <span slot="footer" class="dialog-footer">
      <el-button style="color: black;background-color: white;" @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="remove">确 定</el-button>
    </span>
  </el-dialog>
  <el-dialog
  title="删除文章"
  :visible.sync="deldialogVisible"
  width="20%">
    <span>确认要删除文章吗？</span>
    <span slot="footer" class="dialog-footer">
      <el-button style="color: black;background-color: white;" @click="deldialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="deled">确 定</el-button>
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
components: {},
mixins:[MixinItem],
inject:["reload"],
data() {
//这里存放数据
return {
  topicList:[],
  locationCode:"",
  dialogVisible:false,
  addModal:false,
  addForm:{
    title:"",
    locationCode:"",
    level:"",
    imageUrl:"",
    file:{}
  },
  updateForm:{
    title:"",
    locationCode:"",
    level:"",
    imageUrl:"",
    file:{}
  },
  locationsList:[],
  topicId:"",
  updateModal:false,
  editModal:false,
  tableChecked:[],
  articleIds:[],
  notarticlesList:[],
  deltableChecked:[],
  delarticleIds:[],
  articlesList:[],
  deldialogVisible:false,
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
    this.addForm.file = {}
  },
  httpRequest(data){
    console.log(data.file)
    this.addForm.file = data.file;
  },
  handleExceed() {
    this.warning('当前限制选择1个文件');
  },
  handleRemove2(file, fileList) {
    console.log(file, fileList);
    this.updateForm.file = {}
  },
  httpRequest2(data){
    console.log(data.file)
    this.updateForm.file = data.file;
  },
  handleExceed2() {
    this.warning('当前限制选择1个文件');
  },
  handleSelectionChange(val){
    this.tableChecked = val;
    console.log("handleSelectionChange--",this.tableChecked)
  },
  handleSelectionChange2(val){
    this.deltableChecked = val;
    console.log("handleSelectionChange--",this.deltableChecked)
  },
  gettopicList(){
    this.$axios({
        method:"get",
        url:`${this.$ip}/v1/management/topics?locationCode=${this.locationCode}`        
      }).then(res => {
        if(res.data){
          let data = res.data;
          if(data.code == "E_0000_0000"){
            this.topicList = data.data;
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
  getnotarticlesList(){
    this.$axios({
        method:"get",
        url:`${this.$ip}/v1/management/articles/not/${this.topicId}`        
      }).then(res => {
        if(res.data){
          let data = res.data;
          if(data.code == "E_0000_0000"){
            this.notarticlesList = data.data;
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
  getarticlesList(){
    this.$axios({
        method:"get",
        url:`${this.$ip}/v1/management/articles/${this.topicId}`        
      }).then(res => {
        if(res.data){
          let data = res.data;
          if(data.code == "E_0000_0000"){
            this.articlesList = data.data;
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
  getlocationsList(){
    this.$axios({
        method:"get",
        url:`${this.$ip}/v1/management/locations`        
      }).then(res => {
        if(res.data){
          let data = res.data;
          if(data.code == "E_0000_0000"){
            this.locationsList = data.data;
          }else if(data.code == "E_0000_0402"){
            console.log('登录超时！')
          }else{
            this.warning(data.msg)
          }
        }
      }).catch(err => {
        console.log(err)
      })
  },
  create(){
    console.log('test')
    this.addModal = true;
  },
  created(){
    if(!this.addForm.title){
      this.warning('请输入专题标题！')
    }else if(!this.addForm.locationCode){
      this.warning('请选择专题放置位置！')
    }else if(this.addForm.imageUrl != "" && this.addForm.file?.name){
      this.warning('只能选择一种上传方式！')
    }else{
      var param = new FormData();
      param.append("title",this.addForm.title)
      param.append("locationCode",this.addForm.locationCode)
      param.append("level",this.addForm.level)
      param.append("imageUrl",this.addForm.imageUrl)
      param.append("file",this.addForm.file)

      this.$axios({
          method:"POST",
          headers: {'Content-Type': 'multipart/form-data'},
          url:`${this.$ip}/v1/management/topic/add`,
          data:param        
        }).then(res => {
          if(res.data){
            let data = res.data;
            if(data.code == "E_0000_0000"){
              this.success('添加成功！')
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
  seach(){
    this.gettopicList()
  },
  editArticle(row){
    this.topicId = row.topicId;
    this.editModal = true;
    this.getnotarticlesList()
    this.getarticlesList()
  },
  addArticle(row){
    this.articleIds = []
    this.articleIds.push(row.articleId)
    this.added()
  },
  addArticles(row){
    this.articleIds = []
    if(this.tableChecked.length === 0){
      this.warning("请选择")
    }else{            
      row.forEach(element => {
        this.articleIds.push(element.articleId)
      });
      this.added()                            
    }
  },
  added(){
     this.$axios({
        method:"post",
        url:`${this.$ip}/v1/management/topic/articles/bind`,
        data:{
          topicId:this.topicId,
          articleIds:this.articleIds
        }        
      }).then(res => {
        if(res.data){
          let data = res.data;
          if(data.code == "E_0000_0000"){
            this.success('添加成功!');
            this.getnotarticlesList()
            this.getarticlesList()
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
  delArticle(row){
    this.delarticleIds = []
    this.delarticleIds.push(row.articleId)
    this.deldialogVisible = true
  },
  delArticles(row){
    this.delarticleIds = []
    if(this.deltableChecked.length === 0){
      this.warning("请选择")
    }else{            
      row.forEach(element => {
        this.delarticleIds.push(element.articleId)
      });
      this.deldialogVisible = true                            
    }
  },
  deled(){
     this.$axios({
        method:"post",
        url:`${this.$ip}/v1/management/topic/articles/unbind`,
        data:{
          topicId:this.topicId,
          articleIds:this.delarticleIds
        }        
      }).then(res => {
        if(res.data){
          let data = res.data;
          if(data.code == "E_0000_0000"){
            this.success('删除成功!');
            this.deldialogVisible = false
            this.getnotarticlesList()
            this.getarticlesList()
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
  update(row){
    console.log(row)
    this.updateForm = JSON.parse(JSON.stringify(row));
    this.updateForm.file = {};
    this.updateModal = true;
  },
  updateds(){
    console.log("test")
    if(!this.updateForm.title){
      this.warning('请输入专题标题！')
    }else if(!this.updateForm.locationCode){
      this.warning('请选择专题放置位置！')
    }else if(this.updateForm.imageUrl != "" && this.updateForm.file?.name){
      this.warning('只能选择一种上传方式！')
    }else{
      var param = new FormData();
      param.append("topicId",this.updateForm.topicId)
      param.append("title",this.updateForm.title)
      param.append("locationCode",this.updateForm.locationCode)
      param.append("level",this.updateForm.level)
      param.append("imageUrl",this.updateForm.imageUrl)     
      param.append("file",this.updateForm.file)
      

      this.$axios({
          method:"POST",
          headers: {'Content-Type': 'multipart/form-data'},
          url:`${this.$ip}/v1/management/topic/update`,
          data:param        
        }).then(res => {
          if(res.data){
            let data = res.data;
            if(data.code == "E_0000_0000"){
              this.success('更新成功！')
              this.reload()
              this.updateModal = false
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
    //console.log(row)
    this.topicId = row.topicId;
    this.dialogVisible = true;
  },
  remove(){
    this.$axios({
        method:"post",
        url:`${this.$ip}/v1/management/topic/remove/${this.topicId}`        
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
  this.gettopicList()
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
  this.getlocationsList()
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
@import '/css/topic.less';
</style>