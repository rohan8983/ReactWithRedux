const initialState = {
  email: "",
  password: "",
  flag: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE":
      return {
        ...state,
        [action.valueType]: action.value,
        flag: false
      };
    case "ON_SUBMIT":
      return {
        ...state,
        flag: true
      };
    default:
      return state;
  }
};

export default rootReducer;
