import * as uuidv4 from 'uuid/v4'
import { PrimaryColumn, Column } from 'typeorm'
import { now } from '../../helpers'

export default class Model {
    @PrimaryColumn({ default: uuidv4() })
    id?: string

    @Column({ default: now() })
    createdAt?: string

    @Column({ default: now() })
    updatedAt?: string
}
