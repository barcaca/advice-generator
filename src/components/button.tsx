import { DiceIcon } from './icons'

interface ButtonProps {
  isLoading: boolean
  onNewAdvice: () => void
}

export default function Button({ isLoading, onNewAdvice }: ButtonProps) {
  return (
    <button
      className="absolute -bottom-5 left-1/2 mx-auto flex -translate-x-1/2 items-center justify-center rounded-full bg-[#52FFA8] p-2 shadow-md hover:bg-[#00cc66] hover:shadow-[0_0_20px_rgb(0_255_128)] hover:shadow-[#00ff80]"
      type="button"
      onClick={onNewAdvice}
      disabled={isLoading}
      title="Button Random"
      aria-label={isLoading ? 'Loading...' : 'Get Random Advice'}
    >
      <DiceIcon
        className={`${isLoading ? 'animate-spin' : ''} transition-all`}
        aria-label="Dice icon representing a random advice"
      />
    </button>
  )
}
