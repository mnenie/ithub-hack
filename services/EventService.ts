import { api } from '~/api/instance';
import type { AxiosResponse } from 'axios';

/**
 * Service class for /get events.
 */
export default class EventService {
  static async getAllEvents(): Promise<AxiosResponse<EventList[]>> {
    const response = await api.get('/events');
    return response;
  }
}
