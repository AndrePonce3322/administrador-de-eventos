'use client'

import EventCard from "@/components/event-card";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

export default function Events() {
  const [event, setEvent] = useState('all-events')

  return (
    <main className='select-none min-h-[100dvh] pb-[140px] px-4'>

      <div className="flex justify-between items-center mt-4">
        <h2 className='text-2xl font-semibold'>Eventos</h2>

        {/* Filtrar por eventos en curso, eventos asistido y todos los eventos*/}

        <FormControl className="w-[185px]">
          <InputLabel id="demo-simple-select-label">Filtrar eventos</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={event}
            label="All events"
            onChange={(e) => { setEvent(e.target.value) }}
          >
            <MenuItem value={"all-events"}>Todos los eventos</MenuItem>
            <MenuItem value={'completed-events'}>Completados</MenuItem>
            <MenuItem value={'actual-events'}>En curso</MenuItem>
          </Select>
        </FormControl>

      </div>

      <div className="mt-4 flex flex-col gap-3">
        <EventCard
          title='Hackathon Tecnológico'
          description='Únete a la competencia de desarrollo y demuestra tus habilidades'
          date='julio 15, 2024'
          endDate='julio 17, 2024'
          eventGoal='Crear soluciones innovadoras en 48 horas'
        />

        <EventCard
          title='Conferencia de Desarrollo Sostenible'
          description='Explora cómo la tecnología puede impulsar la sostenibilidad'
          date='agosto 5, 2024'
          endDate='agosto 6, 2024'
          eventGoal='Inspirar acciones para un futuro más verde'
        />

        <EventCard
          title='Taller de Introducción a la Inteligencia Artificial'
          description='Aprende los conceptos básicos de IA y su aplicación en el desarrollo web'
          date='septiembre 10, 2024'
          endDate='septiembre 11, 2024'
          eventGoal='Capacitar a los participantes en el uso de IA en proyectos web'
        />

        <EventCard
          title='Competencia de Desarrollo Frontend'
          description='Muestra tu destreza en la creación de interfaces de usuario'
          date='octubre 20, 2024'
          endDate='octubre 21, 2024'
          eventGoal='Premiar la creatividad y la eficiencia en el desarrollo frontend'
        />

        <EventCard
          title='Foro de Innovación en Blockchain'
          description='Explora las últimas tendencias y aplicaciones de la tecnología blockchain'
          date='noviembre 12, 2024'
          endDate='noviembre 13, 2024'
          eventGoal='Promover el intercambio de conocimientos sobre blockchain'
        />

        <EventCard
          title='Ciclo de Charlas sobre Ciberseguridad'
          description='Aprende a proteger tus aplicaciones web contra amenazas cibernéticas'
          date='diciembre 3, 2024'
          endDate='diciembre 4, 2024'
          eventGoal='Concientizar sobre la importancia de la seguridad en línea'
        />

        <EventCard
          title='Concurso de Diseño UX/UI'
          description='Demuestra tu habilidad para crear experiencias de usuario excepcionales'
          date='enero 18, 2025'
          endDate='enero 19, 2025'
          eventGoal='Reconocer la excelencia en el diseño de interfaces'
        />

        <EventCard
          title='Encuentro de Desarrolladores Web Full Stack'
          description='Conéctate con otros profesionales y comparte tus experiencias'
          date='febrero 9, 2025'
          endDate='febrero 10, 2025'
          eventGoal='Fomentar la colaboración y el networking en la comunidad'
        />

        <EventCard
          title='Seminario sobre Desarrollo Ágil de Software'
          description='Descubre las mejores prácticas para un desarrollo rápido y eficiente'
          date='marzo 22, 2025'
          endDate='marzo 23, 2025'
          eventGoal='Promover la implementación de metodologías ágiles en proyectos web'
        />

        <EventCard
          title='Hackathon de Impacto Social'
          description='Únete a la competencia para crear soluciones tecnológicas que aborden problemas sociales'
          date='abril 14, 2025'
          endDate='abril 16, 2025'
          eventGoal='Generar innovación para el bienestar de la sociedad'
        />
      </div>
    </main>
  )
}
