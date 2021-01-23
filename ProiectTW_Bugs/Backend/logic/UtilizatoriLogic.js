import Utilizatori from "../entities/Utilizatori.js";

function validateUtilizatori(utilizatori) {
  if (!utilizatori || Object.entries(utilizatori).length === 0)
    return { hasErrors: true, message: "You must provide users information" };

  if (!utilizatori.UserName)
    return { hasErrors: true, message: "User name is mandatory" };

  if (!utilizatori.AdresaEmail)
    return { hasErrors: true, message: "Email adress is mandatory" };

  if (!utilizatori.TipUser)
    return { hasErrors: true, message: "User type is mandatory" };

  return { hasErrors: false, message: "" };
}

async function getByIdUser() {
  return await Utilizatori.findAll();
}

async function createUtilizator(utilizatori) {
  let error = validateUtilizatori(utilizatori);
  if (error.hasErrors) return error;

  return await Utilizatori.create(utilizatori);
}

async function updateUser(id, utilizatori) {
  if (parseInt(id) !== utilizatori.UserID)
    return { hasErrors: true, message: "Entity id diff" };

  let updateEntity = await getByIdUser(id);

  if (!updateEntity)
    return { hasErrors: true, message: "There isn't a user with this id" };

  let error = validateBug(utilizatori);
  if (error.hasErrors) return error;

  return await updateEntity.update(utilizatori);
}

async function deleteUser(id) {
  let deleteEntity = await getByIdBug(id);

  if (!deleteEntity)
    return { hasErrors: true, message: "There isn't a user with this id" };

  return await deleteEntity.destroy();
}

export { getByIdUser, createUtilizator, updateUser, deleteUser };
