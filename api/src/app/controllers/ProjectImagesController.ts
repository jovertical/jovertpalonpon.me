import { Response } from 'express'
import { controller, requestParam, response } from 'inversify-express-utils'
import Controller from './Controller'

@controller('/projects/:id/images')
export default class ProjectImagesController extends Controller {
    /**
     * Store a new project image
     *
     * @param id The ID of the project
     */
    public async store(@response() res: Response, @requestParam('id') id: string): Promise<Response> {
        return res.send('...' + id)
    }
}
