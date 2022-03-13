import { useEffect } from "react";

const appendScript = (scriptToAppend) => {
  const script = document.createElement("script");
  script.src = scriptToAppend;
  script.async = true;
  document.body.appendChild(script);
};

const changeTitle = (title) => {
  // useEffect(() => {
    const prevTitle = "Pesantren Habiburrahman | " + document.title;
    document.title = "Pesantren Habiburrahman | " + title;
    return () => {
      document.title = prevTitle;
    }
  // });
};

export { appendScript, changeTitle };
