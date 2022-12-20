
import {TYPE_ROUTES, TRAINER_ROUTES} from "./utils/const";
import Trainer from "./pages/Trainer";
import TrainerOneComponent from "./component/TrainerOneComponent";

export const publicRoutes=[
    {
        path: TYPE_ROUTES + '/:id',
        Component:<Trainer />
    },
    {
        path: TRAINER_ROUTES + '/:name',
        Component: <TrainerOneComponent/>
    }
]