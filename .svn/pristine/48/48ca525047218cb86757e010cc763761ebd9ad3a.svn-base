<!--  -->
<template>
<div class='fixed_phrase'>
  <div class="top">
    <el-button type="primary" @click="addPhrase">+添加固定短语</el-button>
    <el-select v-model="code" class="code" placeholder="全部" @change="getphraseList">
        <el-option  label="全部" value=""></el-option>
        <el-option  label="饮酒前与饮酒后心率数据对比分析" value="0001"></el-option>
        <el-option  label="饮酒前与饮酒后血氧饱和度数据对比分析" value="0002"></el-option>
        <el-option  label="饮酒前与饮酒后睡眠数据对比分析" value="0003"></el-option>
        <el-option  label="酒驾醉驾处罚标准" value="0004"></el-option>
        <el-option  label="路卡客服第一次自动回复提示语" value="0005"></el-option>
        <el-option  label="路卡客服关键字问题自动回复提示语" value="0006"></el-option>
    </el-select>
  </div>



<div class="listTable">
  <el-table
      :data="phraseList"
      header-cell-class-name="headerRow"
      border
      style="width: 100%"
      max-height="650">
      <el-table-column
        prop="fixedContentId"
        label="固定内容ID"
        >
      </el-table-column>
      <el-table-column
        prop="code"
        label="内容编码"
        >
      </el-table-column>
      <el-table-column
        prop="content"
        label="内容">
      </el-table-column>
       <el-table-column
        prop="description"
        label="描述">
      </el-table-column>
      <el-table-column
        prop="createdTime"
        label="创建时间">
      </el-table-column>
      <el-table-column
        prop="updatedTime"
        label="更新时间">
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

<el-dialog title="添加固定短语" :visible.sync="addPhraseModal" :close-on-click-modal="false" center>
  <el-form ref="addForm" label-position="right" label-width="100px">
    <el-form-item label="内容类型">
      <el-select v-model="addForm.code" placeholder="请选择内容类型">
        <el-option label="饮酒前与饮酒后心率数据对比分析" value="0001"></el-option>
        <el-option label="饮酒前与饮酒后血氧饱和度数据对比分析" value="0002"></el-option>
        <el-option label="饮酒前与饮酒后睡眠数据对比分析" value="0003"></el-option>
        <el-option label="酒驾醉驾处罚标准" value="0004"></el-option>
        <el-option label="路卡客服第一次自动回复提示语" value="0005"></el-option>
        <el-option label="路卡客服关键字问题自动回复提示语" value="0006"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="内容">
      <el-input v-model="addForm.content" type="textarea" autocomplete="off" maxlength="2000"></el-input>
    </el-form-item>
    <el-form-item label="描述">
      <el-input v-model="addForm.description" type="textarea" autocomplete="off" maxlength="500"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <!-- <el-button @click="dialogFormVisible = false" class="btn" style="color:white;">取 消</el-button> -->
    <el-button type="primary" @click="addSubmit" class="btn">提  交</el-button>
  </div>
</el-dialog>

<el-dialog title="更新固定短语" :visible.sync="updatePhraseModal" :close-on-click-modal="false" center>
  <el-form ref="addForm" label-position="right" label-width="100px">
    <el-form-item label="内容类型">
      <el-select v-model="updateForm.code" placeholder="请选择内容类型">
        <el-option label="饮酒前与饮酒后心率数据对比分析" value="0001"></el-option>
        <el-option label="饮酒前与饮酒后血氧饱和度数据对比分析" value="0002"></el-option>
        <el-option label="饮酒前与饮酒后睡眠数据对比分析" value="0003"></el-option>
        <el-option label="酒驾醉驾处罚标准" value="0004"></el-option>
        <el-option label="路卡客服第一次自动回复提示语" value="0005"></el-option>
        <el-option label="路卡客服关键字问题自动回复提示语" value="0006"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="内容">
      <el-input v-model="updateForm.content" type="textarea" autocomplete="off" maxlength="2000"></el-input>
    </el-form-item>
    <el-form-item label="描述">
      <el-input v-model="updateForm.description" type="textarea" autocomplete="off" maxlength="500"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <!-- <el-button @click="dialogFormVisible = false" class="btn" style="color:white;">取 消</el-button> -->
    <el-button type="primary" @click="updateSubmit" class="btn">提   交</el-button>
  </div>
