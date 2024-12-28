import { AppDispatch } from "../appStore";

export const setThemeAction = (data: Theme) => {
  console.log("dddd");

  import("utils/helpers").then((module) => module.setCssThemeVar(data));
  return (dispatch: AppDispatch) => dispatch({ type: "SET_THEME", data });
};

export const setProfileAction = (data: Profile) => (dispatch: AppDispatch) => {
  dispatch(setThemeAction(data.theme));
  dispatch({ type: "SET_PROFILE", data });
};
