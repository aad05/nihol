import { lazy } from "react";

const Home = lazy(() => import("../components/Home"));
const NewComers = lazy(() => import("../components/NewComers"));
const HalfTime = lazy(() => import("../components/HalfTime"));
const TimeUp = lazy(() => import("../components/TimeUp"));
const Report = lazy(() => import("../components/Report"));
const EmptyPlace = lazy(() => import("../components/BuildingTypes"));
const LuxuryRooms = lazy(() =>
  import("../components/BuildingTypes/LuxuryRooms")
);
const Cottages = lazy(() => import("../components/BuildingTypes/Cottages"));
const OrdinaryRooms = lazy(() =>
  import("../components/BuildingTypes/OrdinaryRooms")
);
const SecondBulding = lazy(() =>
  import("../components/Buildings/SecondBuilding")
);
const ThirdBulding = lazy(() =>
  import("../components/Buildings/ThirdBuilding")
);
const FourthBuilding = lazy(() =>
  import("../components/Buildings/FourthBuilding")
);
const FifthBuilding = lazy(() =>
  import("../components/Buildings/FifthBuilding")
);
const SixthBuilding = lazy(() =>
  import("../components/Buildings/SixthBuilding")
);

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
    ],
  },
  {
    _id: 5,
    path: "/report",
    RenderComp: Report,
    hasChild: false,
  },
];
