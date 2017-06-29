/**
 * 封装滚轮事件，兼容处理
 */
function wheelEvent(obj,fnUp,fnDown){
    if(window.navigator.userAgent.includes('Firefox')){
        obj.addEventListener('DOMMouseScroll',fn)
    }else{
        obj.addEventListener('mousewheel',fn)
    }

    function fn(e){
        let diration
        if(e.wheelDelta){
            diration = e.wheelDelta > 0 ? true : false
        }
        if(e.detail){
            diration = e.detail < 0 ? true : false
        }
        if(diration){
            if(typeof fnUp === 'function'){
                fnUp.call(obj)
            }
        }else{
            if(typeof fnDown === 'function'){
                fnDown.call(obj)
            }
        }
    }
}