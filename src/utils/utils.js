import { useEffect } from "react";

const SERVER_URL = "http://localhost:4001/";

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
  };
  // });
};

const getBirthDate = (date) => {
  const month = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const getDate = new Date(date);

  return `${getDate.getDate()} ${
    month[getDate.getMonth()]
  } ${getDate.getFullYear()}`;
};

export { SERVER_URL, appendScript, changeTitle, getBirthDate };
