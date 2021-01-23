import express from 'express';
import{getByIdStatus, createStatus, updateStatus, deleteStatus} from '../logic/StatusBLogic.js';

const router = express.Router();



router.route('/status/:id').get(async (req, res) => {
    try {
        res.status(200).json(await getByIdStatus(req.params.id));
    }
    catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

router.route('/status').post(async (req, res) => {
    try {
        let person = await createStatus(req.body);

        if (person.hasErrors)
            res.status(400).json(person);
        else
            res.status(200).json(person);
    }
    catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

router.route('/status/:id').put(async (req, res) => {
    try {
        let person = await  updateStatus(req.params.id, req.body);

        if (person.hasErrors)
            res.status(400).json(person);
        else
            res.status(200).json(person);
    }
    catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }  
})

router.route('/status/:id').delete(async (req, res) => {
    try {
        let person = await deleteStatus(req.params.id);

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