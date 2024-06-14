import Footer from '@/components/footer'
import NotificationsIcon from '@mui/icons-material/Notifications'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="bg-gray-900 py-4 w-full flex items-center justify-between px-4 text-white">
        <div className="size-8  rounded-full bg-white/40 flex items-center justify-center text-center">
          A
        </div>

        <h3 className='text-xl font-bold'>WebAPP2024</h3>

        <div className='p-2 rounded-full hover:bg-white/5'>
          <NotificationsIcon className='size-6' />
        </div>
      </header>
      
      {children}

      <Footer />
    </>
  )
}
