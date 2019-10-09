import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm'

@Entity({ name: 'projects' })
export default class Project {
    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    name?: string

    @Column({ nullable: true })
    description?: string

    @CreateDateColumn()
    createdAt?: string

    @UpdateDateColumn()
    updatedAt?: string
}
