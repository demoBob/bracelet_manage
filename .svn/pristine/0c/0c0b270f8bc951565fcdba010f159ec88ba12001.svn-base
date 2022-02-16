<!--  -->
<template>
<div class='problem'>
  <div class='top'>
    <el-button type="primary" class="add_btn" @click="addModal = true">+添加问题</el-button>
    
     <el-select v-model="code" class="code">
          <el-option  label="全部" value=""></el-option>
          <el-option  label="帮助中心" value="help_center"></el-option>
          <el-option  label="在线客服" value="customer_service"></el-option>
          <el-option  label="安全驾驶" value="drive_safely"></el-option>
    </el-select>

    <div class="keyword">
      关键字：<el-input type="text" v-model="keyword"/>
      <el-button type="primary" @click="getQuestionList" class="seach">查  询</el-button>
    </div>

    <el-button type="primary" class="helpbtn" @click="helpClick">帮助中心标签</el-button>
  </div>
  

<el-dialog title="添加问题" :visible.sync="addModal">
  <el-form :model="addForm" label-width="200px">
    <el-form-item label="问题" >
      <el-input v-model="addForm.question" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="答案内容">
      <el-input v-model="addForm.answerContent" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="答案内容类型">
      <el-select v-model="addForm.answerType" placeholder="请选择">
        <el-option label="文本" value="text"></el-option>
        <el-option label="链接地址" value="url"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="问题标签" >
      <el-input v-model="addForm.tag" autocomplete="off"></el-input>(多个标签用英文逗号隔开)
    </el-form-item>
    <el-form-item label="问题分类" class="demo-form-inline">
      <table>
        <tr>
          <td>
            <el-checkbox label="help_center" v-model="addForm.data1.type">帮助中心</el-checkbox>
          </td>
          <td>
              <el-form-item label="在所属分类中的排序">
                <el-input v-model="addForm.data1.sort" autocomplete="off" class="listinput"></el-input>
              </el-form-item>
          </td>
          <td>
            <el-form-item label="是否在手环App默认展示">
              <el-select v-model="addForm.data1.defaultDisplay" placeholder="请选择">
                <el-option label="展示" value="1"></el-option>
                <el-option label="不展示" value="0"></el-option>
              </el-select>
            </el-form-item>
          </td>
        </tr>
        <tr>
          <td>
            <el-checkbox label="customer_service" v-model="addForm.data2.type">在线客服</el-checkbox>
          </td>
          <td>
              <el-form-item label="在所属分类中的排序">
                <el-input v-model="addForm.data2.sort" autocomplete="off" class="listinput"></el-input>
              </el-form-item>
          </td>
          <td>
            <el-form-item label="是否在手环App默认展示">
              <el-select v-model="addForm.data2.defaultDisplay" placeholder="请选择">
                <el-option label="展示" value="1"></el-option>
                <el-option label="不展示" value="0"></el-option>
              </el-select>
            </el-form-item>
          </td>
        </tr>
        <tr>
          <td>
            <el-checkbox label="drive_safely" v-model="addForm.data3.type">安全驾驶</el-checkbox>
          </td>
           <td>
              <el-form-item label="在所属分类中的排序">
                <el-input v-model="addForm.data3.sort" autocomplete="off" class="listinput"></el-input>
              </el-form-item>
          </td>
          <td>
            <el-form-item label="是否在手环App默认展示">
              <el-select v-model="addForm.data3.defaultDisplay" placeholder="请选择">
                <el-option label="展示" value="1"></el-option>
                <el-option label="不展示" value="0"></el-option>
              </el-select>
            </el-form-item>
          </td>
        </tr>
      </table>
      
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="addModal = false" style="background-color:white;color:black;" class="btn">取 消</el-button>
    <el-button type="primary" @click="addQuestion" class="btn">确 定</el-button>
  </div>
</el-dialog>

