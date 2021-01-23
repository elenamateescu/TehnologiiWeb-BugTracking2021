import express from 'express';
import{getByIdUser, createUtilizator, updateUser, deleteUser} from '../logic/UtilizatoriLogic.js';

const router = express.Router();


router.route('/utilizator/:id').get(async (req, res) => {
    try {
        res.status(200).json(await getByIdUser(req.params.id));
    }
    catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

router.route('/utilizator').post(async (req, res) => {
    try {
        let person = await createUtilizator(req.body);

        if (person.hasErrors)
            res.status(400).json(person);
        else
            res.status(200).json(person);
    }
    catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

router.route('/utilizator/:id').put(async (req, res) => {
    try {
        let person = await  updateUser(req.params.id, req.body);

        if (person.hasErrors)
            res.status(400).json(person);
        else
            res.status(200).json(person);
    }
    catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }  
})

router.route('/utilizator/:id').delete(async (req, res) => {
    try {
        let person = await deleteUser(req.params.id);

        if (person.hasErrors)
            res.status(400).json(person);
        else
            res.status(200).json(person);
    }
    catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }  
})

export default router;