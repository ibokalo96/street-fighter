import { callApi } from '../helpers/apiHelper';
import {fightersDetails} from '../helpers/mockData';

class FighterService {
  async getFighters() {
    try {
      const endpoint = 'fighters.json';
      const apiResult = await callApi(endpoint, 'GET');

      return apiResult;
    } catch (error) {
      throw error;
    }
  }

  async getFighterDetails(id) {
    try {
      // couldnt load the data from EP
      // const endpoint = 'details/fighter/${id}.json';
      // const apiResult = await callApi(endpoint, 'GET');
      console.log(
        'fightersDetails',
        fightersDetails.filter((fighter) => fighter._id === id)
      );
      return fightersDetails.filter((fighter) => fighter._id === id);
    } catch (error) {
      throw error;
    }
    // todo: implement this method
    // endpoint - details/fighter/${id}.json;
  }
}

export const fighterService = new FighterService();
