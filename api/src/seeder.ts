import { Repository } from 'typeorm'
import Project from 'app/models/Project'
import ProjectImage from 'app/models/ProjectImage'
import { getRepository, now, slugify } from 'helpers/utils'

console.log('Seeding Projects...')
getRepository(Project)
  .then((projectRepo: Repository<Project>) => {
    getRepository(ProjectImage).then(async (repo: Repository<ProjectImage>) => {
      await projectRepo.save({
        slug: slugify('Pushfit'),
        name: 'Pushfit',
        description:
          "PushFit is the internet's premier video platform for fitness enthusists.",
        startDate: '2019-02-25',
        projectUrl: 'https://pushfit.tv',
        featuredAt: now(),
        images: await repo.save([{ url: '/png/projects/pushfit.png' }])
      })

      await projectRepo.save({
        slug: slugify('My Website'),
        name: 'My Website',
        description:
          'My personal website where I showcase my work as a professional.',
        startDate: '2019-10-02',
        sourceUrl: 'https://github.com/palonponjovertlota/me',
        projectUrl: 'https://jovertpalonpon.me',
        featuredAt: now(),
        images: await repo.save([{ url: '/png/projects/my-website.png' }])
      })

      await projectRepo.save({
        slug: slugify('Workgalore'),
        name: 'Workgalore',
        description: 'Find work from dozens of websites, all in one place.',
        startDate: '2019-06-16',
        projectUrl: 'https://work-galore.com',
        featuredAt: now(),
        images: await repo.save([{ url: '/png/projects/workgalore.png' }])
      })

      await projectRepo.save({
        slug: slugify('Laravel React Admin'),
        name: 'Laravel React Admin',
        description: 'A fully featured custom content management system (CMS).',
        startDate: '2018-11-05',
        sourceUrl: 'https://github.com/palonponjovertlota/laravel-react-admin',
        projectUrl: 'https://laravel-react-admin.herokuapp.com',
        featuredAt: now(),
        images: await repo.save([
          { url: '/png/projects/laravel-react-admin.png' }
        ])
      })

      await projectRepo.save({
        slug: slugify('Caribbean Waterpark'),
        name: 'Caribbean Waterpark',
        description:
          'Elegant booking system with landing page for Caribbean Waterpark Resort.',
        startDate: '2018-01-22',
        sourceUrl: 'https://github.com/palonponjovertlota/caribean-waterpark',
        projectUrl: 'https://caribbean-waterpark.herokuapp.com',
        images: await repo.save([
          { url: '/png/projects/caribbean-waterpark.png' }
        ])
      })
    })
  })
  .finally(() => console.log('Finished seeding Projects!'))
