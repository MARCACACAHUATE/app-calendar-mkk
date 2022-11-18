import { CalendarInfo } from '../../renderer/types/types'

export function CreateCalendar(actualYear: number, locale: string): CalendarInfo{

    // Dias de la semana
    const week_days = [...Array(7).keys()];
    const intl_week_days = new Intl.DateTimeFormat(locale, {weekday: 'long'});
    const week_days_name = week_days.map(weekDayIndex => {
        const date = new Date(2021, 10, weekDayIndex);
        const days_name = intl_week_days.format(date);
        return days_name;
    });

    // Total de meses del año
    const months = [...Array(12).keys()];
    const intl = new Intl.DateTimeFormat(locale, {month: 'long'});

    // Genera la duracion de los meses
    const calendar = months.map((monthKey) =>{
        const month_name = intl.format(new Date(actualYear, monthKey));
        // recuperar el total de dias del mes
        let nextMonthKey = monthKey + 1;
        const daysOfMonth = new Date(actualYear, nextMonthKey, 0).getDate();
        const start_on = new Date(actualYear, monthKey, 1).getDay();


        return {
            year: actualYear,
            month_name,
            daysOfMonth,
            start_on
        }
    });

    return {
        calendar,
        week_days_name
    }
}
