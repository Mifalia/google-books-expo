import axios from "axios";
import { ILoginParams, IRegistrationParams } from "@/utils/validators/authValidators";

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
  },

  /**
   * Registers a user.
   * @param params - The registration parameters.
   * @returns The response data if successful, otherwise false.
   */
  async register(params: IRegistrationParams) { 
    try {
      const response = await axios.post(getApiUrl() + "/auth/register", {
        ...params
      });

      return response.data;
    } catch (error) {
      console.error({error})
      return false;
    }
  }
}
