import axios from "axios";

export interface ILoginParams {
  email: string;
  password: string;
}

export const getApiUrl = () => process.env.EXPO_PUBLIC_FOLDER_API_BASE_URL || "http://localhost:5000/api/v1";

export const FolderApi = {
  /**
   * log he user to get a token
   * 
   * @param params a body that contains email and password
   * @returns 
   */
  async login (params: ILoginParams) {
    try {      
      const response = await axios.post(getApiUrl() + "/auth/login", {
        ...params
      });

      return response.data;
    } catch (error) {
      console.error({error})
      return false;
      
    }
  }
}