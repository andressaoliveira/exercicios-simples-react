import image from "../../assets/wearytraveller.jpeg";

import "./Paths.css";

const Paths = () => {
  return (
    <main>
      <div className="card">
        <h3>São paulo</h3>
        <img src={image} alt="São paulo" />
        <p>
          O estado de São Paulo é o mais desenvolvido economicamente do Brasil.
          Está localizado na Região Sudeste do país e sua capital é a cidade de
          São Paulo, maior centro urbano em população do Brasil.
        </p>
      </div>
      <div className="card">
        <h3>Lisboa</h3>
        <img src={image} alt="Lisboa" />
        <p>
          Lisboa é uma cidade que encanta quem a visita. Com mais de 20 séculos
          de história, a capital portuguesa está situada junto ao rio Tejo. ...
          O doce mais famoso de Lisboa é o tradicional Pastel de Nata,
          confecionado numa antiga fábrica na Freguesia de Belém, mais conhecido
          como Pastel de Belém.
        </p>
      </div>
      <div className="card">
        <h3>Florida</h3>
        <img src={image} alt="Florida" />
        <p>
          A Flórida é uma península cercada por grandes corpos de água: é
          cercada pelo Oceano Atlântico por três lados. Ao norte se localizam os
          Estados do Alabama e da Geórgia. O Estado é dominado por planícies e
          grandes lagos, como o Okeechobee, o quarto maior dos Estados Unidos.
        </p>
      </div>
    </main>
  );
};

export { Paths };
