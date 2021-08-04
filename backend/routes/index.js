import express from 'express';
import userRoutes from './users.js';
import scorecardRoutes from './scorecards.js';

const router = express.Router();

// authentication middleware here
router.use('/', (req, res, next) => {
  next();
});

// add other routes
router.use(userRoutes);
router.use(scorecardRoutes)

export default router;
