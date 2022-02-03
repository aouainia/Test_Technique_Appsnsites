import express from 'express';
import mongoose from 'mongoose';
import EmployeeMessage from '../models/employeeMessage.js';


const router = express.Router();
/* Employees : CRUDs  */


//affichage d'un employee + les infos de son entreprises --> ref a le model Employee l'entreprise(company) 
export const getEmployee = async (req, res) => {
    try {

        const { id } = req.params;
        const employee = await EmployeeMessage.findById(id);

        res.status(200).json(employee);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//getAll employees


export const getEmployees = async (req, res) => { 
    try {
        const employeeMessages = await EmployeeMessage.find();
                
        res.status(200).json(employeeMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



// ajout un employee

export const createEmployee = async (req, res) => {

    const { fullname, cin, address, poste, entreprise } = req.body;

    const newEmployee = new EmployeeMessage({ fullname, cin, address, poste, entreprise })

    try {
        await newEmployee.save();

        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

// edit un employee

export const editEmployee = async (req, res) => {

    const { id } = req.params;
    const { fullname, cin, address, poste, entreprise } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas d'employee d id: ${id}`);

    const updatedEmployee = { fullname, cin, address, poste, entreprise, _id: id };

    await updatedEmployee.findByIdAndUpdate(id, updatedEmployee, { new: true });

    res.json(updatedEmployee);
}


// delete employee

export const deleteEmployee = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas d'employee d id: ${id}`);

    await EmployeeMessage.findByIdAndRemove(id);

    res.json({ message: "employee a été supprimer." });

}

export default router;

