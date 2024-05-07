import * as React from 'react';
import Navigator from './src/navigators';
import AuthProvider from './src/contexts/authContext';

const App = () => {
  return (
    <AuthProvider>
      <Navigator />
    </AuthProvider>
  );
};

export default App;
