import { useState } from "react";

const STORAGE_KEY = "checkl-theme";

const HLJS_STYLES = {
  light: "//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/github.min.css",
  dark: "//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/github-dark-dimmed.min.css",
};

export const getTheme = () =>
  document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";

const applyTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  const hljsStyle = document.getElementById("hljs-theme");
  if (hljsStyle) {
    hljsStyle.href = HLJS_STYLES[theme];
  }
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch (ignore) {}
};

export const ThemeToggle = (props) => {
  const [theme, setTheme] = useState(getTheme);
  const other = theme === "dark" ? "light" : "dark";
  return (
    <button
      {...props}
      title={"Switch to " + other + " theme"}
      onClick={() => {
        applyTheme(other);
        setTheme(other);
      }}
    >
      {other === "light" ? "☀ Light" : "☾ Dark"}
    </button>
  );
};
