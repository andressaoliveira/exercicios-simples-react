import React from "react";

import bhImg from './imgs/bh.jpg';
import contagemImg from './imgs/contagem.jpg';
import betimImg from './imgs/betim.jpg';

class Destinos extends React.Component {
    render() {
        return (
            <div id="destinos">
                <h2>Destinos</h2>
                <section href="#belo_horizonte">
                    <h3>Belo Horizonte</h3>
                    <div className="imgDiv">
                        <img src={bhImg} />
                    </div>
                    <p>
                        Sint velit ipsum exercitation non quis ullamco velit aute occaecat. Excepteur laboris duis aliquip irure cillum velit. Deserunt nulla exercitation aute ut voluptate consectetur duis eiusmod eu occaecat. Mollit pariatur velit irure est ullamco sit quis aliquip incididunt ut. Veniam velit tempor eu ad consequat veniam eu cillum. Veniam et culpa eu in nisi exercitation ad cupidatat culpa magna.
                        Amet ullamco et aliquip elit. Nulla deserunt duis officia anim. Incididunt voluptate cupidatat mollit eiusmod quis anim ad quis non. Consequat excepteur id dolore dolor incididunt irure.
                        Cupidatat cupidatat occaecat nisi consectetur reprehenderit fugiat ut eu aliquip culpa amet. Esse esse consectetur dolor ea mollit. Occaecat elit pariatur ad nisi ullamco in do ullamco ex irure proident duis enim. Minim est officia do ut sunt mollit duis aute exercitation. Cupidatat Lorem eu laborum pariatur incididunt exercitation dolore aliquip laboris eu ipsum labore eiusmod. Non sint laborum sunt labore nostrud sint in nostrud deserunt eu sint aliqua. Dolor ex ad magna ad.
                        Mollit esse eiusmod ipsum aliquip magna anim aliqua voluptate. Eiusmod enim elit commodo ex et non ea. Veniam ex ipsum duis reprehenderit do exercitation sint nostrud elit laboris eu duis. Incididunt consectetur proident consectetur Lorem non fugiat. Anim velit et ex esse ut reprehenderit voluptate id.
                    </p>
                </section>
                <section href="#contagem">
                    <h3>Contagem</h3>
                    <div className="imgDiv">
                        <img src={contagemImg} />
                    </div>
                    <p>
                        Lorem qui exercitation ad incididunt duis labore sint nulla cillum sit. Ex Lorem proident consequat laborum laboris sint irure mollit magna duis duis. Sit voluptate laboris elit Lorem nulla tempor mollit consectetur duis ut dolor.
                        Ea do esse magna consequat nulla duis id id dolor cillum. Cupidatat ut ex occaecat minim aliquip commodo. Irure et eiusmod labore mollit proident tempor minim aute mollit aute.
                        Voluptate occaecat exercitation culpa irure nostrud mollit. Ea ipsum occaecat irure adipisicing dolore officia. Esse culpa consequat amet occaecat pariatur eiusmod minim eiusmod aliquip aliquip dolore est.
                    </p>
                </section>
                <section href="#betim">
                    <h3>Betim</h3>
                    <div className="imgDiv">
                        <img src={betimImg} />
                    </div>
                    <p>
                        Irure do commodo Lorem est elit laborum nulla reprehenderit dolor culpa sint elit dolor pariatur. Magna labore exercitation adipisicing amet mollit adipisicing quis fugiat amet veniam id cupidatat reprehenderit. Proident cupidatat ullamco proident aute ipsum anim anim culpa nostrud laborum velit. Aute voluptate veniam duis labore reprehenderit consequat sint qui aliqua proident eiusmod aliqua.
                        Consequat reprehenderit velit pariatur tempor ipsum qui do do laborum. Nostrud voluptate commodo ad nostrud do irure eu tempor excepteur fugiat duis tempor Lorem. Esse laboris qui amet exercitation quis sit eu qui occaecat. Elit occaecat tempor ipsum in ea velit aliqua labore incididunt dolore ut dolore. Adipisicing deserunt sit eiusmod officia id quis veniam nisi commodo occaecat. Deserunt laborum aliquip sint culpa magna irure aute. Esse esse reprehenderit aliqua esse aute magna incididunt anim laboris eiusmod pariatur aute.
                    </p>
                </section>
            </div>
        );
    }
}

export default Destinos;