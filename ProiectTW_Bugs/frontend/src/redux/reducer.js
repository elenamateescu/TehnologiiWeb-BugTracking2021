const initialState = {
  currentUser: {},
};

export const getCurrentUserData = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CURRENT_USER_DATA":
      return { currentUser: action.payload };
    default:
      return state;
  }
};
