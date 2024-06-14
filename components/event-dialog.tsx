import Link from "next/link";
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import CloseIcon from '@mui/icons-material/Close';

export default function EventDialog({ open, setOpen }: { open: boolean, setOpen: Function }) {

  return open && (
    <section
      onClick={() => {
        navigator.vibrate(50)
        setOpen(false)
      }}
      className="fixed inset-0 z-50 h-full min-w-full bg-black/10 backdrop-blur flex items-center justify-center px-6"
    >

      <Link
        onClick={(e) => e.stopPropagation()}
        className="p-6 w-full rounded-xl bg-white flex items-center gap-3 shadow-xl shadow-black/30 mb-10"
        href={'/event/create'}
      >
        <div className="rounded-full flex items-center justify-center p-2 text-blue-500 bg-gray-600/20">
          <EditCalendarIcon />
        </div>
        <div className="flex flex-col">
          <h5 className="font-semibold">Crear evento</h5>
          <span className="text-gray-600 text-sm">Planifica todo desde cero</span>
        </div>
      </Link>

      <div className="absolute bottom-10 w-full flex justify-center">
        <div
          className="p-5 aspect-square bg-white text-black flex items-center justify-center rounded-full cursor-pointer"
        >
          <CloseIcon fontSize="large" />
        </div>
      </div>

    </section>
  )
}
