export function toKRDateString(date){
    return date.toLocaleDateString("ko-KR").slice(0, -1);
}