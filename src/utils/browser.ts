import crypto from 'crypto-js';

interface BrowserDetails {
  userAgent: string;
  language: string;
}

export const getBrowserDetails = (): BrowserDetails => {
  const userAgent = navigator.userAgent;
  const language = navigator.language;

  return {
    userAgent,
    language,
  };
};

export const getDeviceIdentifier = (): string => {
  const { userAgent, language } = getBrowserDetails();

  const uniqueId = `${userAgent}-${language}-${new Date().getTime()}`;
  const hashed = crypto.SHA256(uniqueId).toString();

  return hashed;
};
