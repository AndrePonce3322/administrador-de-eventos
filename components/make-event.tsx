'use client'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from "react";
import EventDialog from "./event-dialog";

export default function MakeEventButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <EventDialog open={open} setOpen={setOpen} />

      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer rounded-lg w-full p-4 py-5 bg-gray-900 text-white flex items-center justify-between"
      >
        <div>
          <h4 className='text-lg font-medium'>Crear evento</h4>
          <span className='text-sm'>Lleva tu evento al siguiente nivel</span>
        </div>

        <div className="aspect-square w-12 flex items-center justify-center mr-1 rounded-xl bg-gradient-to-bl from-blue-500 via-purple-500 to-indigo-200">
          <ArrowForwardIcon />
        </div>
      </div>
    </>
  )
}
