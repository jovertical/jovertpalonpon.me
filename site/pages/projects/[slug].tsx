import React from 'react'
import { useRouter } from 'next/router'
import Layout from '@components/Layout'

const Project: React.FC = () => {
  const router = useRouter()

  return (
    <Layout>
      <p>Project: {router.query.slug}</p>
    </Layout>
  )
}

export default Project
