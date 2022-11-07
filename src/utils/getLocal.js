export const getLocal = () => {
  if (localStorage.getItem("idUser") === null) {
    return false;
  } else {
    return true;
  }
};
