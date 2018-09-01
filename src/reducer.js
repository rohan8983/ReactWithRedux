const initialState = {
  name: "",
  display: false
};

export default function sampleApp(state = initialState, action) {
  switch (action.type) {
    case "HANDLE_NAME_CHANGE":
      return {
        ...state,
        [action.valueType]: action.value
      };
    case "HANDLE_DISPLAY_NAME":
      return {
        ...state,
        display: action.flag
      };
    default:
      return state;
  }
}
