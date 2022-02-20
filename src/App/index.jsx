import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import Loader from '@/components/FunctionalComponents/Loader'
import ErrorBoundary from '@/components/ClassComponents/ErrorBoundary/ErrorBoundary'

const HomePage = lazy(() => import('@/pages/FunctionalPages/Home'))
const SettingsPage = lazy(() => import('@/pages/FunctionalPages/Settings'))

export default props => {

  const currentTheme = useSelector(state => state.switchTheme.currentTheme)

  return (

    <ThemeProvider theme={theme[currentTheme]}>
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route
              exact
              path={HOME_PAGE_ROUTE}
              component={HomePage}
            />
            <Route
              exact
              path={SETTINGS_PAGE_ROUTE}
              component={SettingsPage}
            />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  )
}