<el-dialog title="更新问题" :visible.sync="updateModal">
  <el-form :model="updateForm" label-width="200px">
    <el-form-item label="问题">
      <el-input v-model="updateForm.question" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="答案内容">
      <el-input v-model="updateForm.answerContent" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="答案内容类型">
      <el-select v-model="updateForm.answerType" placeholder="请选择">
        <el-option label="文本" value="text"></el-option>
        <el-option label="链接地址" value="url"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="问题标签" >
      <el-input v-model="updateForm.tag" autocomplete="off"></el-input>(多个标签用英文逗号隔开)
    </el-form-item>
    <el-form-item label="问题分类" class="demo-form-inline">
      <table>
        <tr>
          <td>
            <el-checkbox label="help_center" v-model="updateForm.data1.type">帮助中心</el-checkbox>
          </td>
          <td>
              <el-form-item label="在所属分类中的排序">
                <el-input v-model="updateForm.data1.sort" autocomplete="off" class="listinput"></el-input>
              </el-form-item>
          </td>
          <td>
            <el-form-item label="是否在手环App默认展示">
              <el-select v-model="updateForm.data1.defaultDisplay" placeholder="请选择">
                <el-option label="展示" value="1"></el-option>
                <el-option label="不展示" value="0"></el-option>
              </el-select>
            </el-form-item>
          </td>
        </tr>
        <tr>
          <td>
            <el-checkbox label="customer_service" v-model="updateForm.data2.type">在线客服</el-checkbox>
          </td>
          <td>
              <el-form-item label="在所属分类中的排序">
                <el-input v-model="updateForm.data2.sort" autocomplete="off" class="listinput"></el-input>
              </el-form-item>
          </td>
          <td>
            <el-form-item label="是否在手环App默认展示">
              <el-select v-model="updateForm.data2.defaultDisplay" placeholder="请选择">
                <el-option label="展示" value="1"></el-option>
                <el-option label="不展示" value="0"></el-option>
              </el-select>
            </el-form-item>
          </td>
        </tr>
        <tr>
          <td>
            <el-checkbox label="drive_safely" v-model="updateForm.data3.type">安全驾驶</el-checkbox>
          </td>
           <td>
              <el-form-item label="在所属分类中的排序">
                <el-input v-model="updateForm.data3.sort" autocomplete="off" class="listinput"></el-input>
              </el-form-item>
          </td>
          <td>
            <el-form-item label="是否在手环App默认展示">
              <el-select v-model="updateForm.data3.defaultDisplay" placeholder="请选择">
                <el-option label="展示" value="1"></el-option>
                <el-option label="不展示" value="0"></el-option>
              </el-select>
            </el-form-item>
          </td>
        </tr>
      </table>
      
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="updateModal = false" style="background-color:white;color:black;" class="btn">取 消</el-button>
    <el-button type="primary" @click="updateQuestion" class="btn">确 定</el-button>
  </div>
</el-dialog>

<div class='listTable'>
  <el-table :data="problemList" height="760" border style="width:100%" header-cell-class-name="headerRow">
    <el-table-column prop="question" label="问题"></el-table-column>
    <el-table-column prop="answerContent" label="答案内容"></el-table-column>
    <el-table-column prop="answerType" :formatter="formatAnswerType" label="答案内容类型" width="180"></el-table-column>
    <el-table-column prop="tag" label="问题标签" width="180"></el-table-column>
    <el-table-column prop="createdTime" label="创建时间" width="180"></el-table-column>
    <el-table-column prop="updatedTime" label="更新时间" width="180"></el-table-column>
    <el-table-column label="问题所属" prop="categories" width="350" class="special">
      <template slot-scope="scope">
      <el-table :data="scope.row.categories" style="width:100%;">
        <el-table-column 
        prop="type"
        label="类型"
        width="120" :formatter="formatType">
      </el-table-column>
      <el-table-column
        prop="sort"
        label="排序"
        width="80">
      </el-table-column>
      <el-table-column
        prop="defaultDisplay"
        label="是否在app中展示"
        width="" :formatter="formatDisplay">
      </el-table-column>
      </el-table>
      </template>
       
    </el-table-column>
    <el-table-column prop="name" label="操作" width="180">
       <template slot-scope="scope">
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

  <el-pagination
      style="font-szie:16px;"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageNum"
      :page-sizes="[10, 20, 50, 100, 200]"
      :page-size="pageSize"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
</div>

  <el-dialog
  title="删除问题"
  :visible.sync="deleteModal"
  width="20%">
    <span>确认要删除该问题吗？</span>
    <span slot="footer" class="dialog-footer">
      <el-button style="color: black;background-color: white;" @click="deleteModal = false">取 消</el-button>
      <el-button type="primary" @click="remove">确 定</el-button>
    </span>
  </el-dialog>

