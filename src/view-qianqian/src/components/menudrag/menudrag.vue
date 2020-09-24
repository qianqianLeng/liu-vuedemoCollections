<template>
  <el-dialog @close="FnClosePop" class="w712" title="新建授权" :visible.sync="popOpen">
    <div class="drag-search">
      <div class="dis-flex">
        <el-input :disabled="leftdata[0].children.length==0" class="float-left" size="small" v-model="dragsearch" placeholder="请输入内容"></el-input>
        <el-button :disabled="leftdata[0].children.length==0" class="float-right" size="32" type="primary">搜索</el-button>
      </div>
      <div>
        <el-form :model="dragform" :rules="dragrules" ref="dragform" label-width="80px">
          <el-form-item label="角色：" prop="name">
            <el-select size="small" v-model="dragform.name" @change="getLeftTreeData" filterable placeholder="请选择">
              <el-option
                v-for="(item,index) in DragSelect"
                :key="index"
                :label="item.roleTypeName"
                :value="item.roleTypeRange">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      
    </div>
    <div class="drag-wrap">
      <div class="clearfix">
        <div class="drag-l float-left">
          <el-tree 
            v-if="leftdata[0].children.length!=0"
            ref="lefttree"
            :data="leftdata" 
            show-checkbox
            node-key="key"
            default-expand-all
            :default-checked-keys="defaultArr"
            :expand-on-click-node="false"
            :check-on-click-node="true">
          </el-tree>
          <div v-else>无数据</div>
        </div>
        <div class="drag-m float-left">
          <el-button class="m0 mb20" icon="el-icon-d-arrow-right" @click="FnleftTor" type="primary" round>左到右</el-button>
        </div>
        <!-- 右侧拖拽不能用el-tree -->
        <div ref="righttree" class="drag-r float-right">
          <ul v-if="RightMenuSelect.length!=0" class="drag-r_level1"> 
            <li v-for="(item,index) in RightMenuSelect" :key="index" 
              @mousedown="FnDragDom($event,item,item.key,index,'second'+index)"
              :ref="item.key">
              <div class="dis-flex space-between align-center">
                <div>
                  <i class="el-icon-caret-bottom"></i>
                  {{item.label}}
                </div>
                <i v-if="!item.hidden" class="el-icon-circle-close" @mousedown.stop="FndeleteSecondB(item.key)"></i>
              </div>
              <ul v-if="item.children && item.children.length!=0" class="drag-r_level2">
                <li :class="'second'+index+'_third'+i" 
                  v-for="(sitem,i) in item.children" :key="i" 
                  @mousedown.stop="FnDragDom($event,sitem,sitem.key,i,'second'+index+'_third'+i)"
                  :ref="sitem.key">
                  <div class="dis-flex space-between align-center">
                    {{sitem.label}}
                    <i v-if="!sitem.hidden" class="el-icon-close" @mousedown.stop="FndeleteThirdB(sitem.key)"></i>
                  </div>
                  <ul v-if="sitem.children && sitem.children.length!=0" class="drag-r_level3">
                    <li :class="'second'+index+'_third'+i+'_four'+ti" 
                      v-for="(titem,ti) in sitem.children" :key="ti" 
                      @mousedown.stop="FnDragDom($event,titem,titem.key,ti,'second'+index+'_third'+i+'_four'+ti)"
                      :ref="titem.key">
                      <div class="dis-flex space-between align-center">
                        {{titem.label}}
                        <i class="el-icon-close" @mousedown.stop="FndeleteFourB(titem.key)"></i>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="FnorderOk" type="primary">确定</el-button>
      <el-button @click="FnorderCan" type="warning">取消</el-button>
    </div>
  </el-dialog>
</template>

