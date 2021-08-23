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
###### 参数：

    1. noPadding：对外层padding控制  
        1.1 type：Boolean  
        
    2. noContentPadding：对内层padding控制  
        2.1 type：Boolean 

###### slot: 
    name: Frame-content

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
