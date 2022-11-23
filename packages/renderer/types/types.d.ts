export interface DateCalendarInfo {
    year: number
    month_name: string 
    daysOfMonth: number
    start_on: number
}

export interface CalendarInfo {
    calendar: Array<DateCalendarInfo>
    week_days_name: Array<string>
    actualDay: number
    actualMonth: number,
}


export interface ModalInfo {
    isOpen: boolean,
    setIsOpen: any
}
