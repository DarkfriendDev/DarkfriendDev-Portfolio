import htmlIcon from "./assetsTecno/html.png";
import cssIcon from "./assetsTecno/css.png";
import jsIcon from "./assetsTecno/JS.png";
import tsIcon from "./assetsTecno/typescript.png";
import nodejs from "./assetsTecno/nodejs.png";
import mongodb from "./assetsTecno/mongodb.png";
import tailwindIcon from "./assetsTecno/tailwind.png";
import reactIcon from "./assetsTecno/react.png";
import gitIcon from "./assetsTecno/git.png";

import "./Tecnologias.css";
import CadaTecnologia from "./CadaTecnologia";
import "../../MediaQueries.css";

function Tecnologias() {
  return (
    <>
      <section className="tecnologias">
        <div id="tecnologias">
          <h2>Tecnologias</h2>
          <div className="groupTechs">
            <CadaTecnologia img={htmlIcon} titulo="HTML" />

            <CadaTecnologia img={cssIcon} titulo="CSS" />
            <CadaTecnologia img={jsIcon} titulo="JavaScript" />
            <CadaTecnologia img={tailwindIcon} titulo="Tailwind" />
            <CadaTecnologia img={reactIcon} titulo="React" />
            <CadaTecnologia img={nodejs} titulo="NodeJS" />

            <CadaTecnologia img={mongodb} titulo="MongoDB" />
            <CadaTecnologia img={tsIcon} titulo="TypeScript" />
            <CadaTecnologia img={gitIcon} titulo="Git" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Tecnologias;
