import { lazy } from "react";
import EmptyPlace from "../components/EmptyPlace";

const Home = lazy(() => import("../components/Home"));
const NewComers = lazy(() => import("../components/NewComers"));
const HalfTime = lazy(() => import("../components/HalfTime"));
const TimeUp = lazy(() => import("../components/TimeUp"));
const Report = lazy(() => import("../components/Report"));

export const paths = [
  {
    _id: 0,
    path: "/",
    RenderComp: Home,
  },
  {
    _id: 1,
    path: "/new-comers",
    RenderComp: NewComers,
  },
  {
    _id: 2,
    path: "/middle-users",
    RenderComp: HalfTime,
  },
  {
    _id: 3,
    path: "/end-users",
    RenderComp: TimeUp,
  },
  {
    _id: 4,
    path: "/empty-places",
    RenderComp: EmptyPlace,
  },
  {
    _id: 5,
    path: "/report",
    RenderComp: Report,
  },
];
