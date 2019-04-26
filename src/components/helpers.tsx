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

// This area is a helper class for an input
// newline = block
// left = text-align=left
// right = text-align=right
// center = text-align=center
const alignment = (alignment: string) => {
  if (alignment === "right") return "right";
  else if (alignment === "left") return "left";

  return "right";
  console.log("alignment: ", alignment);
  console.log("What is the alignment??");
};

export { theme, alignment };
