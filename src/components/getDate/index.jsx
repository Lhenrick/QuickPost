
export default function getDate(){

        const newDate = new Date();
        const year = newDate.getFullYear();
        const month = newDate.getMonth();
        const day = newDate.getDay();
        const date = `${month}/${day}/${year}`

    return date
}

