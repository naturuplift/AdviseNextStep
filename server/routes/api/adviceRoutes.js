import { Router } from 'express';
import {
  getAdvice,
  createAdviceRequest,
  getAdviceById,
  updateAdviceRequest,
  deleteAdviceRequest,
  getAdviceFromOpenAI,
} from '../../controllers/adviceController.js';
import { getAdviceFromOpenAI } from '../../services/openaiService.js';


const router = Router();

// Routes for /api/advice
router.route('/')
  .get(getAdvice) // GET advice based on parameters or all advices
  .post(createAdviceRequest); // POST a new advice request

// Route for getting advice from OpenAI
router.route('/openai')
  .post(getAdviceFromOpenAI);

// Routes for /api/advice/:adviceId
router.route('/:adviceId')
  .get(getAdviceById) // GET a single advice by its _id
  .put(updateAdviceRequest) // PUT to update an advice request by its _id
  .delete(deleteAdviceRequest); // DELETE to remove an advice request by its _id

export default router;