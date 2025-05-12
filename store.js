const AddToLocalStorage = () => {
  const idInput = document.getElementById("storage_id");
  const id = idInput.value;

  const valueInput = document.getElementById("storage_value");
  const value = valueInput.value;

  //
  if (id && value) {
    localStorage.setItem(id, value);
  }
  idInput.value = "";
  valueInput.value = "";
};
