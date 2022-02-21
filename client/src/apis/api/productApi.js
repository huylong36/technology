import { ApiClient } from "../config";
const productApi =  {
  createProductApi: async (payload) =>{
    return await ApiClient.post("/product/" ,payload)
  }

}
export default productApi