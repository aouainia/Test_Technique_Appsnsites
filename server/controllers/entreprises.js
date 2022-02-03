import express from 'express';
import mongoose from 'mongoose';
import EntrepriseMessage from '../models/entrepriseMessage.js';


const router = express.Router();

// ajout une entrepise

export const ajoutEntreprise = async (req, res) => {

    const { name, address } = req.body;

    const newEntreprise = new EntrepriseMessage({ name, address })

    try {
        await newEntreprise.save();

        res.status(201).json(newEntreprise); 
    } catch (error) {
        res.status(409).json({ message: error.message }); 
    }

}


// edit une entreprise

export const editEntreprise = async (req, res) => {

    const { id } = req.params;
    const { name, address } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas d'entreprise d id: ${id}`);

    const updatedEntreprise = { name, address, id };

    await updatedEntreprise.findByIdAndUpdate(id, updatedEntreprise, { new: true });

    res.json(updatedEntreprise);
}


// delete entreprise

export const deleteEntreprise = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas d'entreprise d id: ${id}`);

    await EntrepriseMessage.findByIdAndRemove(id);

    res.json({ message: "entreprise a été supprimer." });

}

export default router;

