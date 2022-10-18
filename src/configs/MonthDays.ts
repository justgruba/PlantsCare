

export function generateDates(month: number, year: number): {day?: number | false, month: number, year:number}[]{
    let dates: {day: number | false, month: number, year: number}[] = [];
    const days = countOfDaysInMonth(month, year);
    const getFirstDay = getFirstDayOfMonth(month, year);
    for(let i=1; i < getFirstDay; i++){
        dates.push({day: false, month: 0, year: 0});
    }
    for(let i=1; i <= days; i++){
        let date: number = i
        dates.push({day: i, month: month, year: year});
    }
    return dates;
}
function getFirstDayOfMonth(month: number, year:number): number{
    return new Date (year, month, 1).getDay();
}
function countOfDaysInMonth(month: number, year: number): number
{
    return new Date(year, month + 1, 0).getDate();
}
