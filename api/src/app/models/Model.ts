import * as moment from 'moment'
import { PrimaryGeneratedColumn, Column } from 'typeorm'

export default class Model {
    @PrimaryGeneratedColumn()
    id?: number

    @Column({ default: moment().format('YYYY-MM-DD hh:mm:ss') })
    createdAt?: string

    @Column({ default: moment().format('YYYY-MM-DD hh:mm:ss') })
    updatedAt?: string
}
