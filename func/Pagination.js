class Page {
	constructor(options){
		this.obj = null
		this.defaults = {
			id: '',
			nowNum: 1,
			allNum: 5,
			visibleNum: 5
		}

		Object.assign(this.defaults,options)
		this._init()		
	}

	_init(){
		this.obj = document.getElementById(this.defaults.id)
		this.nowNum = this.defaults.nowNum
		this.allNum = this.defaults.allNum
		this.visibleNum = this.defaults.visibleNum		

		this._createPage()
		this._addEvent()
	}

	_createPage(){
		let first = document.createElement('a')
		first.className = 'first'
		first.innerHTML = '首页'
		first.href = '#1' 			
		this.obj.appendChild(first)	

		if(this.nowNum > 1){
			let prev = document.createElement('a')
			prev.className = 'prev'
			prev.innerHTML = '上一页'
			prev.href = '#' + (this.nowNum - 1)
			this.obj.appendChild(prev)
		}
		
		if(this.allNum <= this.visibleNum){
			for(let i=1; i<=this.allNum; i++){
				let oA = document.createElement('a')
				oA.href = '#' + i
				oA.innerHTML = this.nowNum*1 === i ? i : '[' + i + ']'
				this.obj.appendChild(oA)
			}
		}else{
			for(let i=1; i<=this.visibleNum; i++){
				let oA = document.createElement('a')

				if(this.nowNum <= Math.floor(this.visibleNum/2) ){
					oA.href = '#' +  i
					oA.innerHTML = this.nowNum*1 === i ? i : '[' + i + ']'
					this.obj.appendChild(oA)						
				}
				else if( (this.allNum - this.nowNum) <= Math.floor(this.visibleNum/2) ){
					oA.href = '#' + (this.allNum - this.visibleNum + i)
					oA.innerHTML = i === (this.visibleNum - (this.allNum - this.nowNum)) ? this.allNum - this.visibleNum + i : '[' + (this.allNum - this.visibleNum + i) + ']'
					this.obj.appendChild(oA)						
				}else{
					oA.href = '#' + (this.nowNum - Math.ceil(this.visibleNum/2) + i)
					oA.innerHTML = i === Math.ceil(this.visibleNum/2) ? this.nowNum - Math.ceil(this.visibleNum/2) + i : '[' + (this.nowNum - Math.ceil(this.visibleNum/2) + i) + ']'
					this.obj.appendChild(oA)
				}
			}				
		}

		if(this.nowNum < this.allNum){
			let next = document.createElement('a')
			next.className = 'next'
			next.innerHTML = '下一页'
			next.href = '#' + (this.nowNum*1 + 1)
			this.obj.appendChild(next)
		}	

		let last = document.createElement('a')
		last.className = 'last'
		last.innerHTML = '尾页'
		last.href = '#' + this.allNum 			
		this.obj.appendChild(last)		
	}

	_addEvent(){
		let This = this
		window.addEventListener('hashchange',function(){
			This.nowNum = window.location.hash.slice(1)
			This.obj.innerHTML = ''
			This._createPage()
		})
	}
}