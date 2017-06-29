/**
 * 封装订阅分发模式
 */

class Event{
    constructor(){
        this.obj = {}
    }

    subscript(_status,handle){
        this.obj[_status] = this.obj[_status] || []
		this.obj[_status].push(handle)
    }

    publish(_status){
        let listeners = this.obj[_status]
        if(listeners){
            for (var i = 0; i<listeners.length; i++) {
                listeners[i]()
            }
        }
    }

    unsubscript(_status,handle){
        let listeners = this.obj[_status]
        if(listeners){
            for (var i = 0; i<listeners.length; i++) {
                if(listeners[i] === handle){
                    listeners.spilce(i,1)
                    break
                }
            }
        }
    }
}