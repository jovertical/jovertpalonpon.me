import { Column, Entity, ManyToMany } from 'typeorm'
import BaseEntity from './Entity'
import Project from './Project'

@Entity({ name: 'tags' })
export default class Tag extends BaseEntity {
  @Column()
  name: string

  @Column({ nullable: true })
  description?: string

  @ManyToMany(
    type => Project,
    project => project.tags
  )
  projects: Project[]
}
