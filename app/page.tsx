import MenuIcon from '@mui/icons-material/Menu';
import { Button, TextField } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pb-28">
      <header className="bg-gray-900 py-5 w-full flex items-center justify-between px-4 text-white">
        <div className="flex items-center gap-3">
          <div className="aspect-square w-8 bg-[#eaeaea]"></div>
          <h3 className='text-xl font-bold'>WebAPP2024</h3>
        </div>

        <Button className="!text-white" size="small">
          <MenuIcon />
        </Button>
      </header>

      <article className="mt-12">
        <header className="px-2">
          <h2 className="text-2xl font-bold mb-4">Bienvenido a WebAPP2024</h2>
          <p className="text-gray-600 mb-8">Únete a emocionantes eventos y alcanza tus objetivos con nuestra plataforma web de gestión de eventos.</p>
        </header>

        <section className="mt-5 px-2 !text-black/60">
          <form className="w-full flex flex-col p-8 border text-sm rounded-sm">
            <h5 className="font-bold text-sm">Ya tienes una cuenta?</h5>

            <div className="mt-8 flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="outline-basic">Correo electrónico</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Correo electrónico"
                  type="email"
                />
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="outline-basic">Contraseña</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="border border-black"
                  placeholder="Contraseña"
                  type="password"
                />
              </div>
            </div>

            <div className="mt-8 text-center text-sm flex flex-col gap-4">
              <p>Al hacer clic en <strong>Iniciar Sesión</strong> acepta nuestros <br />
                <a href="https://terminos-y-condiciones" className="text-blue-600">Terminos y condiciones</a>
              </p>

              <Link href={'/home'} className="w-full">
                <Button className="!bg-gray-900 w-full" variant="contained">Iniciar Sesión</Button>
              </Link>
              <span className="text-xs text-right text-gray-600 font-medium underline">¿Olvidaste tu contraseña?</span>
            </div>
          </form>
        </section>
      </article>
    </main>
  )
}
