import { btnType } from "./alias/button";

const theme = (btnType: btnType) => {
  console.log(btnType);
  return "btn-dark";
};

export { theme };
