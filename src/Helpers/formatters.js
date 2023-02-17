function formatTimeStamp(timeStamp) {
    const dateObj = new Date(timeStamp)
    const dateArray = dateObj.toDateString().split(" ");
    const time = `${dateObj.toLocaleTimeString()}`

    return (
        <div id="time-stamp">
            <p>{time}</p>
            <p>{dateArray[1]} {dateArray[2]}</p>
        </div>
    )
    
}

export {formatTimeStamp};