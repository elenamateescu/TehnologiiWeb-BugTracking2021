import Bugs from '../entities/Bugs.js';


function validateBugs(bugs){
    if (!bugs || Object.entries(bugs).length === 0)
    return { hasErrors: true, message: "You must provide bugs information" };

    if (!bugs.Denumire)
    return { hasErrors: true, message: "Bugs name is mandatory" };

if (!bugs.StatusId)
    return { hasErrors: true, message: "Status Id is mandatory" };

if (!bugs.DescrierBug)
    return { hasErrors: true, message: "Bug description is mandatory" };

return { hasErrors: false, message: "" };
}

async function getByIdBug(){
    return await Bugs.findAll();
}


async function createBug(bugs){
    let error = validateBugs(bugs);
    if (error.hasErrors)
        return error

    return await Bugs.create(bugs);
}

async function updateBug(id, bugs){
    if (parseInt(id) !== bugs.BugId)
        return { hasErrors: true, message: "Entity id diff" };    

    let updateEntity = await getByIdBug(id);

    if (!updateEntity)
        return { hasErrors: true, message: "There isn't a bug with this id" }; 
        
    let error = validateBug(bugs);
    if (error.hasErrors)
        return error

    return await updateEntity.update(bugs);
}

async function deleteBug(id){
    let deleteEntity = await getByIdBug(id);

    if (!deleteEntity)
        return { hasErrors: true, message: "There isn't a bug with this id" };

    return await deleteEntity.destroy();
}

export {getByIdBug, createBug, updateBug, deleteBug};