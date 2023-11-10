import Router from 'express';
import { getAllUsers } from '../controllers/user-controller.js';
const userRouter = Router();
userRouter.get("/getUsers", getAllUsers);
export default userRouter;
//# sourceMappingURL=user-routes.js.map