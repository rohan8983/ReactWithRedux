export function onChangeName(value, valueType) {
  return {
    type: "HANDLE_NAME_CHANGE",
    value,
    valueType
  };
}

export function displayOnSubmit(flag) {
  return {
    type: "HANDLE_DISPLAY_NAME",
    flag
  };
}
