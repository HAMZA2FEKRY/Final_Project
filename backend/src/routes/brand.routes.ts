import { Router } from 'express';
import BrandController from '../controllers/brand.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();
const brandController = new BrandController();

router.get('/', brandController.getAll);
router.get('/:id', brandController.getById);

router.post('/', brandController.create);
router.put('/:id', brandController.update);
router.delete('/:id',  brandController.delete);

export default router;
