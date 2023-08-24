import { useState, useEffect } from 'react'
import { createClient } from 'contentful'

const client = createClient({
  space: '5zb8dzau9crg',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
})

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])

  const fetchData = async () => {
    try {
      const resp = await client.getEntries({
        content_type: 'projects',
      })
      const projects = resp.items.map((item) => {
        const { title, url, image } = item.fields
        const id = item.sys.id
        const img = image?.fields?.file?.url

        return { title, url, id, img }
      })

      setProjects(projects)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { loading, projects }
}
