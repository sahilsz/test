export type BaseEntity = {
  success: boolean;
  message?: string;
  data?: object;
  error?: string;
};

export type Entity<T> = {
  [K in keyof T]: T[K];
} & BaseEntity;

export type Otp = Entity<{
  data: {
    _id?: string;
    phoneNumber?: string;
    sentTime?: Date;
    otp?: string;
    validTill?: Date;
    type?: string;
    deviceIdentifier?: object;
  };
}>;

export type Authorization = Entity<{
  data: { token?: string };
}>;

export type AccessToken = Entity<{
  data: {
    accessToken?: string;
    refreshToken?: string;
  };
}>;

// export type BaseEntity = {
//   success: boolean;
//   message?: string;
//   updatedAt?: number;
//   createdAt?: number;
//   error?: string;
// };

// export type Entity<T> = {
//   [K in keyof T]: T[K];
// } & BaseEntity;

// export type Otp = Entity<{
//   _id?: string;
//   phoneNumber?: string;
//   sentTime?: Date;
//   otp?: string;
//   validTill?: Date;
//   type?: string;
//   deviceIdentifier?: object;
// }>;

// export type Authorization = Entity<{
//   token?: string;
// }>;

// export type AccessToken = Entity<{
//   accessToken?: string;
//   refreshToken?: string;
// }>;
export interface User {
  _id: string;
  email: string;
  first_name: string;
  last_name: string;
  dateOfBirth: string;
  mobile: string;
  passwordHash: string;
  contact_email: string;
  contact_mobile: string;
  email_verified: boolean;
  mobile_verified: boolean;
  callingCode: string;
  countryCode: string;
  devices: string[];
  switch_notifications: boolean;
  schedule_notifications: boolean;
  geoscene_notifications: boolean;
  motion_notifications: boolean;
  lock_notifications: boolean;
  provider: string;
  hapticFeedback: boolean;
  source: string;
  smartMeter: boolean;
  referralCode: string;
  loggedInDevices: (LoggedInDevice | null)[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  name: string;
  meta_data: object;
  providerMetaData: object;
  selectedHouse: string;
}

export type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

export interface LoggedInDevice {
  uniqueId: string;
  userAgent: string;
  latestLoggedIn: number;
  enabled: boolean;
  previousLoggedIn: number;
}
export interface House {
  _id: string;
  rooms: object[];
  masters: string[];
  rest: string[];
  timed: string[];
  ws: string;
  wp: string;
  ppu: number;
  nvrs: string[];
  ipcameras: string[];
  locks: string[];
  lockhubs: string[];
  motionsensors: string[];
  rgbs: string[];
  wavesensors: string[];
  ttlocks: string[];
  ttgateways: string[];
  stacks: string[];
  homebridges: string[];
  address: object;
  rgbwwws: object[];
  cameras: object[];
  tuyaDetails: object;
  honeywellThermostats: object[];
  houseName: string;
  createdBy: string;
  __v: number;
  roomAccess: object;
  createdAt: string;
  updatedAt: string;
  empty: boolean;
  active: boolean;
  alexaLinked: boolean;
  googleHomeLinked: boolean;
  type: string;
  clientId: string;
  propertyId: string;
  smartMeterHouse: boolean;
}
