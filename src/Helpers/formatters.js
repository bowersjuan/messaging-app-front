function formatTimeStamp(timeStamp) {
    const dateObj = new Date(timeStamp)
    const dateArray = dateObj.toDateString().split(" ");
    const time = `${dateObj.toLocaleTimeString()}`

    return `${time} ${dateArray[1]} ${dateArray[2]}`
}

export {formatTimeStamp};