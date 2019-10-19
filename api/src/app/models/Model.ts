import * as moment from 'moment'
import { PrimaryGeneratedColumn, Column } from 'typeorm'
import { now } from '../../helpers'

export default class Model {
    @PrimaryGeneratedColumn()
    id?: number

    @Column({ default: now() })
    createdAt?: string

    @Column({ default: now() })
    updatedAt?: string
}
