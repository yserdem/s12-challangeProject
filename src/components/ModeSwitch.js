import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function ModeSwitch() {
  const { data, lang, setLang, darkMode, setDarkMode } = useContext(AppContext);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleLanguage = () => {
    const newLang = lang === 'tr' ? 'en' : 'tr';
    setLang(newLang);
  };

  return (
    <div>
      <div className="modeSwitch">
        <div className="mode">
          <label className="toggle-switch">
            <input
              type="checkbox"
              className="toggle-switch-checkbox"
              onChange={handleToggle}
              checked={darkMode}
            />
            <span className="slider round"></span>
          </label>
          <div className="modeText">
            {darkMode ? data.lightMod : data.darkMod}
          </div>
          <div className="modeText">|</div>
          <div className="modeText">
            <span onClick={handleLanguage} id="lang">
              {data.language}
            </span>
            {data.languageEk}
          </div>
        </div>
      </div>
    </div>
  );
}
