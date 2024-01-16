import { IconLink } from './icon-link'
import { FrontEndMentorIcon, GitHubIcon } from './icons'

// Componente de rodapé introdutório
export function IntroFooter() {
  return (
    <footer className="mt-4 flex justify-center gap-x-2 text-[0.8125rem]/6  ">
      <IconLink
        href="https://www.frontendmentor.io/profile/Barcaca"
        icon={FrontEndMentorIcon}
      >
        Frontend Mentor
      </IconLink>
      <IconLink href="https://github.com/Barcaca" icon={GitHubIcon}>
        {/* Link to the developer's homepage */}
        Github
      </IconLink>
    </footer>
  )
}
