/**
 * get/set/remove/clear localstorage
 */
let store = {
    save(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    fetch(key, value) {
        return JSON.parse(localStorage.getItem(key)) || [];
    },
    remove(key) {
        localStorage.removeItem(key)
    },
    clear() {
        localStorage.clear()
    }
}