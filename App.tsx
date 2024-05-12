import * as React from 'react';
import Navigator from './src/navigators';
import AuthProvider from './src/contexts/authContext';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();
const App = () => {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Navigator />
      </QueryClientProvider>
    </AuthProvider>
  );
};

export default App;
