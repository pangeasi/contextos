import { INPUTS } from "../store/inputs";
import { useSelect } from "../utils/jotai";

export const Message = ({ path }) => {
  const input = useSelect(INPUTS, path);
  console.log("RENDER", path);
  return <small>El mensaje es: {input} </small>;
};
