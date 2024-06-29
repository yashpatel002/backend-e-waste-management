import { Router } from 'express';
import { createService, getServices, getServiceById } from '../controllers/serviceController';

const router = Router();

router.post('/', createService);
router.get('/', getServices);
router.get('/:id', getServiceById);

export default router;
