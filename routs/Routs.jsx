import React, { Component } from "react";
import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";
import GameCard from "../component/GameCard/GameCard";
import GameStore from "../component/GameStore/GameStore";
import AuthLayouts from "../layouts/AuthLayouts";
import Login from "../component/Login/Login";
import Registration from "../component/Registration/Registration";
import Myprofile from "../pages/My Profile/Myprofile";
import GameDetails from "../component/Game Details/GameDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
    children: [{ index: true, Component: Home }],
  },
  {
    path: "authLayouts",
    element: <AuthLayouts></AuthLayouts>,
    children: [
      { path: "logIn", Component: Login },
      { path: "registration", Component: Registration },
    ],
  },
  {
    path: "myProfile",
    Component: Myprofile,
  },
  {
    path: "gameDetails/:id",
    loader: () => fetch("/game.json"),
    Component: GameDetails,
  },
]);
