import axios from "axios";
export const getCurrentUserData = (id) => async (dispatch) => {
  await axios
    .get(`api/user/${id}`)
    .then((res) => {
      dispatch({
        type: "GET_CURRENT_USER_DATA",
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

