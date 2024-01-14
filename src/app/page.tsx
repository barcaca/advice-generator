import Card from '@/components/card'
import { IntroFooter } from '@/components/footer'
import { ThemeToggle } from '@/components/themetoggle'

export default async function Home() {
  return (
    <div className="mx-auto grid h-screen grid-rows-[1fr_100px] items-center justify-center">
      <ThemeToggle />
      <Card />
      <IntroFooter />
    </div>
  )
}
