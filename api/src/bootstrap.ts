/**
 * Bootstrap file
 *
 * Here, We set configurations, register services, controllers etc.
 * This way, routes and default configurations are abstracted so that it can
 * be re-used somewhere else in the app.
 */
import 'reflect-metadata'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as dotenv from 'dotenv'
import { Container } from 'inversify'
import { InversifyExpressServer } from 'inversify-express-utils'

// Load the Environment variables
dotenv.config()

// Register controllers
import './app/controllers/ProjectsController'

// Create the container
const container = new Container()

// Create the server
const server = new InversifyExpressServer(container)

// Configure express
server.setConfig((app: express.Application) => {
  app.use(bodyParser.json())
  app.use(
    cors({ origin: process.env.CORS_ORIGIN || 'https://www.jovertpalonpon.me' })
  )
})

const app = server.build()

export default app
