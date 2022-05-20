import { ApiClient } from "../config";
const blogAPI =  {
  createBlog: async (payload) => {
      const data = await ApiClient.post("/blog", payload)
    return data
  },
  getBlog: async (payload) =>{
    return await ApiClient.get("/blog/get-blog" ,payload)
  }

}
export default blogAPI