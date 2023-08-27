import { rootRoute } from '@/pages/root'
import { Route } from '@tanstack/router'

export const topRoute = new Route({
  path: '/',
  component: Top,
  getParentRoute: () => rootRoute,
})

function Top() {
  return <div>Hello</div>
}
