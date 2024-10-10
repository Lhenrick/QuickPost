
export default function getHour(){
        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const time = `${hour}:${minute}`;

        return time;
}