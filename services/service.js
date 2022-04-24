import { api } from "./api";

export const services = {
  getNews(){
    return api.get('https://raw.githubusercontent.com/eusousalvi/sandro-filho/main/db/db.json');
  }
}