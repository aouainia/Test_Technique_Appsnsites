import express from 'express';
import {getEmployee,getEmployees,createEmployee,editEmployee,deleteEmployee} from '../controllers/employees.js'

const router = express.Router();

// http://localhost:5000/employees

router.get('/:id', getEmployee);
router.get('/', getEmployees);
router.post('/ajout', createEmployee);
router.patch('/:id', editEmployee);
router.delete('/:id', deleteEmployee);

export default router;
