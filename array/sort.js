/**
 * sort by attr
 */

let sortByAttr = attrName => {
    let sortFunction = attrName => {
        return (obj1,obj2) => {
            var value1 = obj1[attrName]
            var value2 = obj2[attrName]

            if (value1 < value2) {
                return -1
            } else if (value1 > value2) {
                return 1
            } else {
                return 0
            }
        }
    }
    return arr.sort( sortFunction(attrName) )
}