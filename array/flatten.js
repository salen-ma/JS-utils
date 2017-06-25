/**
 * 数组降维
 */

function flatten(arr) {
    return arr.reduce(function (item1, item2) {
        return item1.concat(Array.isArray(item2) ? flatten(item2) : item2)
    }, [])
}
