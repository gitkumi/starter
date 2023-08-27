import { Outlet, RootRoute } from '@tanstack/router'
import { QueryClient, QueryClientProvider } from 'react-query'

export const rootRoute = new RootRoute({
  component: Root,
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      staleTime: Number.POSITIVE_INFINITY,
    },
  },
})

function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  )
}
