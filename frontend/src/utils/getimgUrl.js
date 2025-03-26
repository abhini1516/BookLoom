function getImgUrl (name) {
    return new URL (`../assests/books/$(name}`,import.meta.url)
}

export {getImgUrl}