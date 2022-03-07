import axios from "axios";
// import toast from "toastr";

const instance = axios.create({
  // baseURL: `${process.env.REACT_APP_BACKEND_API_URL}/routes`,
  baseURL: 'http://127.0.0.1:8000/api'
  // baseURL: 'https://icanhazdadjoke.com'
});

const responseSuccessHandler = (response) => {
  return response;
};

axios.interceptors.request.use(
  function (successfulReq) {
    console.log('success rewponse from axios')
    return successfulReq;
  },
  function (error) {
    console.log('request failed, server error')
    // this.$toast.error("Request failed, Server Error!");
    Promise.reject(error);
  }
);

const responseErrorHandler = (error) => {
  if (!navigator.onLine) {
    console.log('Request failed, Please check your network connection!')
    // this.$toast.error("Request failed, Please check your network connection!");
  }

  if (error && error.response && error.response.status === 401) {
    if (error.response.status === 401) {
      console.log('error 401')
      // localStorage.removeItem("persist:root");
      // localStorage.removeItem("authUser");
      // this.$toast.error(error.response.data.message, error)
      window.location = "/auth/login";
    }
  }
  if (error && error.response && error.response.status === 403) {
    console.log('error 403')
    // this.$toast.info(error.response.data.message, 'Un-Authorized');
  }
  if (error && error.response && error.response.status === 422) {
    console.log('error 422')
    console.log('data', error.response.data.errors)
    // this.$toast.success(error.response.data.message, 'Validation errors');
  }

  if (error && error.response && error.response.status === 404) {
    console.log('error 404 not found')
    // this.$toast.info(error.response.data.message, 'Not Found');
  }
  if (error && error.response && error.response.status > 404 && error.response.status !== 422) {
    console.log('error 404 to 422')
    // this.$toast.error(error.response.data.message);
  }

  return Promise.reject(error);
};

instance.interceptors.response.use(
  (response) => responseSuccessHandler(response),
  (error) => responseErrorHandler(error)
);

export default instance;
