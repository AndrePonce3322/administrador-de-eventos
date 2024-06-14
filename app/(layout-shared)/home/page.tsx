import BasicDateCalendar from '@/components/basic-calendar';
import EventCard from '@/components/event-card';
import MakeEventButton from '@/components/make-event';

export default function Home() {
  return (
    <main className='select-none min-h-[100dvh] pb-[140px]'>
      <article className="mt-4 px-4">
        <MakeEventButton />

        <section className='mt-6'>
          <h2 className='text-2xl font-bold'>Calendario</h2>
          <BasicDateCalendar />
        </section>

        <section className='mt-6'>
          <h2 className='text-2xl font-bold'>Eventos en curso</h2>

          <div className="mt-4 flex flex-col gap-3">
            <EventCard
              title='Hackathon Tecnológico'
              description='Únete a la competencia de desarrollo y demuestra tus habilidades'
              date='julio 15, 2024'
              endDate='julio 17, 2024'
              eventGoal='Crear soluciones innovadoras en 48 horas'
              isEventInProcess
            />

            <EventCard
              title='Conferencia de Desarrollo Sostenible'
              description='Explora cómo la tecnología puede impulsar la sostenibilidad'
              date='agosto 5, 2024'
              endDate='agosto 6, 2024'
              eventGoal='Inspirar acciones para un futuro más verde'
              isEventInProcess
            />

            <EventCard
              title='Taller de Introducción a la Inteligencia Artificial'
              description='Aprende los conceptos básicos de IA y su aplicación en el desarrollo web'
              date='septiembre 10, 2024'
              endDate='septiembre 11, 2024'
              eventGoal='Capacitar a los participantes en el uso de IA en proyectos web'
              isEventInProcess
            />

            <EventCard
              title='Competencia de Desarrollo Frontend'
              description='Muestra tu destreza en la creación de interfaces de usuario'
              date='octubre 20, 2024'
              endDate='octubre 21, 2024'
              eventGoal='Premiar la creatividad y la eficiencia en el desarrollo frontend'
              isEventInProcess
            />
          </div>
        </section>
      </article>
    </main>
  )
}
