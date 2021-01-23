import express from 'express';
import{getByIdBug, createBug, updateBug, deleteBug} from '../logic/BugsLogic.js';

const router = express.Router();


router.route('/bug/:id').get(async (req, res) => {
    try {
        res.status(200).json(await getBugById(req.params.id));
    }
    catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

router.route('/bug').post(async (req, res) => {
    try {
        let person = await createBug(req.body);

        if (person.hasErrors)
            res.status(400).json(person);
        else
            res.status(200).json(person);
    }
    catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

router.route('/bug/:id').put(async (req, res) => {
    try {
        let person = await  updateBug(req.params.id, req.body);

        if (person.hasErrors)
            res.status(400).json(person);
        else
            res.status(200).json(person);
    }
    catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }  
})

router.route('/bug/:id').delete(async (req, res) => {
    try {
        let person = await deleteBug(req.params.id);

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