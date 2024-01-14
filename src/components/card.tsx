'use client'
import Loading from '@/app/loading'
import { useEffect, useState } from 'react'
import { DiceIcon, PatternDividerDesktop, PatternDividerMobile } from './icons'
import Message from './message'

export default function Card() {
  const [advice, setAdvice] = useState({ text: '', id: '' })
  const [isLoading, setIsLoading] = useState(true)

  async function getAdvice() {
    try {
      const res = await fetch('https://api.adviceslip.com/advice')
      const data = await res.json()
      const dataAdvice = {
        text: data.slip.advice,
        id: data.slip.id,
      }
      setAdvice(dataAdvice)
      setIsLoading(false) // Marque como não carregando após receber os dados
    } catch (error) {
      // Handle errors
    }
  }
  function handleClick() {
    setIsLoading(true)
    getAdvice()
  }

  useEffect(() => {
    getAdvice()
  }, [])
  return (
    <div className="relative mx-auto flex max-w-min flex-col gap-6 rounded-lg bg-[#1f2632] p-6 pb-16 text-center shadow-sm dark:bg-[#323a49]">
      <p className="text-sm uppercase tracking-widest text-[#52FFA8]">
        Advice # {advice.id}
      </p>
      {isLoading ? <Loading /> : <Message advice={advice.text} />}
      <div className="md:hidden">
        <PatternDividerMobile />
      </div>
      <div className="hidden md:block">
        <PatternDividerDesktop />
      </div>
      <button
        className="absolute -bottom-5 left-1/2 mx-auto flex -translate-x-1/2 items-center justify-center rounded-full bg-[#52FFA8] p-2 shadow-md hover:bg-[#00cc66] hover:shadow-[#00ff80]"
        type="button"
        onClick={handleClick}
      >
        <DiceIcon />
      </button>
    </div>
  )
}
