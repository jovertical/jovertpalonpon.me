interface Project {
  id: number
  slug: string
  name: string
  description: string
  startDate?: string
  sourceUrl?: string
  projectUrl?: string
  featuredAt?: string
  images?: ProjectImage[]
  createdAt: string
  updatedAt: string
}

interface ProjectImage {
  id: number
  url: string
}
