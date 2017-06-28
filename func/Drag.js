class Drag {
	constructor(ele){
		this.disX = this.disY = 0
		this.x = this.y = 0
		this.init(ele)
	}

	init(ele){
		this.ele = ele
		this.down = this._downFn.bind(this)
		this.ele.addEventListener('mousedown',this.down)
	}

	_downFn(e){
		this.move = this._moveFn.bind(this)
		this.up = this._upFn.bind(this)

		this.disX = e.pageX - this.ele.offsetLeft
		this.disY = e.pageY - this.ele.offsetTop

		document.addEventListener('mousemove',this.move)
		document.addEventListener('mouseup',this.up)
	};

	_moveFn(e){
		this.x = e.pageX - this.disX
		this.y = e.pageY - this.disY
		this.ele.style.left = this.x + 'px'
		this.ele.style.top = this.y + 'px'
	};

	_upFn(){
		document.removeEventListener('mousemove',this.move)
		document.removeEventListener('mouseup',this.up)
	}
}
