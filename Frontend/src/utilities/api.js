import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../constants/APIinventory";
import { getCurrentTimeZone } from "./globalMethods";

const getTimeZone = getCurrentTimeZone();

const axiosInstance = axios.create({
  baseURL: "",
  headers: {
    Accept: "application/json",
    // timezone: getTimeZone,
  },
});

axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("authToken");
  config.headers.Authorization = token ? token : "";
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
    } else if (error?.response?.data?.msg) {
      toast.error(error?.response?.data?.msg);
    }

    return Promise.reject(error);
  }
);

export const axiosGet = (url, params = {}) => {
  return axiosInstance
    .get(url, { params: params })
    .then((response) => {
      return { status: true, data: response.data, statusCode: response.status };
    })
    .catch((err) => {
      return { status: false, error: err };
    });
};

export const axiosPost = (url, params = {}) => {
  return axiosInstance
    .post(url, params)
    .then((response) => {
      return { status: true, data: response };
    })
    .catch((err) => {
      return { status: false, error: err };
    });
};

export const axiosPut = (url, params = {}) => {
  return axiosInstance
    .put(url, params)
    .then((response) => {
      return {
        status: response.status,
        data: response.data,
        statusCode: response.status,
      };
    })
    .catch((err) => {
      return { status: err.status, error: err };
    });
};

export const axiosPatch = (url, params = {}) => {
  return axiosInstance
    .patch(url, params)
    .then((response) => {
      return {
        status: response.status,
        data: response.data,
        statusCode: response.status,
      };
    })
    .catch((err) => {
      return { status: err.status, error: err };
    });
};

export const postDelete = (url, params = {}) => {
  return axiosInstance
    .delete(url, params)
    .then((response) => {
      return {
        status: response.status,
        data: response.data,
        statusCode: response.status,
      };
    })
    .catch((err) => {
      return { status: err.status, error: err };
    });
};

export const postDeleteParams = (url, params = {}) => {
  return axiosInstance
    .delete(url, { data: { ...params } })
    .then((response) => {
      return {
        status: response.status,
        data: response.data,
        statusCode: response.status,
      };
    })
    .catch((err) => {
      return { status: err.status, error: err };
    });
};

export const axiosPostFormData = (url, params) => {
  const formData = new FormData();
  formData.append("file", params?.file);
  return axiosInstance
    .post(url, formData)
    .then((response) => {
      return { status: true, data: response.data, statusCode: response.status };
    })
    .catch((err) => {
      return { status: false, error: err };
    });
};

export const axiosPostFormDataMulti = (url, params) => {
  const formData = new FormData();
  params.file.forEach((ele) => {
    formData.append("file", ele);
  });

  return axiosInstance
    .post(url, formData)
    .then((response) => {
      return { status: true, data: response.data, statusCode: response.status };
    })
    .catch((err) => {
      return { status: false, error: err };
    });
};

const axiosPostFormDataCommon = (url, params) => {
  return axiosInstance
    .post(url, params)
    .then((response) => {
      return { status: true, data: response.data, statusCode: response.status };
    })
    .catch((err) => {
      return { status: false, error: err };
    });
};

export const ApiClient = {
  get: axiosGet,
  put: axiosPut,
  post: axiosPost,
  patch: axiosPatch,
  delete: postDelete,
  deleteparams: postDeleteParams,
  postFormData: axiosPostFormData,
  postFormDataMulti: axiosPostFormDataMulti,
  postFormDataCommon: axiosPostFormDataCommon,
};
