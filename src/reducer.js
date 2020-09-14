//initial state is how the data layer looks before we added to it anything
export const initialState = {
  user: null, //user not been logged in
};
export const actionTypes = {
  SET_USER: "SET_USER", //we can push the info in the data layer
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state, //keep the state of the data layer but change the user to be whatever we dispatched
        user: action.user,
      };
    default:
      return state; //don't do anything with that
  }
};

export default reducer;
