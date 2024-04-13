import { api } from "~/api/instance"

export default function useCourses(){

  const getCourses = async () => {
    const response = await api.get('/posts')
    return response.data
  }
  const getCourseById = async (id: string) => {
    const response = await api.get('/course/' + id)
    return response.data
  }

  return {
    getCourses, getCourseById
  }
}