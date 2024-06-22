import { LinkedIn, GitHub, GitLab } from '@/components/icons'

import { Project } from '@/types'
import IconLink from '@/components/icon-link'
import ProjectCard from '@/components/project-card'
import projects from '@/assets/projects.json'

export default function HomePage() {
  const socialLinks = [
    { icon: <LinkedIn className="h-5 w-5" />, url: 'https://linkedin.com/in/mario-sanchez-luque' },
    { icon: <GitHub className="h-5 w-5" />, url: 'https://github.com/icutum' },
    { icon: <GitLab className="h-5 w-5" />, url: 'https://git.icutum.es/root' },
  ]

  const featuredProjects = projects.filter(project => project.featured) as Project[]

  const dob = new Date('2002-04-27').getFullYear()
  const today = new Date().getFullYear()
  const age = today - dob

  return (
    <>
      <header className="space-y-4">
        <h1 className="text-2xl font-bold tracking-tight">Hello! I'm Mario</h1>

        <p>Full-stack Web Developer aspiring to become a DevOps Engineer. I love tinkering with Linux and other open source projects in my free time.</p>
        <p>My favorite programming languages are JavaScript / TypeScript and my favorite tech stack is MERN, but I also enjoy using other frameworks such as Django or Spring Boot.</p>

        <section className='space-x-2'>
          { socialLinks.map(link => (
            <IconLink key={link.url} to={link.url}>
              { link.icon }
            </IconLink>
          )) }
        </section>
      </header>

      <section className="space-y-4">
        <h2 className="text-lg font-bold tracking-tight">Featured Projects</h2>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          { featuredProjects.map(project => (
            <ProjectCard key={project.name} project={project} />
          )) }
        </div>
        <a href="https://github.com/icutum?tab=repositories" className="inline-block underline" target="_blank" rel="noopener noreferrer">
          View all projects
        </a>
      </section>

      <section className="space-y-4 pb-10">
        <h2 className="text-lg font-bold tracking-tight">About me</h2>

        <p>I'm a {age} year old programmer based in Spain. Since I was a kid I had a special interest in computers, and that's what made me start learning about IT in general. I quickly became tech savvy and determined to build things that could help other people.</p>
        <p>I decided to focus on web development back in 2019 and I haven't stopped learning new things ever since. I'm currently working as a fullstack web developer and I'm also working on personal projects in the meantime, like my homelab in which this portfolio is currently being hosted.</p>
      </section>
    </>
  )
}
