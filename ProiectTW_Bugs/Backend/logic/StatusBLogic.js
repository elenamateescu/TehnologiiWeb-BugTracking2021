import StatusB from '../entities/StatusB.js';

function validateStatusB(status){
    if (!status || Object.entries(status).length === 0)
    return { hasErrors: true, message: "You must provide status information" };

if (!status.TextStatus)
    return { hasErrors: true, message: "Text status is mandatory" };
}

async function getByIdStatus(){
    return await StatusB.findAll();
}


async function createStatus(status){
    let error = validateUtilizatori(status);
    if (error.hasErrors)
        return error

    return await StatusB.create(status);
}

async function updateStatus(id, status){
    if (parseInt(id) !== status.StatusID)
        return { hasErrors: true, message: "Entity id diff" };    

    let updateEntity = await getByIdStatus(id);

    if (!updateEntity)
        return { hasErrors: true, message: "There isn't a status with this id" }; 
        
    let error = validateStatusB(status);
    if (error.hasErrors)
        return error

    return await updateEntity.update(status);
}

async function deleteStatus(id){
    let deleteEntity = await getByIdStatus(id);

    if (!deleteEntity)
        return { hasErrors: true, message: "There isn't a status with this id" };

    return await deleteEntity.destroy();
}

export {getByIdStatus, createStatus, updateStatus, deleteStatus};