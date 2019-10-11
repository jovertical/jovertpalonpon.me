import { Request, Response } from 'express'
import { controller, httpGet } from 'inversify-express-utils'
import Controller from './Controller'

@controller('/')
export class PagesController extends Controller {
    @httpGet('/')
    private index(req: Request, res: Response) {
        return res.send(`Hello! I'm Jovert`)
    }
}
