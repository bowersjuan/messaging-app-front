function formatTimeStamp(timeStamp) {
    const dateObj = new Date(timeStamp)
    const dateArray = dateObj.toDateString().split(" ");

    return `${dateArray[1]} ${dateArray[2]}`
}

export {formatTimeStamp};