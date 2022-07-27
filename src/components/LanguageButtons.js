import React from "react";
import { useTranslation } from "react-i18next";

const LanguageButtons = () => {
  // Change language with buttons
  // const { i18n } = useTranslation("navbar");
  // return (
  //   <div>
  //     <button className="button" onClick={() => i18n.changeLanguage("en")}>
  //       EN
  //     </button>
  //     <button className="button" onClick={() => i18n.changeLanguage("es")}>
  //       ES
  //     </button>
  //     <button className="button" onClick={() => i18n.changeLanguage("cat")}>
  //       CAT
  //     </button>
  //   </div>
  // );

  //Change language with select
  const { i18n } = useTranslation();

  const languages = [
    {
      code: "es",
      name: "ES",
    },
    {
      code: "en",
      name: "EN",
    },
    {
      code: "cat",
      name: "CAT",
    },
  ];

  return (
    <section className="lang">
      <select
        className="lang__select"
        defaultValue={i18n.resolvedLanguage}
        onChange={(e) => {
          i18n.changeLanguage(e.target.value);
        }}
      >
        {languages.map(({ code, name }) => {
          return (
            <option key={code} value={code}>
              {name}
            </option>
          );
        })}
      </select>
    </section>
  );
};

export default LanguageButtons;
