import { injectable } from 'inversify'
import { interfaces } from 'inversify-express-utils'
import { createConnection, Connection, Repository } from 'typeorm'
import { getDatabaseConnection } from '../../helpers'
import Model from '../models/Model'

@injectable()
export default class Controller implements interfaces.Controller {
    /**
     * Get the repository of the model.
     *
     * @param model The model of the repository.
     */
    public getRepository(model: any): Promise<Repository<Model>> {
        return createConnection(getDatabaseConnection()).then((connection: Connection) => {
            const repo: Repository<Model> = connection.getRepository(model)

            connection.close()

            return repo
        })
    }
}
