import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import ErrorBoundary from './Components/Error'

ReactDOM.render(
    <ErrorBoundary>
      {(hasError) => (
        <App hasError={hasError} />
      )}
    </ErrorBoundary>,
  document.getElementById('root')
);
