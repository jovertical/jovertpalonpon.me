import * as uuid from 'uuid/v4'
import { Repository } from 'typeorm'
import Project from './app/models/Project'
import { getRepository, now } from './helpers/utils'

console.log('Seeding Projects...')
getRepository(Project).then((repo: Repository<Project>) => {
  repo.save({
    uuid: uuid(),
    name: 'Pushfit',
    description:
      "PushFit is the internet's premier video platform for fitness enthusists.",
    startDate: '2019-02-25',
    projectUrl: 'https://pushfit.tv',
    featuredAt: now()
  })

  repo.save({
    uuid: uuid(),
    name: 'Workgalore',
    description: 'Find work from dozens of websites, all in one place.',
    startDate: '2019-06-16',
    projectUrl: 'https://work-galore.com',
    featuredAt: now()
  })

  repo.save({
    uuid: uuid(),
    name: 'Laravel React Admin',
    description: 'A fully featured custom content management system (CMS).',
    startDate: '2018-11-05',
    projectUrl: 'https://laravel-react-admin.herokuapp.com',
    featuredAt: now()
  })

  repo.save({
    uuid: uuid(),
    name: 'Caribbean Waterpark',
    description:
      'Elegant booking system with landing page for Caribbean Waterpark Resort.',
    startDate: '2018-01-22',
    projectUrl: 'https://caribbean-waterpark.herokuapp.com'
  })

  console.log('Finished seeding Projects!')
})
