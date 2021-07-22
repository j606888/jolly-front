const TOKEN = "token";
const REFRESH_TOKEN = "refresh_token";

class LocalDataService {
  getToken = () => localStorage.getItem(TOKEN);
  saveToken = (obj) => localStorage.setItem(TOKEN, obj);

  getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN);
  saveRefreshToken = (obj) => localStorage.setItem(REFRESH_TOKEN, obj);

  clear = () => localStorage.clear();
}

export default new LocalDataService();
