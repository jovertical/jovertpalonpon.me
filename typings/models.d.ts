interface Project {
  id: number
  slug: string
  name: string
  description: string
  startDate?: string
  sourceUrl?: string
  projectUrl?: string
  iconUrl?: string
  featuredAt?: string
  images?: ProjectImage[]
  createdAt: string
  updatedAt: string
  previousProject?: Project
  nextProject?: Project
}

interface ProjectImage {
  id: number
  url: string
}
