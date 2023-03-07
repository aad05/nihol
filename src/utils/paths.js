import { lazy } from "react";
import NewComers from "../components/NewComers";
import HalfTime from "../components/HalfTime";
import TimeUp from "../components/TimeUp";
import Report from "../components/Report";
import EmptyPlace from "../components/BuildingTypes";
import LuxuryRooms from "../components/BuildingTypes/LuxuryRooms";
import Cottages from "../components/BuildingTypes/Cottages";
import OrdinaryRooms from "../components/BuildingTypes/OrdinaryRooms";
import SecondBulding from "../components/Buildings/SecondBuilding";
import ThirdBulding from "../components/Buildings/ThirdBuilding";
import FourthBuilding from "../components/Buildings/FourthBuilding";
import FifthBuilding from "../components/Buildings/FifthBuilding";
import SixthBuilding from "../components/Buildings/SixthBuilding";
import Cottage from "../components/Buildings/Cottage";

const Home = lazy(() => import("../components/Home"));

export const paths = [
  {
    _id: 0,
    path: "/",
    RenderComp: Home,
    hasChild: false,
  },
  {
    _id: 1,
    path: "/new-comers",
    RenderComp: NewComers,
    hasChild: false,
  },
  {
    _id: 2,
    path: "/middle-users",
    RenderComp: HalfTime,
    hasChild: false,
  },
  {
    _id: 3,
    path: "/end-users",
    RenderComp: TimeUp,
    hasChild: false,
  },
  {
    _id: 4,
    path: "/building-control",
    RenderComp: EmptyPlace,
    hasChild: true,
    children: [
      {
        _id: 4.1,
        path: "ordinary-rooms",
        RenderComp: OrdinaryRooms,
      },
      {
        _id: 4.2,
        path: "luxury-rooms",
        RenderComp: LuxuryRooms,
      },
      {
        _id: 4.3,
        path: "cottage-rooms",
        RenderComp: Cottages,
      },
      {
        _id: 4.4,
        path: "map/ordinary-rooms/2",
        RenderComp: SecondBulding,
      },
      {
        _id: 4.5,
        path: "map/luxury-rooms/3",
        RenderComp: ThirdBulding,
      },
      {
        _id: 4.6,
        path: "map/ordinary-rooms/4",
        RenderComp: FourthBuilding,
      },
      {
        _id: 4.6,
        path: "map/luxury-rooms/5",
        RenderComp: FifthBuilding,
      },
      {
        _id: 4.6,
        path: "map/ordinary-rooms/6",
        RenderComp: SixthBuilding,
      },
      {
        _id: 4.6,
        path: "map/cottage",
        RenderComp: Cottage,
      },
    ],
  },
  {
    _id: 5,
    path: "/report",
    RenderComp: Report,
    hasChild: false,
  },
];
