import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import TechnologyTag from '@/components/technology-tag'
import { Project } from '@/types'

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Readonly<Props>) {
  const MAX_BADGES = 3
  const firstTechnologies = project.technologies.slice(0, MAX_BADGES)
  const restTechnologies = project.technologies.slice(MAX_BADGES)

  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer">
      <Card className="transition-all duration-300 hover:-translate-y-2 hover:border-neutral-400">
        <CardHeader>
          <CardTitle className="text-lg">{project.name}</CardTitle>
          <CardDescription>{project.short_description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          { firstTechnologies.map(technology => (
            <TechnologyTag key={technology.name} technology={technology} />
          )) }

          { project.technologies.length > MAX_BADGES &&
            <TechnologyTag>
              +{restTechnologies.length}
            </TechnologyTag>
          }
        </CardContent>
      </Card>
    </a>
  )
}
