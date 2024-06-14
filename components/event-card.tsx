import EventIcon from '@mui/icons-material/Event';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { Button } from '@mui/material';

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  endDate: string;
  eventGoal: string;
}

export default function EventCard({ title, description, date, endDate, eventGoal }: EventCardProps) {
  return (
    <div className={`rounded-lg w-full p-4 py-5 bg-blue-500/10`}
    >
      <div>
        <h4 className='text-lg font-semibold'>{title}</h4>
        <span className='text-sm'>{description}</span>
      </div>

      <div className="h-[1px] w-full bg-black my-3" />

      <section className="flex flex-col gap-2">
        <div className="flex items-center text-sm gap-1">
          <EventIcon fontSize='small' />
          <span>{date} </span>
        </div>

        <div className="flex items-center text-sm gap-1">
          <EventAvailableIcon fontSize='small' />
          <span>{endDate}</span>
        </div>
      </section>

      <Button
        size='small'
        variant='contained'
        className=' !mt-4'>
        Asistir al evento
      </Button>

      <div className='mt-2'>
        <small>
          Objetivo: {eventGoal}
        </small>
      </div>

    </div>
  )
}
