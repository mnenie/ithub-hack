import { api } from '~/api/instance';
import type { AxiosResponse } from 'axios';

/**
 * Service class for /get courses + courses:id.
 */
export default class CourseService {
  static async getAllCourses(): Promise<AxiosResponse<Course[]>> {
    const response = await api.get('/posts');
    return response;
  }
  static async getCourseById(id: string): Promise<AxiosResponse<Course>> {
    const response = await api.get('/posts/' + id);
    return response;
  }
}
