import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants'
import theme from '@/theme'

import { ThemeProvider } from 'styled-components'

import Loader from '@/components/Loader'

const HomePage = lazy(() => import('@/pages/Home'))
const SettingsPage = lazy(() => import('@/pages/Settings'))

export default (props) => {

  const currentTheme = useSelector(state => state.switchTheme.currentTheme);
  console.log(theme[currentTheme])

  return (
    <ThemeProvider theme={theme[currentTheme]}>
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
    </ThemeProvider>
  )
}
