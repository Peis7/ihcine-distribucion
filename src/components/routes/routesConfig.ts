import React from 'react';
import HomePage from '../pages/Home';

interface RouteConfig {
  path: string;
  component: React.ComponentType;
  protected: boolean;
  exact?: boolean;
}


const generateBaseRoutes = (): RouteConfig[] =>
  [
    {
      path: `/`,
      component: HomePage,
      protected: false
    },

  ];




export const routes: RouteConfig[] = [
    ...generateBaseRoutes(),
]
