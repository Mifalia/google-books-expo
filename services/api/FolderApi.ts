import axios from "axios";
import { ILoginParams, IRegistrationParams } from "@/utils/validators/authValidators";
import { IFolder } from "@/utils/validators/folderValidators";

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
  },

  /**
   * Retrieves a list of folders from the server.
   *
   * @param token - The authentication token as a string.
   * @returns The list of folders if the request is successful, or `false` if an error occurs.
   */
  async getFolders(token: string | null) {
    try {
      const response = await axios.get(getApiUrl() + "/dossiers", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      console.error({ error });
      return false;
    }
  },

  /**
   * Creates a new folder by sending a POST request to the server.
   *
   * @param params - An object containing the folder data and the authentication token.
   * @param params.data - The folder data to be created, adhering to the `IFolder` interface.
   * @param params.token - The authentication token as a string.
   * @returns The response data from the server if the request is successful, or `false` if an error occurs.
   */
  async createFolder({data, token}: {data: IFolder, token: string | null}) {
    try {
      const response = await axios.post(
        getApiUrl() + "/dossiers", 
        data, // Le corps de la requête
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    }
    catch (error) {
      return false;
    }
  },
}
