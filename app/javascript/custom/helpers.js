let blockClicksFor = (element, time) => {
    element.classList.add("pointer-none")

    setTimeout(() => {
        element.classList.remove("pointer-none")
    }, time * 1000)
}

export default blockClicksFor
