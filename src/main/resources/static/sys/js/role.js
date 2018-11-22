$(function () {
    $("#jqGrid").jqGrid({
        url: baseURL + 'sys/role/lists',
        datatype: "json",
        colModel: [
            { label: '角色ID', name: 'id', index: "id", width: 45, key: true },
            { label: '角色名称', name: 'name', index: "name", width: 75 },
            { label: '所属部门', name: 'deptName', sortable: false, width: 75 },
            { label: '备注', name: 'remark', width: 100 },
            { label: '创建时间', name: 'createTime', index: "createTime", width: 80}
        ],
        viewrecords: true,
        height: 500,
        rowNum: 1000,
        rowList : [10,30,50],
        rownumbers: true,
        rownumWidth: 25,
        autowidth:true,
        multiselect: true,
       pager: "#jqGridPager",
        jsonReader : {
            root: "page.list",
            page: "page.currPage",
            total: "page.totalPage",
            records: "page.totalCount"
        },
        prmNames : {
           page:"page",
            rows:"limit",
            order: "order"
        },
       gridComplete:function(){
            //隐藏grid底部滚动条
            $("#jqGrid").closest(".ui-jqgrid-bdiv").css({ "overflow-x" : "hidden" });
        }
    });
});

//菜单树
var menu_ztree;
var menu_setting = {
    data: {
        simpleData: {
            enable: true,
            idKey: "id",
            pIdKey: "parentId",
            rootPId: -1
        },
        key: {
            url:"nourl"
        }
    },
    check:{
        enable:true,
        nocheckInherit:true
    }
};

//部门结构树
var dept_ztree;
var dept_setting = {
    data: {
        simpleData: {
            enable: true,
            idKey: "id",
            pIdKey: "parentId",
            rootPId: -1
        },
        key: {
            url:"nourl"
        }
    }
};

//数据树dept
var data_ztree;
var data_setting = {
    data: {
        simpleData: {
            enable: true,
            idKey: "id",
            pIdKey: "parentId",
            rootPId: -1
        },
        key: {
            url:"nourl"
        }
    },
    check:{
        enable:true,
        nocheckInherit:true,
        chkboxType:{ "Y" : "", "N" : "" }
    }
};
//真实库树
var realDb_ztree;
var realDb_setting = {
    data: {
        simpleData: {
            enable: true,
            idKey: "id",
            pIdKey: "pId",
            rootPId: -1
        },
        key: {
            url:"nourl"
        }
    },
    check:{
        enable:true,
        nocheckInherit:true
    }
};

//视图树
var view_ztree;
var view_setting = {
    data: {
        simpleData: {
            enable: true,
            idKey: "id",
            pIdKey: "pId",
            rootPId: -1
        },
        key: {
            url:"nourl"
        }
    },
    check:{
        enable:true,
        nocheckInherit:true
    }
};

//函数树
var fun_ztree;
var fun_setting = {
    data: {
        simpleData: {
            enable: true,
            idKey: "id",
            pIdKey: "pId",
            rootPId: -1
        },
        key: {
            url:"nourl"
        }
    },
    check:{
        enable:true,
        nocheckInherit:true
    }
};

//虚拟树
var virtual_ztree;
var virtual_setting = {
    data: {
        simpleData: {
            enable: true,
            idKey: "id",
            pIdKey: "pId",
            rootPId: -1
        },
        key: {
            url:"nourl"
        }
    },
    check:{
        enable:true,
        nocheckInherit:true
    }
};

