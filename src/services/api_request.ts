import Axios, {
    
    AxiosRequestConfig,
   
  } from "axios";
  
  export default async function initApiRequest(
    apiDetails: any,
    requestData: any,
    requestMethod: any,
    params?: any,
    apiUrl?: string,
    cancelSource?: any
  ) {
    //console.log('params',params)
    // API URL
    let url = apiUrl || 'http://localhost:3000'

    //console.log('req',requestData);
    let axiosReqParams: AxiosRequestConfig = {
      url: apiDetails,
      method: requestMethod,
      baseURL: url,
      responseType: "json",
      timeout: 60 * 3 * 1000,
      data: requestData,
  
  
    };
  
    if (params) {
      axiosReqParams = {
        ...axiosReqParams,
        params: params,
      };
    }
  
    try {
      const response = await Axios.request(axiosReqParams);
      console.log(response, "response")
      return response;
    } catch (error) {
      throw error;
    }
  }
  