import EventCard from '@/components/event-card';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CreateIcon from '@mui/icons-material/Create';
import HttpsIcon from '@mui/icons-material/Https';

export default function Account() {
  return (
    <main className="mt-4 px-4 select-none pb-[140px]">
      <div className="flex items-center">
        <div className="size-20 rounded-full bg-blue-500/10 text-blue-500 text-2xl flex items-center justify-center text-center font-bold relative">
          A

          <div className="absolute flex items-center justify-center bottom-0 -right-0 bg-white border border-black rounded-full aspect-square">
            <CreateIcon className='aspect-square p-1 text-black' />
          </div>
        </div>

        <div className="flex flex-col ml-3">
          <h3 className='font-semibold'>Andre Ponce</h3>
          <span className='text-sm text-gray-500'>Miembro</span>
        </div>
      </div>

      <div className="mt-8">
        <h3 className='font-semibold'>Información personal</h3>

        <div className="mt-3 text-sm flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span>
              <AlternateEmailIcon className='text-gray-500' /> andreponce@gmail.com
            </span>
            <span className='text-blue-500'>Editar</span>
          </div>

          <div className="flex items-center justify-between">
            <span className='flex items-center gap-1'>
              <HttpsIcon className='text-gray-500' /> ***********
            </span>
            <span className='text-blue-500'>Ver contraseña</span>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className='font-semibold'>Cancelar evento</h3>

        <div className="flex flex-col gap-3 mt-3">
          <EventCard
            title='Hackathon Tecnológico'
            description='Únete a la competencia de desarrollo y demuestra tus habilidades'
            date='julio 15, 2024'
            endDate='julio 17, 2024'
            eventGoal='Crear soluciones innovadoras en 48 horas'
            cancelEvent
          />
        </div>
      </div>

    </main>
  )
}
