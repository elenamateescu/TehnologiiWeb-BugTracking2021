import Istoric from '../entities/Istoric.js';


function validateIstoric(istoric){
    if (!istoric || Object.entries(istoric).length === 0)
    return { hasErrors: true, message: "You must provide history information" };

    if (!istoric.DataBug)
    return { hasErrors: true, message: "Data bug is mandatory" };

if (!istoric.UserID)
    return { hasErrors: true, message: "User Id is mandatory" };

if (!istoric.Mpdificare)
    return { hasErrors: true, message: "Modify is mandatory" };

return { hasErrors: false, message: "" };
}

async function getByIdIstoric(){
    return await Istoric.findAll();
}


async function createIstoric(istoric){
    let error = validateIstoric(istoric);
    if (error.hasErrors)
        return error

    return await Istoric.create(istoric);
}


async function deleteIstoric(id){
    let deleteEntity = await getByIdIstoric(id);

    if (!deleteEntity)
        return { hasErrors: true, message: "There isn't a history with this id" };

    return await deleteEntity.destroy();
}

export {getByIdIstoric, createIstoric, deleteIstoric};