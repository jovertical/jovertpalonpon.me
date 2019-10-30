import { PrimaryColumn, Column, Generated } from 'typeorm'
import { now } from '../../helpers'

export default class Model {
    @PrimaryColumn()
    @Generated('uuid')
    id?: string

    @Column({ default: now() })
    createdAt?: string

    @Column({ default: now() })
    updatedAt?: string
}
