import { ApiClient } from "../config";
const authApi =  {

  registerApi: async (payload) => {
    return await ApiClient.post("/auth/register", payload)
  },

}
export default authApi