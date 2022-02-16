import { ApiClient } from "../config";
const authApi =  {
  registerApi: async (payload) => {
    return await ApiClient.post("/auth/register", payload)
  },
  loginApi: async (payload) =>{
    return await ApiClient.post("/auth/login" ,payload)
  }

}
export default authApi