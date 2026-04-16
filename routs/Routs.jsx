import React from 'react';
import { createBrowserRouter } from "react-router";
import HomeLayouts from '../layouts/HomeLayouts';
import Home from '../pages/Home';
import GameCard from '../component/GameCard/GameCard';
import GameStore from '../component/GameStore/GameStore';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
      children: [
      { index: true, Component: Home },
      { path: "gameCard", Component: GameCard },
    ]
  },
]);