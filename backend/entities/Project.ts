import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne
} from 'typeorm'
import BaseEntity from './Entity'
import ProjectImage from './ProjectImage'
import Tag from './Tag'

@Entity({ name: 'projects' })
export default class Project extends BaseEntity {
  @Column()
  slug: string

  @Column()
  name: string

  @Column({ nullable: true })
  description?: string

  @Column()
  startDate: string

  @Column({ nullable: true })
  sourceUrl?: string

  @Column({ nullable: true })
  projectUrl?: string

  @Column({ nullable: true })
  iconUrl?: string

  @OneToOne(type => ProjectImage, { eager: true })
  @JoinColumn()
  image?: ProjectImage

  @OneToMany(
    type => ProjectImage,
    image => image.project,
    { eager: true }
  )
  images: ProjectImage[]

  @ManyToMany(
    type => Tag,
    tag => tag.projects,
    { eager: true }
  )
  @JoinTable()
  tags: Tag[]
}
