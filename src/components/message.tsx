interface MessageProps {
  advice: string
}

export default function Message({ advice }: MessageProps) {
  return (
    <h1 className="font-sans text-2xl text-[#cee3e9]">&quot;{advice}&quot;</h1>
  )
}
