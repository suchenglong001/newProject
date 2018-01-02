export const isEqualKeys = (a, b) => {//比较两个object中的各个可枚举属性的值是否相等,相等返回true
    const aProps = Object.keys(a)
    const bProps = Object.keys(b)
    if (aProps.length != bProps.length) {
        return false
    }

    for (let i = 0; i < aProps.length; i++) {
        let propName = aProps[i]
        if (typeof (a[propName]) === "object" && typeof (b[propName]) === "object") {
            if (a[propName] === null && b[propName] == null) {
                continue
            }
            return isEqualKeys(a[propName], b[propName])
        }

        if (a[propName] !== b[propName]) {
            if(isNaN(a[propName]) && isNaN(b[propName])){
                continue
            }else{
                return false
            } 
        }
    }
    return true
}

export const isEqualOwnPropertys = (a, b) => {//比较两个object中的各个可枚举属性与不可枚举属性的值是否相等,相等返回true
    const aProps = Object.getOwnPropertyNames(a)
    const bProps = Object.getOwnPropertyNames(b)
    if (aProps.length != bProps.length) {
        return false
    }
    for (let i = 0; i < aProps.length; i++) {
        let propName = aProps[i]

        if (typeof (a[propName]) == "object" && typeof (b[propName]) == "object") {
            return isEqualOwnPropertys(a[propName], b[propName])
        }
        if (a[propName] !== b[propName]) {
            return false
        }
    }
    return true
}

export const isEqualArr = (a, b) => {//比较两个array中的各个元素可枚举属性的值是否相等,相等返回true
    if (a.length === b.length) {
        return !a.some((item, index) => {
            return !isEqualKeys(item, b[index])
        })
    } else {
        return false
    }
}