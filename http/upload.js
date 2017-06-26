/**
 * upload util
 */

let upload = (url,iptFile) => {
	let xhr = new XMLHttpRequest()
	xhr.open('post', url, true)
	xhr.upload.onprogress = (ev) => {
		let scale = Math.round((ev.loaded / ev.total) * 100)
	}	

	xhr.onload = () => {
		console.log('上传成功')
	}	

	let fileInfo = new FormData();
	fileInfo.append('file', iptFile[0].files[0])	
	xhr.send(fileInfo)
}