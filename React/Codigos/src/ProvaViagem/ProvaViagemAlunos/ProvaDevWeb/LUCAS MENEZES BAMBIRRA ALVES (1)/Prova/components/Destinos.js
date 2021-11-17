import React from "react";

// const lugares = ["Jotunheim", "Asgard", "Midgard"];

class Destinos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      // Lista de destinos com título, imagem, descrição e link para wikipédia.
      <div className="main destinos">
        <div className="card">
          <h1>Jotunheim</h1>
          <img src="../img/jotun.jpg" alt="Jotunheim"></img>
          <p>Na mitologia nórdica, Jotunheim ou Jötunheimr é o mundo dos gigantes[1][2][3] (de dois tipos: rocha e neve, chamados coletivamente de Jotuns). A partir deste mundo, os gigantes ameaçavam os seres humanos em Midgard e os deuses em Asgard (cujos mundos são separados pelo rio Iving). A cidade principal de Jotunheim é Utgard. Gastropnir, lar de Menglod; e Thrymheim, repouso de Tiazi, eram ambos lugares situados em Jotunheim, que era governado pelo rei Thrym. </p>
          <a href="https://pt.wikipedia.org/wiki/Jotunheim" target="_new">Wikipédia</a>
        </div>
        <div className="card">
          <h1>Midgard</h1>
          <img src="../img/mid.jpg" alt="Midgard"></img>
          <p>Midgard (em nórdico antigo Miðgarðr; em islandês: Miðgarður; em norueguês: Midgard; em dinamarquês: Midgård; em sueco: Midgård; em gótico: Midjungards; em inglês antigo: Middangeard) é o reino dos humanos na mitologia nórdica, correspondendo à Terra como então era conhecida.[1][2] Midgard é o domínio da deusa Jord. No inglês médio, o nome se transformou em Middel-erde e resultou na Terra-média, conhecida modernamente. </p>
          <a href="https://pt.wikipedia.org/wiki/Midgard" target="_new">Wikipédia</a>
        </div>
        <div className="card">
          <h1>Asgard</h1>
          <img src="../img/asg.jpg" alt="Asgard"></img>
          <p>Asgard (em nórdico antigo: Ásgarðr) é o reino dos deuses, os Æsir, na mitologia nórdica, mundo separado do reino dos mortais, Midgard.[1][2] Asgard era, originalmente, conhecido como Godheim (o repouso dos deuses), pois os primeiros investigadores da mitologia confundiram o nome do mundo dos deuses com o seu castelo mais importante e, neste caso, Godheim se tornou Asgard em muitas fontes históricas. </p>
          <a href="https://pt.wikipedia.org/wiki/Asgard" target="_new">Wikipédia</a>
        </div>
      </div>
    )
  }
}

export default Destinos