<el-dialog title="帮助中心标签" :visible.sync="helpModal">
  <el-form :model="helpForm">
    <el-form-item label="问题标签:" :label-width="formLabelWidth">
      <el-card class="box-card">
      <el-input v-model="tagList" autocomplete="off" type="textarea" readonly="readonly"></el-input>  
      </el-card>
    </el-form-item>
    <el-form-item label="更新问题标签" :label-width="formLabelWidth">
      <el-input v-model="helpForm.tag" autocomplete="off" type="textarea"></el-input>
    </el-form-item>
  </el-form>
  <el-dialog
      width="30%"
      title="更新帮助中心标签"
      :visible.sync="innerhelpModal"
      append-to-body>
      <span>确定要更新帮助中心标签吗？注意:你提交的标签将直接全部替换已存在的标签</span>
      <div slot="footer" class="dialog-footer" style="text-align:center;">
        <el-button @click="innerhelpModal=false" class="btn" style="background-color:white;color:black;">取 消</el-button>
        <el-button type="primary" @click="updateTag" class="btn">确  定</el-button>
      </div>
    </el-dialog>
  <div slot="footer" class="dialog-footer" style="text-align:center;">
    <!-- <el-button @click="dialogFormVisible = false" class="btn" style="background-color:white;color:black;">取 消</el-button> -->
    <el-button type="primary" @click="innerhelpModal=true" class="btn">更   新</el-button>
  </div>
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
data() {
//这里存放数据
return {
  code:"",
  keyword:"",
  addModal: false,
  updateModal: false,
  helpModal: false,
  innerhelpModal: false,
  deleteModal: false,
  answerId:"",
  pageNum:  1,
  pageSize: 10,
  total: 0,
  addForm: {
          question: '',
          answerContent: '',
          answerType: '',
          tag: '',
          data1:{
              type: false,//'help_center',
              sort: 0,
              defaultDisplay: "1"
          },
          data2:{
              type: false,//'customer_service',
              sort: 0,
              defaultDisplay: "1"
          },
          data3:{
              type: false,//'drive_safely',
              sort: 0,
              defaultDisplay: "1"
          },
          categories:[],
        },
  updateForm: {
         question: '',
          answerContent: '',
          answerType: '',
          tag: '',
          data1:{
              type: false,//'help_center',
              sort: 0,
              defaultDisplay: "1"
          },
          data2:{
              type: false,//'customer_service',
              sort: 0,
              defaultDisplay: "1"
          },
          data3:{
              type: false,//'drive_safely',
              sort: 0,
              defaultDisplay: "1"
          },
          categories:[],
        },
  helpForm:{
    tag:""
  },
  formLabelWidth: '200px',
  checkList: [''],
  problemData:{},
  problemList:[],
  tagList:""
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  addQuestion(){
      this.addForm.categories = [];
      if(this.addForm.question==""||this.addForm.question==null){
        this.warning("请输入问题！");
        return;
      }else if(this.addForm.answerContent==""||this.addForm.answerContent==null){
        this.warning("请输入答案内容！");
        return;
      }else if(this.addForm.answerType==""||this.addForm.answerType==null){
        this.warning("请选择答案内容类型！");
        return;
      }else if(this.addForm.tag==""||this.addForm.tag==null){
        this.warning("请输入问题标签！");
        return;
      }

      if(!this.addForm.question){
        this.warning('请输入问题！');
        return;
      }else if(!this.addForm.answerContent){
        this.warning('请输入答案内容！');
        return;
      }else if(!this.addForm.answerType){
        this.warning('请选择答案内容类型！');
        return;
      }else if(!this.addForm.tag){
        this.warning('请输入问题标签！');
        return;
      }else if(this.addForm.data1.type==false&&this.addForm.data2.type==false&&this.addForm.data3.type==false){
        this.warning("问题分类至少应选择一个！");
        return;
      }
      if(this.addForm.data1.type==true){
        let data1 = Object.assign({}, this.addForm.data1);
        data1.type="help_center";
        if(data1.sort==null||data1.sort==""){
          this.warning("已被选择的问题分类中的排序不能为空!");
          return;
        }else{
          this.addForm.categories.push(data1);
        }
      }

      if(this.addForm.data2.type==true){
        let data2 = Object.assign({}, this.addForm.data2);
        data2.type ="customer_service";
        if(data2.sort==null||data2.sort==""){
          this.warning("已被选择的问题分类中的排序不能为空!");
          return;
        }else{
          this.addForm.categories.push(data2);
        }
      }

      if(this.addForm.data3.type==true){
        let data3 = Object.assign({}, this.addForm.data3);
        data3.type="drive_safely";
        if(data3.sort==null||data3.sort==""){
          this.warning("已被选择的问题分类中的排序不能为空!");
          return;
        }else{
          this.addForm.categories.push(data3);
        }
      }

      console.log("categories",this.addForm.categories);

      this.$axios({
        method:"POST",
        url:`${this.$ip}/v1/management/questions/add`,
        data:{
          question: this.addForm.question,
          answerContent: this.addForm.answerContent,
          answerType: this.addForm.answerType,
          tag: this.addForm.tag,
          categories:this.addForm.categories
        }        
      }).then(res => {
        if(res.data){
          let data = res.data;
          if(data.code == "E_0000_0000"){
            this.success('添加成功！')
            this.addModal = false;
            this.getQuestionList();
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
  getQuestionList(){
    this.$axios({
        method:"get",
        url:`${this.$ip}/v1/management/questions/list?type=${this.code}&keyword=${this.keyword}&pageNum=${this.pageNum}&pageSize=${this.pageSize}`        
      }).then(res => {
        if(res.data){
          let data = res.data;
          console.log("problemData",data);
          if(data.code == "E_0000_0000"){
            this.problemData = data.data;
            this.problemList = data.data.list;
            this.total = data.data.total;
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
  updateQuestion(){
      this.updateForm.categories = [];
      if(this.updateForm.question==""||this.updateForm.question==null){
        this.warning("请输入问题！");
        return;
      }else if(this.updateForm.answerContent==""||this.updateForm.answerContent==null){
        this.warning("请输入答案内容！");
        return;
      }else if(this.updateForm.answerType==""||this.updateForm.answerType==null){
        this.warning("请选择答案内容类型！");
        return;
      }else if(this.updateForm.tag==""||this.updateForm.tag==null){
        this.warning("请输入问题标签！");
        return;
      }

      if(this.updateForm.data1.type==false&&this.updateForm.data2.type==false&&this.updateForm.data3.type==false){
        this.warning("问题分类至少应选择一个！");
        return;
      }
      if(this.updateForm.data1.type==true){
        let data1 = Object.assign({}, this.updateForm.data1);
        data1.type="help_center";
        if(data1.sort==null||data1.sort==""){
          this.warning("已被选择的问题分类中的排序不能为空!");
          return;
        }else{
          if(data1.defaultDisplay=="展示"){
            data1.defaultDisplay=1;
          }else if(data1.defaultDisplay=="不展示"){
            data1.defaultDisplay=0;
          }
          this.updateForm.categories.push(data1);
        }
      }

      if(this.updateForm.data2.type==true){
        let data2 = Object.assign({}, this.updateForm.data2);
        data2.type ="customer_service";
        if(data2.sort==null||data2.sort==""){
          this.warning("已被选择的问题分类中的排序不能为空!");
          return;
        }else{
          if(data2.defaultDisplay=="展示"){
            data2.defaultDisplay=1;
          }else if(data2.defaultDisplay=="不展示"){
            data2.defaultDisplay=0;
          }
          this.updateForm.categories.push(data2);
        }
      }

      if(this.updateForm.data3.type==true){
        let data3 = Object.assign({}, this.updateForm.data3);
        data3.type="drive_safely";
        if(data3.sort==null||data3.sort==""){
          this.warning("已被选择的问题分类中的排序不能为空!");
          return;
        }else{
          if(data3.defaultDisplay=="展示"){
            data3.defaultDisplay=1;
          }else if(data3.defaultDisplay=="不展示"){
            data3.defaultDisplay=0;
          }
          this.updateForm.categories.push(data3);
        }
      }

      console.log("update categories",JSON.parse(JSON.stringify(this.updateForm.categories)));

      this.$axios({
        method:"POST",
        url:`${this.$ip}/v1/management/questions/update`,
        data:{
          answerId: this.answerId,
          question: this.updateForm.question,
          answerContent: this.updateForm.answerContent,
          answerType: this.updateForm.answerType,
          tag: this.updateForm.tag,
          categories:JSON.parse(JSON.stringify(this.updateForm.categories))
        }        
      }).then(res => {
        if(res.data){
          let data = res.data;
          if(data.code == "E_0000_0000"){
            this.success('添加成功！')
            this.updateModal = false;
            this.getQuestionList();
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
  helpClick(){
    this.helpModal = true;
  },
  getTags(){
    this.$axios({
        method:"get",
        url:`${this.$ip}/v1/management/questions/tags`        
      }).then(res => {
        if(res.data){
          let data = res.data;
          if(data.code == "E_0000_0000"){
            this.tagList = data.data;
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
  updateTag(){
    if(this.helpForm.tag==""||this.helpForm.tag==null){
      this.warning("请输入问题标签！");
      return;
    }
    this.$axios({
        method:"POST",
        url:`${this.$ip}/v1/management/questions/tags/modify`,
        data:{
          tag: this.helpForm.tag
        }   
      }).then(res => {
        if(res.data){
          let data = res.data;
          if(data.code == "E_0000_0000"){
            this.success("帮助中心标签更新成功！");
            this.getTags();
            //this.tagList = data.data;
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
    this.answerId = row.answerId;
    this.updateForm = JSON.parse(JSON.stringify(row));
    this.updateForm.data1={};
    this.updateForm.data2={};
    this.updateForm.data3={};
    for(let i = 0;i<row.categories.length;i++){
        if(row.categories[i].type=="help_center"){
          //this.updateForm.data1= JSON.parse(JSON.stringify(row.categories[i]));
          //this.updateForm.data1= JSON.parse(JSON.stringify(row.categories[i]));
          this.updateForm.data1= row.categories[i];
          this.updateForm.data1.type = true;
          if(this.updateForm.data1.defaultDisplay == 1){
            this.updateForm.data1.defaultDisplay = "展示";
          }else{
            this.updateForm.data1.defaultDisplay = "不展示";
          }
        }

        if(row.categories[i].type=="customer_service"){
          //this.updateForm.data2= JSON.parse(JSON.stringify(row.categories[i]));
          this.updateForm.data2=row.categories[i];
          this.updateForm.data2.type = true;
          if(this.updateForm.data2.defaultDisplay == 1){
            this.updateForm.data2.defaultDisplay = "展示";
          }else{
            this.updateForm.data2.defaultDisplay = "不展示";
          }
        }

        if(row.categories[i].type=="drive_safely"){
          //this.updateForm.data3= JSON.parse(JSON.stringify(row.categories[i]));
          this.updateForm.data3= row.categories[i];
          this.updateForm.data3.type = true;
          if(this.updateForm.data3.defaultDisplay == 1){
            this.updateForm.data3.defaultDisplay = "展示";
          }else{
            this.updateForm.data3.defaultDisplay = "不展示";
          }
        }
    
    }
    
    console.log("updateForm",this.updateForm);
    //this.updateForm = JSON.parse(JSON.stringify(row));
    this.updateModal = true;
  },
  deleted(row){
    console.log("deleted row",row);
    this.answerId = row.answerId;
    this.deleteModal = true;
  },
  remove(){
    this.$axios({
        method:"post",
        url:`${this.$ip}/v1/management/questions/remove/${this.answerId}`        
      }).then(res => {
        if(res.data){
          let data = res.data;
          if(data.code == "E_0000_0000"){
            this.success('删除成功!');
            this.deleteModal = false;
            this.getQuestionList();
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
  handleSizeChange(val){
    this.pageSize = val;
    console.log("sizeChange",val);
    this.getQuestionList();
  },
  handleCurrentChange(val){
    this.pageNum = val;
    console.log("currentChange",val);
    this.getQuestionList();
  },
  formatType(val){
    return val.type == 'help_center' ? '帮助中心' : val.type == 'customer_service' ? '在线客服' : val.type == 'drive_safely' ? '安全驾驶': '';
  },
  formatDisplay(val){
    return val.defaultDisplay == 1 ? '展示' : '不展示';
  },
  formatAnswerType(val){
    return val.answerType == 'text' ? '文本' : val.answerType == 'url' ? '链接地址' : '';
  },
  // objectSpanMethod({ row, column, rowIndex, columnIndex }) {
  //   console.log(row, column, rowIndex, columnIndex);
  //   if (columnIndex === 0||columnIndex === 1||columnIndex === 2||columnIndex === 3||columnIndex === 4||columnIndex === 5||columnIndex === 9) {
  //     if (rowIndex % row.categories.length === 0) {
  //       return {
  //         rowspan: 2,
  //         colspan: 1
  //       };
  //     } else {
  //       return {
  //         rowspan: 0,
  //         colspan: 0
  //       };
  //     }
  //   }
  // },
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
  this.getTags();
  this.getQuestionList();
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
@import '/css/problem.less';
</style>