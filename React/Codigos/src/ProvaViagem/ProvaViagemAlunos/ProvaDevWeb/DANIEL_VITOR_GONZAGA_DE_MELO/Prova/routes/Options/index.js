import React from "react";
import Destination from "../../components/Destination";
import Montezuma1 from '../../assets/images/Montezuma1.jpg'
import Montezuma2 from '../../assets/images/Montezuma2.jpg'
import Montezuma3 from '../../assets/images/Montezuma3.jpg'
import Galapagos1 from '../../assets/images/Galapagos1.jpg'
import Galapagos2 from '../../assets/images/Galapagos2.jpg'
import Galapagos3 from '../../assets/images/Galapagos3.jpg'
import Jamaica1 from '../../assets/images/Jamaica1.jpg'
import Jamaica2 from '../../assets/images/Jamaica2.jpg'
import Jamaica3 from '../../assets/images/Jamaica3.jpg'

export default () =>{
    return <main>
        <Destination
            name="Montezuma"
            images={[Montezuma1, Montezuma2, Montezuma3]}
            text="Montezuma é um município brasileiro do estado de Minas Gerais. Está localizado no norte de Minas Gerais, na microrregião de Salinas, compõe com outros municípios o Alto Rio Pardo. O município faz divisa com a cidade de Mortugaba, no estado da Bahia e com os municípios mineiros de Espinosa, Santo Antônio do Retiro, Rio Pardo de Minas, Vargem Grande do Rio Pardo e São João do Paraíso. Montezuma é famosa por possuir um balneário de águas quentes naturais, uma das principais fontes de renda para sua população. As principais produções do município são: agropecuária e produção de carvão vegetal."
        />
        <Destination
            name="Ilhas Galápagos"
            images={[Galapagos1, Galapagos2, Galapagos3]}
            text="As ilhas Galápagos são um arquipélago vulcânico do Oceano Pacífico. Elas são consideradas um dos destinos mais procurados do mundo para observação de vida selvagem. Essa província do Equador está localizada a aproximadamente 1.000 km da costa do país. Suas terras isoladas abrigam várias espécies de plantas e animais, muitas não encontradas em outros lugares. Charles Darwin visitou as ilhas em 1835. A observação das espécies de Galápagos inspirou sua teoria da evolução."
        />
        <Destination
            name="Jamaica"
            images={[Jamaica1, Jamaica2, Jamaica3]}
            text="A Jamaica é um país insular no Caribe com uma topografia exuberante de montanhas, florestas tropicais e praias com recifes. Muitos dos seus resorts all-inclusive estão localizados em Montego Bay, com sua arquitetura colonial britânica, e Negril, conhecida pelos locais de mergulho e snorkeling. A Jamaica é famosa como berço da música reggae, e sua capital, Kingston, abriga um museu dedicado ao cantor Bob Marley"
        />
    </main>
}