<script>
  // import drag from "../../view/admin/service/drag/Drag";
  export default {
    name: 'menudrag',
    props:['isPopOpen','resetRight'],
    data() {
      return {
        // defaultArr:['second0','second1'],
        defaultArr:[],
        leftdata:[
          { 
            key: 'first',
            label:'全部',
            // disabled:false,
            // children:[]
            children:[
              {
                key: 'second0',
                label:'电商功能',
                // disabled:false,
                children:[
                  {
                    key: 'second0_third0',
                    label:'1111',
                    // disabled:false,
                    children:[
                      {
                        key: 'second0_third0_four0',
                        label:'QQ111',
                      },
                      {
                        key: 'second0_third0_four1',
                        label:'XONG222',
                      },
                    ]
                  },
                  {
                    key: 'second0_third1',
                    label:'222',
                    children:[
                      {
                        key: 'second0_third1_four0',
                        label:'QQ',
                      },
                      {
                        key: 'second0_third1_four1',
                        label:'XONG',
                      },
                    ]
                  },
                ]
              },
              {
                key: 'second1',
                label:'供应商功能',
                children:[
                  {
                    key: 'second1_third0',
                    label:'aaa',
                  },
                  {
                    key: 'second1_third1',
                    label:'bb',
                    children:[
                      {
                        key: 'second1_third1_four0',
                        label:'yy',
                      },
                      {
                        key: 'second1_third1_four1',
                        label:'EE',
                      },
                    ]
                  },
                  {
                    key: 'second1_third2',
                    label:'cc',
                  }
                ]
              },
              {
                key: 'second2',
                label:'数据统计功能',
                children:[
                  {
                    key: 'second2_third0',
                    label:'aaa'
                  }
                ]
              },
              {
                key: 'second3',
                label:'系统001',
                children:[
                  {
                    key: 'second3_third0',
                    label:'XXX',
                  },
                  {
                    key: 'second3_third1',
                    label:'BB',
                  },
                ]
              },
              {
                key: 'second4',
                label:'信工'
              },
              {
                key: 'second5',
                label:'用偶尔'
              },
            ]
          }
        ],
        popOpen:null,
        RightMenuSelect:[],
        nowref:'',//拖动位置元素
        nowrefseat:{},
        seatLiArr:[],
        seatFouLiArr:[],
        dragsearch:'',
        dragform:{
          name: '',
        },
        dragrules:{
          name: [
            { required: true, message: '请选择', trigger: 'change' }
          ],
        },
        DragSelect: [],
      }
    },
    watch:{
      isPopOpen(val,oldval){
        if(val){
          this.popOpen = true;
        }else{
          this.popOpen = false;
        }
      },
      resetRight(val,oldval){
        if(val){
          this.RightMenuSelect = [];
        }
      }
    },
    created: function () {
      // this.FnDragSelect();
    },
    mounted() {
      if(this.isPopOpen){
        this.popOpen = true;
      }
    },
    methods:{
      //搜索
      // FnDragSearch(){
      //   if(this.dragform.name){
      //     if(this.dragsearch){
      //       let param = {
      //         menuName : this.dragsearch,
      //         menuType : this.dragform.name,
      //       }
      //       drag.getLeftSearch(param).then(res=>{
      //         // let resData = res.list;
      //         console.log(res)
      //       });
      //     }else{
      //        alert('请输入搜索內容')
      //     }
      //   }else{
      //     this.$refs['dragform'].validate((valid) => {})
      //   }
      // },
      //select
      // FnDragSelect(){
      //   let param = {}
      //   drag.getLeftSelect(param).then(res=>{
      //     this.DragSelect = res.data;
      //   });
      // },
      //获取左侧数据
      getLeftTreeData(){
        let param = {
          menuType : this.menuType
        }
        drag.getLeftMenu(param).then(res=>{
          let resData = res.list;
          resData.forEach(function(val,ind){
            val.label = val.menuName;
            val.key = 'second'+ind;
            if(val.children && val.children.length!=0){
              val.children.forEach(function(sv,si){
                sv.label = sv.menuName;
                sv.key = 'second'+ind+'_third'+si;
                if(sv.children && sv.children.length!=0){
                  sv.children.forEach(function(tv,ti){
                    tv.label = tv.menuName;
                    tv.key = 'second'+ind+'_third'+si+'_four'+ti;;
                  })
                }
              })
            }
          })
          this.$set(this.leftdata[0],'children',resData)
        });
      },
      //右上角叉号
      FnClosePop(){
        this.$emit('close-dialog',this.popOpen)
      },
      //确定按钮
      FnorderOk(){
        this.$refs['dragform'].validate((valid) => {
          if(valid){
            let dragRObj = {};
            dragRObj.data = this.RightMenuSelect;
            dragRObj.type = this.dragform.name;
            this.$emit('get-menudata',dragRObj)
            this.popOpen = false;
          }
        })
      },
      //取消按钮
      FnorderCan(){
        this.popOpen = false;
      },
      
      //左到右
      FnleftTor() {
        let _this = this;
        let draftSelectArr = this.$refs.lefttree.getCheckedNodes();
        draftSelectArr.forEach((val,ind) => {
          this.leftdata.forEach((v,i) => {
            if(val.key == v.key){
              this.$set(this.leftdata[i],'disabled',true);
            }
            if(v.children && v.children.length!=0){
              v.children.forEach((sv,si) => {
                if(val.key == sv.key){
                  this.$set(this.leftdata[i].children[si],'disabled',true);
                }
                if(sv.children && sv.children.length!=0){
                  sv.children.forEach((tv,ti) => {
                    if(val.key == tv.key){
                      this.$set(this.leftdata[i].children[si].children[ti],'disabled',true);
                    }
                    if(tv.children && tv.children.length!=0){
                      tv.children.forEach((fv,fi) => {
                        if(val.key == fv.key){
                          this.$set(this.leftdata[i].children[si].children[ti].children[fi],'disabled',true);
                        }
                      })
                    }
                  })
                }
              })
            }
          })
        })
        let level='';//查看级别
        let newArr = [];//stemp
        draftSelectArr.forEach(function(val,ind){
          //全部
          if(val.key == 'first' && ind == 0){
            newArr = val.children
            draftSelectArr.splice(1,draftSelectArr.length-1)
          //二层
          }else if(val.key.indexOf("_")==-1){ 
            level = val.key;   //second0
            newArr.push(val);
            // //减去对应的三级
            if(val.children && val.children.length!=0){
              draftSelectArr.splice(ind+1,val.children.length);
              // 减去对应的四级
              val.children.forEach(function(sv,si){
                if(sv.children && sv.children.length!=0){
                  draftSelectArr.splice(ind+1,sv.children.length);
                }
              })
            }
          //三层
          }else if(val.key.indexOf("four")==-1){
            let hasFaInd = null;
            let hasFa =false;
            newArr.forEach(function(sv,si){
              if(sv.key == val.key.split('_')[0]){
                hasFa = true;
                hasFaInd=si;
              }
            })
            if(hasFa){
              newArr[hasFaInd].children.push(val);
            }else{
              let Fa = _this.leftdata[0].children[val.key.split('_')[0].split('second')[1]];
              Fa.children.length = 1;
              Fa.children[0] = val;
              newArr.push(Fa);
              //如果有children 就減去对应的四级 
              if(val.children && val.children.length!=0){
                draftSelectArr.splice(ind+1,val.children.length);
              }
            }
          //四层
          }else if(val.key.indexOf("four")!=-1){
            let json = {}
            json.second = val.key.split('second')[1].substring(0,1);
            json.third = val.key.split('third')[1].substring(0,1);
            json.four = val.key.split('four')[1].substring(0,1);
            let hasthiFaInd = null;
            let hasfouFaInd = null;
            let hasthiFa =false;
            newArr.forEach(function(sv,si){
              if(sv.key == val.key.split('_')[0]){
                sv.children.forEach(function(tv,ti){
                  if(tv.key == val.key.substring(0,val.key.lastIndexOf('_')) ){
                    hasthiFa = true;
                    hasthiFaInd =si;
                    hasfouFaInd=ti;
                  }
                })
              }
            })
            if(hasthiFa){
              newArr[hasthiFaInd].children[hasfouFaInd].children.push(val);
            }else{
              let secFa = _this.leftdata[0].children[json.second];
              let thiFa = _this.leftdata[0].children[json.second].children[json.third];
              secFa.children.length = 1;
              thiFa.children.length = 1;
              thiFa.children[0] = val;    
              secFa.children[0] = thiFa;
              newArr.push(secFa)
            }
          }
        })
        this.RightMenuSelect = JSON.parse(JSON.stringify(newArr));
      },
      //拖动
      FnDragDom(ev,data,which,index,indexwhich) {
        let _this = this;
        ev.preventDefault();
        this.nowref = which; 
        let json = {};
        json.second =  indexwhich.split('second')[1].substring(0,1);
        if(which.split('_')[1]){
          json.third = indexwhich.split('third')[1].substring(0,1);
        }
        if(which.split('four')[1]){
          json.four = indexwhich.split('four')[1].substring(0,1);
        }
        this.nowrefseat = json;
        //二级
        if(data.key.lastIndexOf('third')==-1){
          if(this.RightMenuSelect.length>1){
            this.FnShadow(ev,data,which,index);
          }
        }//三级  second0_third1
        else if(data.key.lastIndexOf('four')==-1){
          this.RightMenuSelect.forEach(function(val,ind){
            let level2 = data.key.substring(0,data.key.indexOf('_'));
            if(val.key==level2 && val.children.length>1){
              _this.FnShadow(ev,data,which,index);
            }
          })
        }//四级  second0_third1_four2
        else if(data.key.lastIndexOf('four')!=-1){
          this.RightMenuSelect.forEach(function(val,ind){
            let level2 = data.key.substring(0,data.key.indexOf('_'));
            let level3 = data.key.substring(0,data.key.lastIndexOf('_'));
            if(val.key==level2){
              val.children.forEach(function(sv,si){
                if(sv.key == level3 && sv.children.length>1){
                  _this.FnShadow(ev,data,which,index);
                }
              })
            }
          })
        } 
        //記住右侧 的 li 坐標
        this.FnseatLiArr(this.RightMenuSelect)
      },
      //获取右侧 多层数组位置信息  父级拖动以后 必重新获取位置
      FnseatLiArr(arr){
        let _this = this;
        this.seatLiArr = [];
        arr.forEach(function(val,ind){
          let posJson = {};
          posJson.top = _this.$refs[val.key][0].offsetTop;
          posJson.ind = ind;
          if(val.children && val.children.length!=0){
            posJson.child = []
            val.children.forEach(function(sv,si){
              let childjson = {};
              childjson.top = _this.$refs[sv.key][0].offsetTop;
              childjson.ind = si;
              posJson.child.push(childjson)
              if(sv.children && sv.children.length!=0){
                posJson.child[si].child = [];
                sv.children.forEach(function(tv,ti){
                  let grandsonjson = {};
                  grandsonjson.top = _this.$refs[tv.key][0].offsetTop;
                  grandsonjson.ind = ti;
                  posJson.child[si].child.push(grandsonjson)
                })
              }
            })
          }
          _this.seatLiArr.push(posJson)
        })
      },
      //点击元素距离 drag-wrap的 offsetTop
      //拖拽 影子  
      FnShadow(ev,data,which,index){
        let _this = this;
        //原始位置
        let oldX = this.$refs[which][0].offsetLeft+'px';  //左侧没关系
        let oldY = this.$refs[which][0].offsetTop+'px';
        let shadow = document.createElement('div');
        let childBlock = ''; 
        shadow.style.left=oldX;
        shadow.style.top=oldY;
        shadow.style.position='absolute';
        shadow.style.opacity='0.65';
        if(data.children && data.children.length!=0){
          data.children.forEach(function(val,ind){
            let secchildBlock = '';
            if(val.children && val.children.length!=0){
              val.children.forEach(function(sv,si){
                secchildBlock += `<li>${sv.label}</li>`;
              })
            }
            childBlock += `<li>${val.label}
                            <ul>
                              ${secchildBlock}
                            </ul>
                          </li>`;
          })
        }
        let liBlock = `
          <li>
            <i v-if="${data.children!=0}" class="el-icon-caret-bottom"></i>
            ${data.label}
            <ul class="drag-r_level2">
              ${childBlock}
            </ul>
          </li>`;
        shadow.innerHTML=liBlock;
        this.$refs[which][0].parentNode.appendChild(shadow);
        var disX=ev.clientX-shadow.offsetLeft;
        var disY=ev.clientY-shadow.offsetTop;
        document.onmousemove=function(ev){
          var oEvent=ev||event;
          shadow.style.left=oEvent.clientX-disX+'px';
          shadow.style.top=oEvent.clientY-disY+'px';
          let nowLeft = shadow.style.left.split('px')[0];
          let nowTop = shadow.style.top.split('px')[0];
          //二級
          if(!_this.nowrefseat.third){
            _this.seatLiArr.forEach(function(val,ind){
              if(Math.abs(Math.round(shadow.offsetTop - val.top))<4){
                let stemp = _this.RightMenuSelect[index];
                _this.RightMenuSelect.splice(index,1,_this.RightMenuSelect[val.ind]);
                _this.RightMenuSelect.splice(val.ind,1,stemp);
              }              
            })
          }//三級
          else if(!_this.nowrefseat.four){
            _this.seatLiArr.forEach(function(val,ind){
              if(_this.nowrefseat.second == val.ind){
                val.child.forEach(function(sv,si){
                  // shadow.offsetTop>36 避免自身重复 36
                  if(shadow.offsetTop>36 && Math.abs(Math.round(shadow.offsetTop- sv.top))<4){
                    let stemp = _this.RightMenuSelect[val.ind].children[sv.ind];
                    _this.RightMenuSelect[val.ind].children.splice([sv.ind],1,_this.RightMenuSelect[val.ind].children[index]);
                    _this.RightMenuSelect[val.ind].children.splice([index],1,stemp);
                  }
                }) 
              }           
            })
          }//四級
          else if(_this.nowrefseat.four){
            _this.seatLiArr.forEach(function(val,ind){
              if(_this.nowrefseat.second == val.ind){
                val.child.forEach(function(sv,si){
                  if(_this.nowrefseat.third == sv.ind){
                    sv.child.forEach(function(tv,ti){
                      if(shadow.offsetTop>36 && Math.abs(Math.round(shadow.offsetTop-tv.top))<4){
                        let stemp = _this.RightMenuSelect[val.ind].children[sv.ind].children[tv.ind];
                        _this.RightMenuSelect[val.ind].children[sv.ind].children.splice([tv.ind],1,_this.RightMenuSelect[val.ind].children[sv.ind].children[index]);
                        _this.RightMenuSelect[val.ind].children[sv.ind].children.splice([index],1,stemp);
                      }
                    })
                  }
                }) 
              }           
            })
          }
        }
        document.onmouseup=function(){
          document.onmousemove=null;   //删除事件
          document.onmouseup=null;   //节省资源
          shadow.setCapture && shadow.releaseCapture();
          // if(_this.$refs[which][0]){
            _this.$refs[which][0].parentNode.removeChild(shadow);
          // }
          _this.FnseatLiArr(_this.RightMenuSelect)
        }
      },
      FndeleteSecondB(which){
        let _this = this;
        this.RightMenuSelect.forEach(function(val,ind){
          if(val.key == which){
            _this.RightMenuSelect.splice(ind,1);
            ind-=1;
          }
        })
        //左侧对应清除勾
        let leftSelectArr = this.$refs.lefttree.getCheckedNodes(); 
        if(leftSelectArr[0].key == 'first'){
          leftSelectArr=leftSelectArr.slice(1);
          this.$set(this.leftdata[0],'disabled',false);
        }
        let childNum = 0;
        leftSelectArr.forEach(function(val,ind){
          if(val.key == which){
            if(val.children && val.children.length!=0){
              childNum = val.children.length;
              //四級
              val.children.forEach(function(sv,si){
                if(sv.children && sv.children.length!=0){
                  childNum+=sv.children.length;
                }
              })
              leftSelectArr.splice(ind,(1+childNum));
            }else{
              leftSelectArr.splice(ind,1);
            }
            //子集删除  左侧父级不选中
          }else if(val.key.indexOf(which)!=-1){
            leftSelectArr.splice(ind,1);
            ind-=1;
          }
        }) 
        this.$refs.lefttree.setCheckedNodes(leftSelectArr)
        //左侧取消disabled
        this.leftdata[0].children.forEach((v,i) => {
          if(which == v.key){
            this.$set(this.leftdata[0].children[i],'disabled',false);
          }
          if(v.children && v.children.length!=0){
            v.children.forEach((sv,si) => {
              if(sv.key.indexOf(which)!=-1){
                this.$set(this.leftdata[0].children[i].children[si],'disabled',false);
              }
              if(sv.children && sv.children.length!=0){
                sv.children.forEach((tv,ti) => {
                  if(tv.key.indexOf(which)!=-1){
                    this.$set(this.leftdata[0].children[i].children[si].children[ti],'disabled',false);
                  }
                })
              }
            })
          }
        })
      },
      FndeleteThirdB(which){
        let _this = this;
        let json = {};
        json.second = which.split('_')[0].split('second')[1];
        json.third = which.split('_')[1].split('third')[1];
        this.RightMenuSelect.forEach(function(val,ind){
          if(val.key.split('second')[1] == json.second){
            val.children.forEach(function(sv,si){
              if(sv.key.split('_')[1].split('third')[1] == Number(json.third)){
                val.children.splice(si,1);
                si-=1;
              }
            })
            //如果三级都删除 对应的二级 也删除
            if(_this.RightMenuSelect[ind].children.length == 0){
              _this.RightMenuSelect.splice(ind,1)
              ind-=1;
            }
            //二级 删除按钮 hidden true
            _this.$set(val,'hidden',true)
          }
        })
        //左侧对应清除勾选
        let leftSelectArr = this.$refs.lefttree.getCheckedNodes(); 
        if(leftSelectArr[0].key == 'first'){
          leftSelectArr=leftSelectArr.slice(1);
          this.$set(this.leftdata[0],'disabled',false);
        }
        let childNum = 0;
        leftSelectArr.forEach(function(val,ind){
          if(val.key == which){
            if(val.children && val.children.length!=0){
              childNum = val.children.length;
              leftSelectArr.splice(ind,(1+childNum));
            }else{
              leftSelectArr.splice(ind,1);
            }
          }
        })
        leftSelectArr.forEach(function(val,ind){
          if(val.key == which.split('_')[0]){
            leftSelectArr.splice(ind,1);
          }
        }) 
        this.$refs.lefttree.setCheckedNodes(leftSelectArr)
        //左侧取消disabled
        this.leftdata[0].children.forEach((v,i) => {
          if(v.children && v.children.length!=0){
            v.children.forEach((sv,si) => {
              if(sv.key==which){
                this.$set(this.leftdata[0].children[i].children[si],'disabled',false);
              }
              if(sv.children && sv.children.length!=0){
                sv.children.forEach((tv,ti) => {
                  if(tv.key.indexOf(which)!=-1){
                    this.$set(this.leftdata[0].children[i].children[si].children[ti],'disabled',false);
                  }
                })
              }
            })
          }
        })
      },
      FndeleteFourB(which){
        let _this = this;
        let json = {};
        json.second = which.split('_')[0].split('second')[1];
        json.third = which.split('_')[1].split('third')[1];
        json.four = which.split('four')[1];
        this.RightMenuSelect.forEach(function(val,ind){
          if(val.key.split('second')[1] == json.second){
            val.children.forEach(function(sv,si){
              if(sv.key.split('_')[1].split('third')[1] == json.third){
                sv.children.forEach(function(fv,fi){
                  if(fv.key.split('four')[1] == json.four){
                    sv.children.splice(fi,1);
                    fi-=1;
                  }
                })
                //如果四级都删除 对应的三级 二级 也删除？
                if(_this.RightMenuSelect[ind].children[si].children.length == 0){
                  _this.RightMenuSelect[ind].children.splice(si,1)
                  si-=1;
                }
                //二级 删除按钮 hidden true
                _this.$set(sv,'hidden',true)
              }
            })
            _this.$set(val,'hidden',true)
          }
          //三级删除 二级 也删除？
          if(!_this.RightMenuSelect[ind].children || _this.RightMenuSelect[ind].children.length == 0){
            _this.RightMenuSelect.splice(ind,1)
            ind-=1;
          }
        })
        //左
        let leftSelectArr = this.$refs.lefttree.getCheckedNodes(); 
        if(leftSelectArr[0].key == 'first'){
          leftSelectArr=leftSelectArr.slice(1);
          this.$set(this.leftdata[0],'disabled',false);
        }
        let childNum = 0;
        leftSelectArr.forEach(function(val,ind){
          if(val.key == which){
            leftSelectArr.splice(ind,1);
          }
        })
        leftSelectArr.forEach(function(val,ind){
          if(val.key == which.split('_third')[0]){
            leftSelectArr.splice(ind,1);
          }
        }) 
        leftSelectArr.forEach(function(val,ind){
          if(val.key == which.split('_four')[0]){
            leftSelectArr.splice(ind,1);
          }
        }) 
        this.$refs.lefttree.setCheckedNodes(leftSelectArr)
        //左侧取消disabled
        this.leftdata[0].children.forEach((v,i) => {
          if(v.children && v.children.length!=0){
            v.children.forEach((sv,si) => {
              if(sv.children && sv.children.length!=0){
                sv.children.forEach((tv,ti) => {
                  if(tv.key.indexOf(which)!=-1){
                    this.$set(this.leftdata[0].children[i].children[si].children[ti],'disabled',false);
                  }
                })
              }
            })
          }
        })
      }
    }
  };
</script>

<style  scoped>
  ul,ol,li{
    list-style: none;
  }
  .el-dialog__body{
    padding:5px 20px !important;
  }
  /deep/.drag-search_l,.drag-search_r{
    width:300px;
    
  }
  /deep/.drag-search_l
  .el-input{
    width:250px !important
  }
  /deep/.w712 .el-dialog{
    width:712px !important;
  }
  .el-tree{
    text-align:left !important;
  }
  .el-icon-caret-bottom{
    color:#999 !important;
  }
  /deep/.drag-m{
    width:80px;
    margin:100px 30px;
  }
  .drag-wrap{
    position:relative;
  }
  .drag-l{
    width:250px;
  }
  .drag-r{
    background: #fff;
    width: 200px;
    min-height:400px;
    height: auto;
    border:1px solid #d1dbe5;
    padding:0 15px;
    text-align:left;
    line-height: 36px;
  }
  .drag-current{
    background:#f5f5f5;
  }
  .drag-r_level2{
    padding:0 15px;
    position:relative;
  }
  .drag-r_level3{
    padding-left:15px;
    position:relative;
  }
  .m0{
    margin:0 !important;
  }
  .mb20{
    margin-bottom:20px !important;
  }
</style>