</el-dialog>

  <el-dialog
  title="删除固定短语"
  :visible.sync="deleteModal"
  width="20%">
    <span>确认要删除吗？</span>
    <span slot="footer" class="dialog-footer">
      <el-button style="color: black;background-color: white;" @click="deleteModal = false">取 消</el-button>
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
components: {},
mixins:[MixinItem],
inject:["reload"],
data() {
//这里存放数据
return {
  code:"",
  phraseList:[],
  addPhraseModal:false,
  updatePhraseModal:false,
  deleteModal:false,
  formLabelWidth:120,
  addForm:{
    code:"",
    content:"",
    description:""
  },
  updateForm:{
    code:"",
    content:"",
    description:""
  },
  fixedContentId:""
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  addPhrase(){
    this.addPhraseModal=true;
  },
  getphraseList(){
    this.$axios({
          method:"get",
          url:`${this.$ip}/v1/management/fixed_contents/list?code=${this.code}`        
        }).then(res => {
          if(res.data){
            let data = res.data;
            if(data.code == "E_0000_0000"){
              this.phraseList = data.data;
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
  addSubmit(){
    if(this.addForm.code==""||this.addForm.code==null){
      this.warning("请选择内容类型！");
      return;
    }else if(this.addForm.content==""||this.addForm.content==null){
      this.warning("请输入内容！");
      return;
    }else if(this.addForm.description==""||this.addForm.description==null){
      this.warning("请输入描述！");
      return;
    }

    this.$axios({
        method:"POST",
        url:`${this.$ip}/v1/management/fixed_contents/add`,
        data:{
          code: this.addForm.code,
          content: this.addForm.content,
          description: this.addForm.description
        }        
      }).then(res => {
        if(res.data){
          let data = res.data;
          if(data.code == "E_0000_0000"){
            this.success('添加成功！')
            this.addPhraseModal = false;
            this.getphraseList();
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
    console.log("row",JSON.parse(JSON.stringify(row)));
    this.updateForm = JSON.parse(JSON.stringify(row));
    this.updatePhraseModal = true;
  },
  updateSubmit(){
    if(this.updateForm.code==""||this.updateForm.code==null){
      this.warning("请选择内容类型！");
      return;
    }else if(this.updateForm.content==""||this.updateForm.content==null){
      this.warning("请输入内容！");
      return;
    }else if(this.updateForm.description==""||this.updateForm.description==null){
      this.warning("请输入描述！");
      return;
    }
    this.$axios({
        method:"POST",
        url:`${this.$ip}/v1/management/fixed_contents/update`,
        data:{
          fixedContentId: this.updateForm.fixedContentId,
          code: this.updateForm.code,
          content: this.updateForm.content,
          description: this.updateForm.description
        }        
      }).then(res => {
        if(res.data){
          let data = res.data;
          if(data.code == "E_0000_0000"){
            this.success('更新成功！')
            this.updatePhraseModal = false;
            this.getphraseList();
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
  deleted(row){
    console.log("deleted row",row);
    this.fixedContentId = row.fixedContentId;
    this.deleteModal = true;
  },
  remove(){
    this.$axios({
        method:"post",
        url:`${this.$ip}/v1/management/fixed_contents/remove/${this.fixedContentId}`        
      }).then(res => {
        if(res.data){
          let data = res.data;
          if(data.code == "E_0000_0000"){
            this.success('删除成功!');
            this.deleteModal = false;
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
  this.getphraseList();
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

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
@import '/css/fixed_phrase.less';
</style>