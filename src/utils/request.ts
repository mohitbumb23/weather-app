import axios from 'axios';
import { API_URL, API_UNIT } from '../constant';

const APPID = process.env.REACT_APP_API_KEY;

export default class Request {
  client: any;
  constructor() {
    this.client = axios.create({
      baseURL: API_URL,
    });
  }

  get = async (path: string, params: any) => {
    try {
      const { data } = await this.client.get(path, {
        params: {
          ...params,
          APPID,
          units: API_UNIT,
        },
      });
      return data;
    } catch (err) {
      throw err.response.data;
    }
  };
}
