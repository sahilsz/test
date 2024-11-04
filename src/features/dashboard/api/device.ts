import { serverUrl } from '@/config/constants';
import { api } from '@/lib/api-client';

export const fetchDayAnalytics = async (data) => {
  try {
    const response = await api.post(
      `${serverUrl.analytics}/legacy/dayAnalytics`,
      data,
    );

    if (!response.data?.success) {
      //TODO
    }

    return response?.data;
  } catch (error) {
    return {
      success: false,
      data: {},
    };
  }
};
