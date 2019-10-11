/**
 * Bootstrap file
 *
 * We initialize express here, set configurations (e.g. parsers) & declare endpoints.
 * This way, routes and default configurations are abstracted so that it can
 * be re-used somewhere else in the app.
 */
import * as express from 'express'
import * as bodyParser from 'body-parser'
import appRoutes from './routes/app'
import projectRoutes from './routes/projects'
import { Environments } from 'typings/app'

// Create webserver
const app = express()

// Register parsers
app.use(bodyParser.json())

if (process.env.NODE_ENV === Environments.prod) {
    app.use(express.static(__dirname + '../../dist/app.js'))
}

// Load route files
app.use('/', appRoutes)
app.use('/projects', projectRoutes)

export default app
