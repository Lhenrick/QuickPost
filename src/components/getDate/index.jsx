
export default function getDate(){

        const newDate = new Date();
        const year = newDate.getFullYear();
        const month = newDate.getMonth() + 1;
        const day = newDate.getDate();
        const date = `${month}/${day}/${year}`

    return date
}

