export const handleChange = (value, valueType) => ({
  type: "HANDLE_CHANGE",
  value,
  valueType
});

export const onSubmit = data => ({ type: "ON_SUBMIT", data });
