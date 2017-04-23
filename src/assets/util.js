export function oneOf(val, list) {
    for (let i = 0; i < list.length; i ++) {
        if (val === list[i]) {
            return true
        }
    }
    return false
}