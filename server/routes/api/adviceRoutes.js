// Import Router from express to handle route definitions
import { Router } from 'express';
// Import controller functions for advice
import {
    getAdvice, createAdviceRequest, getAdviceById, updateAdviceRequest, deleteAdviceRequest
} from '../../controllers/adviceController.js';

const router = Router();

// Routes for /api/advice

// Advice Routes
router.route('/')
    .get(getAdvice) // GET advice based on parameters or all advices
    .post(createAdviceRequest); // POST a new advice request

// adviceId routes
router.route('/:adviceId')
    .get(getAdviceById) // GET a single advice by its _id
    .put(updateAdviceRequest) // PUT to update an advice request by its _id
    .delete(deleteAdviceRequest); // DELETE to remove an advice request by its _id

// Export router to make these routes available
export default router;