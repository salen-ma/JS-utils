# Some JavaScript utils for daily use

## browser-storage
### cookie
- cookie(key) 取cookie值
- cookie(key,value,time) 设置cookie值，time是cookie有效天数
- removeCookie(key) 移除cookie值

### localstorag
- store.save(key, value) 保存localstorage值
- store.fetch(key) 取localstorage值
- store.remove(key) 移除指定localstorage值
- store.clear() 移除所有localstorage值

## http
### ajax
- ajax({
        url: String,
        data: String,
        methods: 'get/post',
        success: Function,
        error: Function
    })

### upload
- upload(url,iptFile) iptFile,上传表单控件元素

## Array
- flatten(arr) 将多维数组降为一维
- sortByAttr(attrName) 依据属性值排序对象

## func
- new Drag(ele) 拖拽元素