import { api } from '~/api/instance';
import type { AxiosResponse } from 'axios';

/**
 * Service class for /get canteens.
 */
export default class CanteenService {
  static async getAllCanteens(): Promise<AxiosResponse<Canteen[]>> {
    const response = await api.get('/eateries');
    return response;
  }
}
