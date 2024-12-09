import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "http://localhost:5400",
});

export class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };

  create = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };

  login = (data: T) => {
    return axiosInstance
      .post<T>(`${this.endpoint}`, data)
      .then((res) => res.data);
  };

  delete = (id: number | string) => {
    return axiosInstance
      .delete<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
  update = (id: number | string, data: Partial<T>) => {
    return axiosInstance
      .patch<T>(this.endpoint + "/" + id, data)
      .then((res) => res.data);
  };
}
