import { Column, Entity, OneToMany } from 'typeorm'
import Model from './Model'
import ProjectImage from './ProjectImage'

@Entity({ name: 'projects' })
export default class Project extends Model {
  @Column()
  slug: string

  @Column()
  name: string

  @Column({ nullable: true })
  description?: string

  @Column()
  startDate: string

  @Column({ nullable: true })
  githubUrl?: string

  @Column({ nullable: true })
  projectUrl?: string

  @Column({ nullable: true })
  featuredAt?: string

  @OneToMany(
    type => ProjectImage,
    image => image.project,
    { eager: true }
  )
  images: ProjectImage[]
}