var vm = new Vue({
    el:'#rrapp',
    data:{
        q:{
            roleName: null
        },
        showList: true,
        title:null,
        role:{
            deptId:null,
            deptName:null
        }
    },
    methods: {
        query: function () {
            vm.reload();
        },
        add: function(){
            vm.showList = false;
            vm.title = "新增";
            vm.role = {deptName:null, deptId:null};
            vm.getMenuTree(null);
            vm.getDept();
            vm.getDataTree();
            vm.getRealDb(null);
            vm.getView(null);
            vm.getFun(null);
            vm.getVirtual(null);
        },
        update: function () {
            var id = getSelectedRow();
            if(id == null){
                return ;
            }

            vm.showList = false;
            vm.title = "修改";
            vm.getDataTree();
            vm.getMenuTree(id);
            vm.getRealDb(id)
            vm.getView(id)
            vm.getFun(id);
            vm.getVirtual(id);
            vm.getDept();
        },
        del: function () {
            var roleIds = getSelectedRows();
            if(roleIds == null){
                return ;
            }

            confirm('确定要删除选中的记录？', function(){
                $.ajax({
                    type: "POST",
                    url: baseURL + "sys/role/delete",
                    contentType: "application/json",
                    data: JSON.stringify(roleIds),
                    success: function(r){
                        if(r.code == 200){
                            alert('操作成功', function(){
                                vm.reload();
                            });
                        }else{
                            alert(r.msg);
                        }
                    }
                });
            });
        },
        getRole: function(id){
            $.get(baseURL + "sys/role/info/"+id, function(r){
                vm.role = r.role;

                //勾选角色所拥有的菜单
                var menuIds = vm.role.permissionIdList;
                for(var i=0; i<menuIds.length; i++) {
                    var node = menu_ztree.getNodeByParam("id", menuIds[i]);
                    menu_ztree.checkNode(node, true, false);
                }

                //勾选角色所拥有的部门数据权限
                var deptIds = vm.role.deptIdList;
                for(var i=0; i<deptIds.length; i++) {
                    var node = data_ztree.getNodeByParam("id", deptIds[i]);
                    data_ztree.checkNode(node, true, false);
                }

                //勾选角色所拥有的真实库
                var realDbIds = vm.role.readDbIdList;
                for(var i=0; i<realDbIds.length; i++) {
                    var node = realDb_ztree.getNodeByParam("id", realDbIds[i]);
                    realDb_ztree.checkNode(node, true, false);
                }

                //勾选角色所拥有的视图
                var viewIds = vm.role.viewIdList;
                for(var i=0; i<viewIds.length; i++) {
                    var node = view_ztree.getNodeByParam("id", viewIds[i]);
                    view_ztree.checkNode(node, true, false);
                }

                //勾选角色所拥有的函数
                var funIds = vm.role.funIdList;
                for(var i=0; i<funIds.length; i++) {
                    var node = fun_ztree.getNodeByParam("id", funIds[i]);
                    fun_ztree.checkNode(node, true, false);
                }

                //勾选角色所拥有的虚拟
                var virtualIds = vm.role.virtualIdList;
                for(var i=0; i<virtualIds.length; i++) {
                    var node = virtual_ztree.getNodeByParam("id", virtualIds[i]);
                    virtual_ztree.checkNode(node, true, false);
                }

                vm.getDept();
            });
        },
        saveOrUpdate: function () {
            //debugger
            //获取选择的菜单
            var nodes = menu_ztree.getCheckedNodes(true);
            var permissionIdList = new Array();
            for(var i=0; i<nodes.length; i++) {
                permissionIdList.push(nodes[i].id);
            }
            vm.role.permissionIdList = permissionIdList;

            //获取选择的数据
            var nodes = data_ztree.getCheckedNodes(true);
            var deptIdList = new Array();
            for(var i=0; i<nodes.length; i++) {
                deptIdList.push(nodes[i].id);
            }
            vm.role.deptIdList = deptIdList;

            //获取选择的真实库
            var nodes = realDb_ztree.getCheckedNodes(true);
            var readDbIdList = new Array();
            for(var i=0; i<nodes.length; i++) {
                readDbIdList.push(nodes[i].id);
            }
            vm.role.readDbIdList = readDbIdList;

            //获取选择的视图
            var nodes = view_ztree.getCheckedNodes(true);
            var viewIdList = new Array();
            for(var i=0; i<nodes.length; i++) {
                viewIdList.push(nodes[i].id);
            }
            vm.role.viewIdList = viewIdList;


            //获取选择的函数
            var nodes = fun_ztree.getCheckedNodes(true);
            var funIdList = new Array();
            for(var i=0; i<nodes.length; i++) {
                funIdList.push(nodes[i].id);
            }
            vm.role.funIdList = funIdList;


            //获取选择的虚拟
            var nodes = virtual_ztree.getCheckedNodes(true);
            var virtualIdList = new Array();
            for(var i=0; i<nodes.length; i++) {
                virtualIdList.push(nodes[i].id);
            }
            vm.role.virtualIdList = virtualIdList;



            var url = vm.role.id == null ? "sys/role/save" : "sys/role/update";
            $.ajax({
                type: "POST",
                url: baseURL + url,
                contentType: "application/json",
                data: JSON.stringify(vm.role),
                success: function(r){
                    if(r.code === 200){
                        alert('操作成功', function(){
                            vm.reload();
                        });
                    }else{
                        alert(r.msg);
                    }
                }
            });
        },
        getMenuTree: function(roleId) {
            //加载菜单树
            $.get(baseURL + "sys/permission/lists", function(r){
                menu_ztree = $.fn.zTree.init($("#menuTree"), menu_setting, r);
                //展开所有节点
                menu_ztree.expandAll(true);

                if(roleId != null){
                    vm.getRole(roleId);
                }
            });
        },
        getDataTree: function(id) {
            //加载菜单树
            $.get(baseURL + "sys/dept/lists", function(r){
                data_ztree = $.fn.zTree.init($("#dataTree"), data_setting, r);
                //展开所有节点
                data_ztree.expandAll(true);
            });
        },
        getDept: function(){
            //加载部门树
            $.get(baseURL + "sys/dept/lists", function(r){
                dept_ztree = $.fn.zTree.init($("#deptTree"), dept_setting, r);
                var node = dept_ztree.getNodeByParam("id", vm.role.deptId);
                if(node != null){
                    dept_ztree.selectNode(node);
                    //部门名
                    vm.role.deptName = node.name;
                }
            })
        },
        getRealDb: function(roleId) {
            //加载真实库
            $.get(baseURL + "real/lists", function(r){
                //debugger
                realDb_ztree = $.fn.zTree.init($("#realDb_ztree"), realDb_setting, r);
                //展开所有节点
                realDb_ztree.expandAll(true);

                if(roleId != null){
                    vm.getRole(roleId);
                }
            });
        },
        getView: function(roleId) {
            //加载视图
            $.get(baseURL + "views/lists", function(r){
                //debugger
                view_ztree = $.fn.zTree.init($("#view_ztree"), view_setting, r);
                //展开所有节点
                view_ztree.expandAll(true);

                if(roleId != null){
                    vm.getRole(roleId);
                }
            });
        },
        getFun: function(roleId) {
            //加载函数
            $.get(baseURL + "function/lists", function(r){
                //debugger
                fun_ztree = $.fn.zTree.init($("#fun_ztree"), fun_setting, r);
                //展开所有节点
                fun_ztree.expandAll(true);

                if(roleId != null){
                    vm.getRole(roleId);
                }
            });
        },
       getVirtual: function(roleId) {
            //加载虚拟
            $.get(baseURL + "virtual/lists", function(r){
                //debugger
                virtual_ztree = $.fn.zTree.init($("#virtual_ztree"), virtual_setting, r);
                //展开所有节点
                virtual_ztree.expandAll(true);

                if(roleId != null){
                    vm.getRole(roleId);
                }
            });
        },

        deptTree: function(){
            layer.open({
                type: 1,
                offset: '50px',
                skin: 'layui-layer-molv',
                title: "选择部门",
                area: ['300px', '450px'],
                shade: 0,
                shadeClose: false,
                content: jQuery("#deptLayer"),
                btn: ['确定', '取消'],
                btn1: function (index) {
                    var node = dept_ztree.getSelectedNodes();
                    //选择上级部门
                    vm.role.deptId = node[0].id;
                    vm.role.deptname = node[0].name;

                    layer.close(index);
                }
            });
        },
        reload: function () {
            vm.showList = true;
            var page = $("#jqGrid").jqGrid('getGridParam','page');
            $("#jqGrid").jqGrid('setGridParam',{
                postData:{'roleName': vm.q.roleName},
                page:page
            }).trigger("reloadGrid");
        }
    }
});