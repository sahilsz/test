import { api } from '@/lib/api-client';
import { useAuth } from './auth-store';
import { serverUrl } from '@/config/constants';
import { User } from '@/type/api';

export const fetchUser = async (): Promise<User> => {
  const number = useAuth.getState().auth.number;
  try {
    const response = await api.get(
      `${serverUrl.sub}/api/fetch/user/+91${number}?user=+91${number}`,
    );

    return response.data;
  } catch (error) {
    return error;
  }
};
