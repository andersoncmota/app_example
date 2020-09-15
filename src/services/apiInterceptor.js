import { signOut } from '../store/modules/auth/actions';
import { baseURL } from './api';

function apiInterceptor(api, store) {
  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const { status } = error.response;
      if (
        status === 401 &&
        String(error.config.url).replace(baseURL, '') !== ''
      ) {
        store.dispatch(signOut());
      }
      // 401 desloga
      return Promise.reject(error);
    }
  );
}
export default apiInterceptor;
