let ajax = opations => {
    var defaults = {
        url: '',
        data: '',
        methods: 'get',
        success: null,
        error: null
    }

    $.extend(defaults, opations);

    if (!defaults.url.trim()) {
        alert('请输入地址')
        return
    }

    var xhr = new XMLHttpRequest()

    if (defaults.methods === 'get') {
        defaults.url = defaults.url + '?' + defaults.data
    }

    xhr.open(defaults.methods, defaults.url, true)

    if (defaults.methods === 'get') {
        xhr.send()
    } else {
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.send(defaults.data)
    }

    xhr.onload = function () {
        if (xhr.status === 200) {
            if (typeof defaults.success === 'function') {
                defaults.success(xhr.responseText)
            }
        } else if (xhr.status === 404) {
            if (typeof defaults.error === 'function') {
                defaults.error(xhr.status, xhr.statusText)
            }
        }
    }

}