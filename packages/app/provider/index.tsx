import { NavigationProvider } from './navigation'
import { SafeArea } from './safe-area'
import { PortalProvider } from '@gorhom/portal'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <PortalProvider>
      <SafeArea>
        <NavigationProvider>{children}</NavigationProvider>
      </SafeArea>
    </PortalProvider>
  )
}
