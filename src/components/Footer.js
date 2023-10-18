import React from "react";
import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function Footer() {
  const { data } = useContext(AppContext);

  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="footerCol">
          <h2 className="lets">
            {data.footerTitle1} <br /> {data.footerTitle2}
          </h2>
          <div className="footerInfo">
            <a href="mailto:y.sinanerdem@gmail.com" className="mail">
              👉 y.sinanerdem@gmail.com
            </a>

            <div className="links-footer">
              <p>{data.footerBlog}</p>
              <a
                href="https://github.com/yserdem/"
                className="githubFooter"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/"
                className="linkedinFooter"
                target="_blank"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
