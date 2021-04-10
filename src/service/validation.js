export const isFormValid = (updateFormData) => {
  let errors = [];
  if (updateFormData.id === "") {
    errors.push("Preencha o ID");
  }
  if (updateFormData.name === "") {
    errors.push("Preencha o Name");
  }
  if (!updateFormData.types.length) {
    errors.push("Preencha o Type");
  }

  return errors;
};
