import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import Project from './Project'

@Entity({ name: 'project_images' })
export default class ProjectImage {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  url: string

  @ManyToOne(
    type => Project,
    project => project.images
  )
  project: Project
}
