import { Router } from 'express';
import { createRecycler, getRecyclers, getRecyclerById } from '../controllers/recyclerController';

const router = Router();

router.post('/', createRecycler);
router.get('/', getRecyclers);
router.get('/:id', getRecyclerById);

export default router;
