import { createRootRoute, Outlet } from '@tanstack/react-router'
import '@fontsource-variable/sora'
import '@fontsource-variable/inter'

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
    </>
  ),
})
