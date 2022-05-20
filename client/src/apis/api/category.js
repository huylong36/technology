import { ApiClient } from "../config";
const categoryAPI =  {
    getCategory: async (payload) => {
      const data = await ApiClient.get("/get-category", payload)
    return data
  },

}
export default categoryAPI