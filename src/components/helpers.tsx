import { btnType } from "./alias/button";

// const isEmptyStr = () => {}

const theme = (btnType: btnType) => {
  if (btnType === "primary") return "btn-primary";
  else if (btnType === "secondary") return "secondary";
  else if (btnType === "success") return "success";
  else if (btnType === "danger") return "danger";
  else if (btnType === "warning") return "warning";
  else if (btnType === "info") return "info";
  else if (btnType === "light") return "light";
  else if (btnType === "dark") return "dark";
  else if (btnType === "link") return "link";
  else return "dark";
};

export { theme };
