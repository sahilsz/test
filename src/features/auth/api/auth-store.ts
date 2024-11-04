import { createStore } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type Auth = {
  number: string;
  accessToken?: string;
  refreshToken?: string;
};

type AuthStore = {
  auth: Auth;
  addNumber: (number: string) => void;
  addTokens: ({
    accessToken,
    refreshToken,
  }: {
    accessToken: string;
    refreshToken: string;
  }) => void;
  delete: () => void;
  // addNotification: (notification: Omit<Notification, 'id'>) => void;
  // dismissNotification: (id: string) => void;
};

export const useAuth = createStore<AuthStore>()(
  persist(
    (set) => ({
      auth: {
        number: '',
      },
      addNumber(number) {
        set((state) => ({
          auth: {
            ...state.auth,
            number,
          },
        }));
      },
      addTokens({ accessToken, refreshToken }) {
        set((state) => ({
          auth: {
            ...state.auth,
            accessToken,
            refreshToken,
          },
        }));
      },
      delete() {
        set(() => ({
          auth: { number: '' },
        }));
      },
      // addNotification: (notification) =>
      //   set((state) => ({
      //     notifications: [
      //       ...state.notifications,
      //       { id: nanoid(), ...notification },
      //     ],
      //   })),
      // dismissNotification: (id) =>
      //   set((state) => ({
      //     notifications: state.notifications.filter(
      //       (notification) => notification.id !== id,
      //     ),
      //   })),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
