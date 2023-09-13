import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
// import Auth from '../../middleware/auth';
// import ValidateRequest from '../../middleware/validateRequest';
import { CategoryController } from './category.controller';
import { CategoryValidation } from './category.zod.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();
router.get('/', CategoryController.getAllCategories);
router.get('/:id', CategoryController.getCategoryById);
// router.post(
//   '/create-category',
  
//   validateRequest(CategoryValidation.zodValidation),
//   CategoryController.createCategory
// );
router.post(
  '/create-category',
  validateRequest(CategoryValidation.zodValidation),
  CategoryController.createCategoryController

);









router.patch(
  '/:id',
  
  validateRequest(CategoryValidation.zodValidation),
  CategoryController.updateCategoryById
);
router.delete(
  '/:id',
  
  validateRequest(CategoryValidation.zodValidation),
  CategoryController.deleteCategoryById
);

export const categoryRoutes = router;
