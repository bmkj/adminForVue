webpackJsonp([10],{atxI:function(t,e){},cgTB:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Dd8w"),r=a.n(n),i=a("lhz5"),l=a("NYxO"),s={name:"userIndex",mixins:[a("vsZy").a],data:function(){return{params:{user_name:""}}},methods:r()({handleEdit:function(t,e){this.setEditAdmin(e),this.$router.push("/admin/addAdmin")},handleDel:function(t,e){var a=this;this.$confirm("删除管理员将不可恢复","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.a)(e).then(function(e){a.$message({message:"删除成功",type:"success"}),a.list.splice(t,1)})})},addAdmin:function(t){this.$router.push("/admin/addAdmin/"),this.setEditAdmin({})},_getData:function(){var t=this;Object(i.b)(this.params).then(function(e){t.list=e.data.data,t.total=e.data.total,t.pageSize=e.data.per_page,t.page=e.data.current_page,t.table_loading=!1}).catch(function(e){t.table_loading=!0})}},Object(l.d)({setEditAdmin:"SET_EDIT_ADMIN"}))},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("p",{staticClass:"page-title"},[t._v("管理员列表")]),t._v(" "),a("div",{staticClass:"filter-container"},[a("el-button",{staticClass:"filter-item",attrs:{type:"primary",plain:""},on:{click:function(e){t.addAdmin()}}},[t._v("添加管理员")]),t._v(" "),a("div",{staticStyle:{float:"right"}},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"管理员用户名"},model:{value:t.params.user_name,callback:function(e){t.$set(t.params,"user_name",e)},expression:"params.user_name"}}),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary"},on:{click:t.search}},[t._v("搜索")])],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.table_loading,expression:"table_loading"}],attrs:{"element-loading-text":"加载中...",border:"",fit:"","highlight-current-row":"",data:t.list}},[a("el-table-column",{attrs:{label:"ID",prop:"id",align:"center",width:"60px"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"管理员名称",prop:"user_name"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"管理员真实姓名",prop:"real_name"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"管理员角色",prop:"role.role_name"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"最后登录IP",prop:"last_login_ip"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"最后登录时间",prop:"last_login_time"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"状态",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?a("el-tag",{attrs:{type:"success"}},[t._v("正常")]):t._e(),t._v(" "),0==e.row.status?a("el-tag",{attrs:{type:"danger"}},[t._v("禁用")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.handleDel(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("div",{staticClass:"page-container"},[a("el-pagination",{attrs:{background:"","current-page":t.params.page,"page-sizes":t.page_sizes,"page-size":t.params.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"update:currentPage":function(e){t.$set(t.params,"page",e)},"current-change":t.handleCurrentChange}})],1)],1)},staticRenderFns:[]};var o=a("VU/8")(s,c,!1,function(t){a("atxI")},"data-v-1dc29a7b",null);e.default=o.exports},lhz5:function(t,e,a){"use strict";e.b=function(t){return Object(n.a)({url:"user/index",method:"get",params:t})},e.a=function(t){return Object(n.a)({url:"user/userDel",method:"post",data:t})},e.c=function(){return Object(n.a)({url:"user/userAdd",method:"get"})},e.d=function(t){var e=t.id?"user/userEdit":"user/userAdd";return Object(n.a)({url:e,method:"post",data:t})};var n=a("vLgD")}});