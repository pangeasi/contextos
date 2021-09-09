import { atom, useAtom } from "jotai";
import { useMemo } from "react";
import { get as getPath } from "lodash";

export const useSelect = (state, path) =>
  useAtom(
    useMemo(() => atom((get) => getPath(get(state), path)), [state, path])
  ).at(0);

export const useDispatcher = (state) =>
  useAtom(
    useMemo(
      () =>
        atom(null, (get, set, update) =>
          set(state, { ...get(state), ...update })
        ),
      [state]
    )
  ).at(1);
