import { PrimaryGeneratedColumn, Column } from 'typeorm'
import { now } from '../../helpers'

export default class Model {
    @PrimaryGeneratedColumn('uuid')
    id?: string

    @Column({ default: now() })
    createdAt?: string

    @Column({ default: now() })
    updatedAt?: string
}
