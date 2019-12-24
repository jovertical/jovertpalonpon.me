interface Model {
  id: number
  createdAt: string
  updatedAt: string
}

interface Tag extends Model {
  name: string
  description?: string
}

interface Project extends Model {
  slug: string
  name: string
  description: string
  startDate?: string
  sourceUrl?: string
  projectUrl?: string
  iconUrl?: string
  featuredAt?: string
  images?: ProjectImage[]
  tags?: Tag[]
  previousProject?: Project
  nextProject?: Project
}

interface ProjectImage {
  id: number
  url: string
}
