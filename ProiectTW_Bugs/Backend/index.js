import express from "express";
import bodyParser from "body-parser";
import bugs from "./routes/BugsRoute.js";
import istoric from "./routes/IstoricRoute.js";
import status from "./routes/StatusBRoute.js";
import user from "./routes/UtilizatoriRoute.js";
import project from "./routes/ProjectRoute.js";
import cors from "cors";

// import sequelize from './dbConfig.js';
// import Bugs from './entities/Bugs.js';
// import Utilizatori from './entities/Utilizatori.js';
// import Istoric from './entities/Istoric.js';
// import StatusB from './entities/StatusB.js';

let app = express();
//let router= express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", bugs);
app.use("/api", project);
app.use("/api", istoric);
app.use("/api", status);
app.use("/api", user);

let port = process.env.PORT || 8080;
app.listen(port);
console.log("API is running at " + port);

// sequelize
//     .authenticate()
//     .then(()=>{
//         console.log("Connection has been established successfully");
//     })
//     .catch(err => {
//         console.log("Unable to connect to the database: ", err);
//     })

//Tabela Bugs________________________________________________
//POST (create)

// async function createBug(bug){
//     await Bugs.create(bug);
// }
// router.route('/bug').post(async(req,res) => {
//     res.json(await createBug(req.body));
// })

// //GET
// async function getByIdBug(id){
//     return await Bugs.findByPk(id);
// }
// router.route('/bug/:id').get( async (req, res) => {
//     res.json(await getByIdBug(req.params.id));
// })

// //PUT (update)
// async function updateBug(id, bug){
//     if (parseInt(id) !== bug.BugID){
//         console.log("Entity id diff");
//         return;
//     }

//     let updateEntity = await getByIdBug(id);

//     if (!updateEntity)
//     {
//         console.log("There isn't a magazin with this id");
//         return;
//     }

//     return await updateEntity.update(bug);
// }
// router.route('/bug/:id').put( async (req, res) => {
//     res.json(await updateBug(req.params.id, req.body));
// })

// //DELETE
// async function deleteBug(id){

//     let deleteEntity = await getByIdBug(id);

//     if (!deleteEntity)
//     {
//         console.log("There isn't no bugs with this id ");
//         return;
//     }

//     return await deleteEntity.destroy();
// }
// router.route('/bug/:id').delete( async (req, res) => {
//     res.json(await deleteBug(req.params.id));
// })

// //Tabela Utilizatori___________________________________
// //POST
// async function createUtilizator(user){
//     await Utilizatori.create(user);
// }
// router.route('/user').post(async(req,res) => {
//     res.json(await createUtilizator(req.body));
// })

// //GET
// async function getByIdUser(id){
//     return await Utilizatori.findByPk(id);
// }
// router.route('/user/:id').get( async (req, res) => {
//     res.json(await getByIdUser(req.params.id));
// })

// //UPDATE
// async function updateUser(id, user){
//     if (parseInt(id) !== user.UserID){
//         console.log("Entity id diff");
//         return;
//     }

//     let updateEntity = await getByIdUser(id);

//     if (!updateEntity)
//     {
//         console.log("There isn't a magazin with this id");
//         return;
//     }

//     return await updateEntity.update(user);
// }
// router.route('/user/:id').put( async (req, res) => {
//     res.json(await updateUser(req.params.id, req.body));
// })

// //DELETE
// async function deleteUser(id){

//     let deleteEntity = await getByIdUser(id);

//     if (!deleteEntity)
//     {
//         console.log("There isn't no bugs with this id ");
//         return;
//     }

//     return await deleteEntity.destroy();
// }
// router.route('/user/:id').delete( async (req, res) => {
//     res.json(await deleteUser(req.params.id));
// })

// //Tabela Istoric________________________________________
// async function createIstoric(ist){
//     await Istoric.create(ist);
// }
// router.route('/ist').post(async(req,res) => {
//     res.json(await createIstoric(req.body));
// })

// //GET
// async function getByIdIstoric(id){
//     return await Istoric.findByPk(id);
// }
// router.route('/ist/:id').get( async (req, res) => {
//     res.json(await getByIdIstoric(req.params.id));
// })

// //UPDATE -> nu exista o cheie primara in aceasta tabela

// //DELETE
// async function deleteIstoric(id){

//     let deleteEntity = await getByIdIstoric(id);

//     if (!deleteEntity)
//     {
//         console.log("There isn't no bugs with this id ");
//         return;
//     }

//     return await deleteEntity.destroy();
// }
// router.route('/ist/:id').delete( async (req, res) => {
//     res.json(await deleteIstoric(req.params.id));
// })

// //Tabela StatusB____________________________________________
// async function createStatus(sts){
//     await StatusB.create(sts);
// }
// router.route('/sts').post(async(req,res) => {
//     res.json(await createStatus(req.body));
// })

// //GET
// async function getByIdStatus(id){
//     return await Bugs.findByPk(id);
// }
// router.route('/sts/:id').get( async (req, res) => {
//     res.json(await getByIdStatus(req.params.id));
// })

// //UPDATE
// async function updateStatus(id, sts){
//     if (parseInt(id) !== sts.StatusID){
//         console.log("Entity id diff");
//         return;
//     }

//     let updateEntity = await getByIdStatus(id);

//     if (!updateEntity)
//     {
//         console.log("There isn't a magazin with this id");
//         return;
//     }

//     return await updateEntity.update(user);
// }
// router.route('/sts/:id').put( async (req, res) => {
//     res.json(await updateStatus(req.params.id, req.body));
// })

// //DELETE
// async function deleteStatus(id){

//     let deleteEntity = await getByIdStatus(id);

//     if (!deleteEntity)
//     {
//         console.log("There isn't no bugs with this id ");
//         return;
//     }

//     return await deleteEntity.destroy();
// }
// router.route('/sts/:id').delete( async (req, res) => {
//     res.json(await deleteStatus(req.params.id));
// })
