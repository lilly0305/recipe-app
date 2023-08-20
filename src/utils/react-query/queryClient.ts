import { QueryClient } from 'react-query';

const queryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      refetchInterval: 60 * 1000 * 10, // 10 minutes
      refetchIntervalInBackground: false,
      suspense: false,
      staleTime: 60 * 1000 * 5, // 5 minutes
      cacheTime: 60 * 1000 * 10, // 10 minutes
      keepPreviousData: true,
    },
    mutations: {
      retry: 1,
    },
  },
};

export const queryClient = new QueryClient(queryClientConfig);
