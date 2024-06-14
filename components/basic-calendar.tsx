'use client'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function AddWeekNumber() {
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={{
        calendarWeekNumberHeaderText: '#',
        calendarWeekNumberText: (weekNumber) => `${weekNumber}.`,
      }}
    >
      <DateCalendar displayWeekNumber className='!m-0' />
    </LocalizationProvider>
  );
}