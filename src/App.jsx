import React, { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { IntlProvider } from 'react-intl';
import '@formatjs/intl-numberformat/polyfill';
import enPolyfill from '@formatjs/intl-numberformat/dist/locale-data/en';
import esPolyfill from '@formatjs/intl-numberformat/dist/locale-data/es';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import useGetAdminUserInitialized from './models/users/useGetAdminUserInitialized';
import materialTheme from './styles/materialTheme';
import messagesEn from '../locale/en.json';
import messagesEs from '../locale/es.json';
import FrontDesk from './FrontDesk';
import SadScreen from './components/SadScreen';
import ErrorBoundary from './ErrorBoundary';

// polyfill to enable formatting of a number using the unit prop
if (typeof Intl.NumberFormat.__addLocaleData === 'function') {
  Intl.NumberFormat.__addLocaleData(enPolyfill);
  Intl.NumberFormat.__addLocaleData(esPolyfill);
}

const messageMap = {
  en: messagesEn,
  es: messagesEs,
};

const queryClient = new QueryClient();

const ScrollToTop = function() {
  const { pathname } = useLocation();

  useEffect(() => window.scrollTo(0, 0), [pathname]);

  return null;
};

function AppWithQueryClient() {
  const locale = 'en';
  const { data, error } = useGetAdminUserInitialized();

  const adminUserInitialized = data?.initialized;

  if (error) {
    document.title = 'Server Unavailable';
    return <SadScreen variant="serverError" />;
  }
  const theme = createTheme(materialTheme());

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <IntlProvider
        locale={locale}
        defaultLocale="en"
        messages={messageMap[locale]}
      >
        <BrowserRouter basename="/">
          <ScrollToTop />
          <ErrorBoundary>
            <FrontDesk adminUserInitialized={adminUserInitialized} />
          </ErrorBoundary>
        </BrowserRouter>
      </IntlProvider>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppWithQueryClient />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
