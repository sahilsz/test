import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// Define a type for the API response
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

// Define a type for the API request parameters
interface ApiRequestParams<T> {
  url?: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  data?: T | null;
  headers?: Record<string, string>;
  successDefaultMessage?: string;
  responseType?:
    | 'json'
    | 'text'
    | 'blob'
    | 'document'
    | 'arraybuffer'
    | 'stream'
    | '';
}

export const apiRequest = async <T>({
  url = '',
  method = 'GET',
  data = null,
  headers = {},
  successDefaultMessage = 'Request Successful!',
  responseType = '',
}: ApiRequestParams<T> = {}): Promise<ApiResponse<T>> => {
  try {
    const response: AxiosResponse<T> = await axios({
      url,
      method,
      data,
      headers,
      responseType,
    });

    const isSuccess = response.data?.success;
    const message =
      response.data?.message ||
      (isSuccess
        ? successDefaultMessage || 'Operation Successfully'
        : response?.data?.data?.message || 'Something Went Wrong!');

    return {
      success: isSuccess,
      data: response.data || {},
      message,
    };
  } catch (error: any) {
    const errorMessage =
      error.response?.data?.data?.error ||
      error.response?.data?.data?.message ||
      error.response?.data?.message ||
      error.message ||
      'Something Went Wrong!';

    return {
      success: false,
      data: {},
      message: errorMessage,
    };
  }
};
