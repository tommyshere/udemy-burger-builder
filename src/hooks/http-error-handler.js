import { useState, useEffect } from 'react';

export default axios => {
  const [error, setError] = useState(null);

  const reqInterceptor = axios.interceptors.request.use(req => {
    setError(null);
    return req;
  });

  const resInterceptor = axios.interceptors.response.use(res => res, error => {
    setError(error);
  });

  useEffect(() => {
    // clean up
    // as can be seen by eject
    return () => {
      // request interceptors are used to transform the request before axios sends it
      axios.interceptors.request.eject(reqInterceptor);
      // response interceptors can modify the reponse after it has received
      // in this example it checks if the user is valid
      axios.interceptors.response.eject(resInterceptor);
    }
  }, [reqInterceptor, resInterceptor]);

  const errorConfirmedHandler = () => {
    setError(null)
  }

  return [error, errorConfirmedHandler];
}