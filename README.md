# phoenixtree-vue-plugin

#### 使用方式
```
在main.js进行全局引入;
import phoenixtreeVuePlugin from "phoenixtree-vue-plugin";
import "phoenixtree-vue-plugin/lib/phoenixtreeVue.css";
Vue.use(phoenixtreeVuePlugin);
```

#### 内容
##### 基础布局组件：phoenixtree-layout;(v1.1.x) 
###### slot: 
    name: Frame-content

###### Attribute: 
    1. noPadding：对外层padding控制  
       type：Boolean
       default: false  
        
    2. noContentPadding：对内层padding控制  
       type：Boolean 
       default: false 
    
    3. minWidth: 布局组件最小宽度控制 
       type: String 
       default: '900px'


##### 基础混合表格组件：phoenixtree-base-table;(v1.1.x)
###### slot: 
    标题
    name: slot-title
    标题按钮区
    name: slot-title-btn
    筛选区
    name: slot-form
    筛选按钮区
    name: slot-form-btn
    中部按钮区
    name: slot-mid-btn
    表格区
    name: slot-table
    底部按钮区
    name: slot-page

###### Attribute: 
    1. pageTotal: 分页总条数 
       type: Number 
       default: 100 

    2. pageSize: 分页单页显示数量
       type: Number 
       default: 30 

    3. currentPage: 分页当页页码
       type: Number 
       default: 1 

    4. pageBcColor: 分页选中项背景色
       type: String 
       default: '#409eff' 

    5. pageTxtColor: 分页选中项文字颜色 
       type: String 
       default: '#ffffff' 

###### Methods: 
    1. currentChange(num): 当前页码改变触发函数
    num: 当前页码值
    
##### 基础头部信息栏组件：phoenixtree-header;(v1.1.x)
###### slot: 
    左侧系统信息区域(可写入一个25*25的icon)
    name: slot-header-title

    右侧用户信息区域
    1. 用户帐号首字符
    name: slot-header-btn-pic
    2. 用户帐号
    name: slot-header-btn-name

###### Attribute: 
    1. dropdowmArr: 悬浮下拉数组
       name: 展示名称
       command: 点击操作区别标识
       type: Array 
       default:
        [
            {
                name: '退出登录',
                command: 'logOut'
            }
        ]

    2. bcColor: 组件背景色
       type: String 
       default: '#3d7ffc' 

    3. sysColor: 系统标题颜色 
       type: String 
       default: '#ffffff' 

    4. picBcColor: 用户帐号首字母背景色
       type: String 
       default: '#ffffff' 

    5. picColor: 用户帐号首字母颜色
       type: String 
       default: '#3d7ffc' 

    6. nameColor: 用户帐号颜色
       type: String 
       default: '#ffffff' 

###### Methods:
    悬浮下拉点击触发函数
    1. emitChange(str)
    str: 值为command区别标识

