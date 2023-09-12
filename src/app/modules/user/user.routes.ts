import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';

// import ValidateRequest from '../../middleware/validateRequest';
import { userController } from './user.controller';
import { userValidation } from './user.zod.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.patch('/:id', validateRequest(userValidation.updateValidation),
    userController.updateUserById);
router.delete('/:id', userController.deleteUserById);

export const userRoutes = router;
