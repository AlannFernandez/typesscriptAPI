import { Router } from 'express'
import { Index} from '../controllers/index.controller'
import Querys from '../controllers/index.controller';

const router = Router();

router.route('/')
      .get(Index)
      .post(Querys.firts)


export default router;