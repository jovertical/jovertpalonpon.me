import React, { useEffect, useState } from 'react'
import Card from '@components/Card'
import Layout from '@components/Layout'
import Loader from '@components/Loader'
import Text from '@components/Text'
import { get } from '@helpers/api'

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    get('/projects').then(({ status, body }) => {
      switch (status) {
        case 200:
          setProjects(body)
          break
        default:
          throw new Error('Error fetching: /projects')
      }

      setLoading(false)
    })
  }, [])

  return (
    <Layout>
      <Text>Projects List</Text>
      {loading ? <Loader /> : null}
    </Layout>
  )
}

export default Projects
