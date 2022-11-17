export interface DateCalendarInfo {
    month_name: string 
    daysOfMonth: number
    start_on: number
}

export interface CalendarInfo {
    calendar: Array<DateCalendarInfo>
    week_days_name: Array<string>
}
