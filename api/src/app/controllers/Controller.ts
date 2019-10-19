import { injectable } from 'inversify'
import { BaseHttpController } from 'inversify-express-utils'

@injectable()
export default class Controller extends BaseHttpController {}
