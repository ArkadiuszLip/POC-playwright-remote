import { useLayoutEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { CategoryListPage } from 'pages/CategoryListPage'
import { CategoryDetailPage } from 'pages/CategoryDetailPage'

import { RestaurantDetailPage } from './pages/RestaurantDetailPage'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import { SuccessPage } from './pages/SuccessPage'
import { DefaultTemplate, SimpleTemplate, StickyHeaderTemplate } from './templates/PageTemplate'

export const AppRoutes = () => {
  const location = useLocation()
  // Scroll to top when a path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <Routes>
      <Route
        path="/categories"
        element={
          <DefaultTemplate>
            <CategoryListPage />
          </DefaultTemplate>
        }
      />
      <Route
        path="/categories/:id"
        element={
          <DefaultTemplate>
            <CategoryDetailPage />
          </DefaultTemplate>
        }
      />
      <Route
        path="/restaurants/:id"
        element={
          <StickyHeaderTemplate>
            <RestaurantDetailPage />
          </StickyHeaderTemplate>
        }
      />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route
        path="/success"
        element={
          <SimpleTemplate>
            <SuccessPage />
          </SimpleTemplate>
        }
      />
      <Route
        path="/"
        element={
          <DefaultTemplate>
            <HomePage />
          </DefaultTemplate>
        }
      />
    </Routes>
  )
}
