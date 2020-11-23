import React from 'react';
import { FormularioProvider } from './App/hooks/global/FormulariosContext';
import Template from './shared/Template';

function App() {
  return (
    <FormularioProvider >
      <Template/>
    </FormularioProvider>
  );
}

export default App;
