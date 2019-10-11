/**
 * Bootstrap file
 *
 * We initialize express here, set configurations (e.g. parsers) & declare endpoints.
 * This way, routes and default configurations are abstracted so that it can
 * be re-used somewhere else in the app.
 */
import * as express from 'express'
import * as bodyParser from 'body-parser'
import 'reflect-metadata'
import { Container } from 'inversify'
import { InversifyExpressServer } from 'inversify-express-utils'

// Register controllers
import './app/controllers/PagesController'
import './app/controllers/ProjectsController'

// Create the container
const container = new Container()

// Create the server
const server = new InversifyExpressServer(container)

// Configure express
server.setConfig((app: express.Application) => {
    // Add body parsers
    app.use(bodyParser.json())
})

const app = server.build()

export default app
