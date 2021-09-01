# phoenixtree-vue-plugin

#### 使用方式
```
在main.js进行全局引入;
import phoenixtreeVuePlugin from "phoenixtree-vue-plugin";
import "phoenixtree-vue-plugin/lib/phoenixtreeVue.css";
Vue.use(phoenixtreeVuePlugin);
```

#### 内容
##### 基础布局组件：phoenixtree-layout; 
###### slot: 
    name: Frame-content

###### Attribute: 
    1. noPadding：对外层padding控制  
        1.1 type：Boolean  
        
    2. noContentPadding：对内层padding控制  
        2.1 type：Boolean 

##### 基础混合表格组件：phoenixtree-base-table;
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
    
##### 基础头部信息栏组件：phoenixtree-header;
###### slot: 
    左侧系统信息区域(可写入一个25*25的icon)
    name: slot-header-title

    右侧用户信息区域
    1. 用户帐号首字符
    name: slot-header-btn-pic
    2. 用户帐号
    name: slot-header-btn-name

###### Attribute: 
    悬浮下拉数组
    dropdowmArr

    name: 展示名称
    command: 点击操作区别标识

    示例：
    [
        {
            name: '退出登录',
            command: 'logOut'
        }
    ]

###### Methods:
    悬浮下拉点击触发函数
    emitChange(str)

    str: 值为command区别标识

