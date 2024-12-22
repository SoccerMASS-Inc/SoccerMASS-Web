export const setCssThemeVar = (theme: Theme) => {
  if (document) {
    import("utils/constants").then((module) => {
      const colors = module.COLORS;

      if (theme === "dark") {
        document.documentElement.style.setProperty("--theme", "dark");
        document.documentElement.style.setProperty("--text-primary-color", colors.darkThemePrimaryColor);
        document.documentElement.style.setProperty("--text-contrast-color", colors.darkThemeContrastColor);
        document.documentElement.style.setProperty("--text-secondary-color", colors.darkThemeSecondaryColor);
      } else {
        document.documentElement.style.setProperty("--theme", "light");
        document.documentElement.style.setProperty("--text-primary-color", colors.lightThemePrimaryColor);
        document.documentElement.style.setProperty("--text-contrast-color", colors.lightThemeContrastColor);
        document.documentElement.style.setProperty("--text-secondary-color", colors.lightThemeSecondaryColor);
      }
    });
  }
};

export const textToId = (phrase: string) => {
  if (!phrase) throw { message: "Unable to transform string" };
  return phrase.replace(/\s+/g, "-").toLowerCase();
};
