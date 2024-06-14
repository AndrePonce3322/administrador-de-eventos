import { cn } from "@/lib/utils";

export default function ProfileImage({ className }: { className?: string }) {
  return (
    <div className={
      cn('size-5 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center text-center font-semibold relative',
        className
      )
    }>
      A
    </div>
  )
}
