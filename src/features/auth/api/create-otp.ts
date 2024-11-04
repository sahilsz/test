import { serverUrl } from '@/config/constants';
import { api } from '@/lib/api-client';
import { AccessToken, Authorization, Otp } from '@/type/api';

import * as z from 'zod';

export const createOtpInputSchema = z.object({
  phoneNumber: z.string().min(1, 'Required'),
  deviceIdentifier: z.object({
    uniqueId: z.string().min(1, 'Required'),
    userAgent: z.string().min(1, 'Required'),
  }),
  callingCode: z.string().min(1, 'Required'),
  countryCode: z.string().min(1, 'Required'),
});

export type CreateOtpInput = z.infer<typeof createOtpInputSchema>;

export const createOtp = async (data: CreateOtpInput): Promise<Otp> => {
  try {
    console.log('data - ', data);
    const response = await api.post<Otp>(
      `${serverUrl.user}/users/v1/otp`,
      data,
    );
    console.log(response);
    return response.data;
  } catch (error: unknown) {
    console.log(error);
    const message =
      error instanceof Error && error?.response?.data?.message
        ? error.response.data.message
        : 'An unexpected error occurred';
    return {
      success: false,
      message: message,
    };
  }
};

export const verifyOtpInputSchema = z.object({
  username: z.string().min(1, 'Required'),
  password: z.string().min(1, 'Required'),
  client: z.enum(['automation', 'smartmeter']),
  type: z.enum(['otp']),
  device: z.object({}),
});

export type VerifyOtpInput = z.infer<typeof verifyOtpInputSchema>;
export const verifyOtp = async (
  data: VerifyOtpInput,
): Promise<Authorization> => {
  try {
    const response = await api.post(
      `${serverUrl.auth}/token/generateAuthorizeToken`,
      data,
    );

    return response.data;
  } catch (error: unknown) {
    return error?.response?.data;
  }
};

export const createAccessToken = async (data: {
  token: string;
}): Promise<AccessToken> => {
  try {
    const response = await api.get(
      `${serverUrl.auth}/token/generateAccessToken`,
      {
        headers: {
          token: data.token,
          tokentype: 'authorizeToken',
          client: 'automation',
        },
      },
    );

    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
