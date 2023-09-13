import express from 'express';
import { userRoutes } from '../modules/user/user.routes';
import { bookRoutes } from '../modules/book/book.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/users',
    routes: userRoutes,
  },
  {
    path: '/books',
    routes: bookRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
