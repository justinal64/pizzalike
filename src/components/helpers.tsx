import { btnType } from "./alias/button";
const possibleTypes = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
  "link"
];

const theme = (btnType: btnType) => {
  // I'm doing this check for anyone using a component in a .js file
  if (possibleTypes.indexOf(btnType.toLowerCase()) > -1)
    return btnType.toLowerCase();
  else return "primary";
};

export { theme };
