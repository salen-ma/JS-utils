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
- let event =  new Event 事件方法，订阅发布事件
    event.subscript(_status,handle) 订阅 _status事件名 handle事件函数
    event.publish(_status) 触发事件
    event.unsubscript(_status,handle) 取消事件
- wheelEvent(obj,fnUp,fnDown) 
>滚轮事件，obj触发滚轮事件的元素，fnUp向上滚动触发的函数，fnDown向下滚动触发的函数

- new Page({
	id: String,			// 元素id
	nowNum: Number,		// 当前页
	allNum: Number,		// 总页数
	visibleNum: Number	// 显示页数
})