import { PrimaryGeneratedColumn, Column } from 'typeorm'
import { now } from '../../helpers/utils'

export default class Model {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  uuid?: string

  @Column({ default: now() })
  createdAt?: string

  @Column({ default: now() })
  updatedAt?: string
}
