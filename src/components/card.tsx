'use client'
import Loading from '@/app/loading'
import { useEffect, useState } from 'react'
import Button from './button'
import { PatternDividerDesktop, PatternDividerMobile } from './icons'
import Message from './message'

export default function Card() {
  const [randomAdvice, setRandomAdvice] = useState({ text: '', id: '' })
  const [isLoading, setIsLoading] = useState(true)

  function fetchNewAdvice() {
    if (!isLoading) {
      setIsLoading(true)
      fetchRandomAdvice()
    }
  }
  async function fetchRandomAdvice() {
    try {
      const res = await fetch('https://api.adviceslip.com/advice')
      const data = await res.json()
      const dataAdvice = {
        text: data.slip.advice,
        id: data.slip.id,
      }
      console.log(dataAdvice)

      setTimeout(() => {
        setRandomAdvice(dataAdvice)
        setIsLoading(false)
      }, 1000)
      // Marque como não carregando após receber os dados
    } catch (error) {
      // Handle errors
    }
  }
  useEffect(() => {
    fetchRandomAdvice()
  }, [])

  return (
    <section
      className="relative mx-auto flex min-h-64 max-w-min flex-col gap-6 rounded-lg bg-[#1f2632] p-6 pb-16 text-center shadow-sm dark:bg-[#323a49]"
      role="status"
    >
      <p className="text-sm uppercase tracking-widest text-[#52FFA8]">
        Advice # {randomAdvice.id}
      </p>
      {isLoading && <Loading aria-live="polite" />}
      {!isLoading && (
        <Message advice={randomAdvice.text} aria-label="Advice message" />
      )}
      <div className="md:hidden">
        <PatternDividerMobile aria-hidden="true" />
      </div>
      <div className="hidden md:block">
        <PatternDividerDesktop aria-hidden="true" />
      </div>
      <Button onNewAdvice={fetchNewAdvice} isLoading={isLoading} />
    </section>
  )
}
