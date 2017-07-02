/**
 * quickSort
 */
let quickSort = arr => {
	let len = arr.length
	if(len <= 1){
		return arr
	}

	let middleNum = Math.ceil(len/2)
	let middleVal = arr.splice(middleNum,1)
	let left = []
	let right = []

	arr.forEach( (item,index) => {
		if(item < middleVal){
			left.push(item)
		}else{
			right.push(item)
		}
	} )

	return quickSort(left).concat(middleVal,quickSort(right))
}