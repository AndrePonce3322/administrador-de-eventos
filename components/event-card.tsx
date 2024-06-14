import EventIcon from '@mui/icons-material/Event';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { Button } from '@mui/material';
import ProfileImage from './profile-image';

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  endDate: string;
  eventGoal: string;
  cancelEvent?: boolean;
  isEventInProcess?: boolean;
  isEventFinished?: boolean;

}

export default function EventCard({
  title,
  description,
  date,
  endDate,
  eventGoal,
  isEventInProcess,
  isEventFinished,
  cancelEvent,
}: EventCardProps) {
  return (
    <div className={`rounded-lg w-full p-4 py-5 bg-blue-500/10 relative`}
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

      {!isEventInProcess && !cancelEvent && (
        <Button
          size='small'
          variant='contained'
          className=' !mt-4'>
          Asistir al evento
        </Button>
      )}

      {isEventInProcess && (
        <div className="flex items-center mt-4 gap-1">
          <ProfileImage />
          <span className='text-sm text-medium capitalize'>Evento registrado</span>
        </div>
      )}

      {cancelEvent && (
        <Button
          size='small'
          variant='contained'
          color='error'
          className=' !mt-4'>
          Cancelar evento
        </Button>
      )}

      <div className='mt-2'>
        <small>
          Objetivo: {eventGoal}
        </small>
      </div>

    </div>
  )
}
