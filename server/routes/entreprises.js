import express from 'express';
import {ajoutEntreprise,editEntreprise,deleteEntreprise} from '../controllers/entreprises.js'
const router = express.Router();

// http://localhost:5000/entreprises

router.post('/ajout',ajoutEntreprise);
router.patch('/:id',editEntreprise);
router.delete('/:id',deleteEntreprise);


export default router;