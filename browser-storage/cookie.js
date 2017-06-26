/**
 * get/set cookie
 */
let cookie = (...rest) => {
    // get cookie
    if (rest.length === 1) {
        let cookies = document.cookie
        let target = cookies.split(';').filter(function (item) {
            return item.split('=')[0].trim() === rest[0]
        })
        target = target.length ? target[0].split('=')[1] : ''
        return target
    // set cookie
    } else if (rest.length >= 2) {
        let [key, val, time] = rest
        time = time*1
        let re = /\d/g
        if (re.test(time)) {
            let now = new Date()
            now.setDate(now.getDate() + time)
            document.cookie = `${key}=${val}; expires=${now.toUTCString()}`
        } else {
            document.cookie = `${key}=${val}`
        }
    } else {
        throw new Error('请填写参数')
    }
}

let removeCookie = (key) => {
    cookie(key, '', -1)
}