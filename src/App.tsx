import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './components/routes/routesConfig';
import './styles/ihcine.css';

const App: React.FC = () => {
  return (
      <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {routes.map((route, index) => {
                const RouteComponent = route.protected ? (

                    <route.component />
                ) : (
                  <route.component />
                );

                return <Route key={index} path={route.path} element={RouteComponent} />;
              })}
            </Routes>
          </Suspense>
      </Router>
  );
};

export default App;
