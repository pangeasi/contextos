import { INPUTS } from "../store/inputs";
import { useDispatcher, useSelect } from "../utils/jotai";

export const Input = ({ path, type }) => {
  const input = useSelect(INPUTS, path);
  const dispatch = useDispatcher(INPUTS);
  return (
    <input
      type={type}
      value={input}
      onChange={(term) => dispatch({ [path]: term.target.value })}
    />
  );
};
