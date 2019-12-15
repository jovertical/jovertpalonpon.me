import { Column, Entity } from 'typeorm'
import Model from './Model'

@Entity({ name: 'projects' })
export default class Project extends Model {
  @Column()
  name?: string

  @Column({ nullable: true })
  description?: string

  @Column()
  startDate?: string

  @Column({ nullable: true })
  projectUrl?: string

  @Column({ nullable: true })
  featuredAt?: string
}
