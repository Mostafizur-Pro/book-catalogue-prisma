
import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
// import Auth from '../../middleware/auth';
// import ValidateRequest from '../../middleware/validateRequest';
import { BookController } from './book.controller';
import { BookValidation } from './book.zod.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();
router.get('/', BookController.getAllBooks);
router.get('/:id', BookController.getBookByCategoryId);
router.get('/:id', BookController.getBookById);
router.post("/create-book",

    validateRequest(BookValidation.postValidation),
    BookController.createBook
);
router.patch("/:id",    validateRequest(BookValidation.updateValidation),
    BookController.updateBookById
);
router.delete("/:id",

    BookController.deleteBookById
);

export const bookRoutes = router;
