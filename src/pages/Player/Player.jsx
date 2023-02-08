import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import LineChart from "../../components/LineChart/LineChart";
import DB from "../../data/data";

const Team = () => {
    const {id} = useParams();
    const player = DB.getPlayer(parseInt(id));
    console.log(player);

    // Linear Chart data
    const dataLinear = player.overallHistory;
    
    return(
        <div className="container">
            <section className="panel mb-4 pb-5">
                <Row>
                    <Col sm={12} md={9}>
                        <div className="title-display">
                            <div className="title-name">
                                Dados
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={3}>
                        <img className="img-fluid" src={`/team/${player.team.toLowerCase()}.png`} alt={player.team} />
                    </Col>
                </Row>
                <Row>
                    <Col md>
                        <div className="card-player">
                            <img src={player.img} alt={player.nick} />
                        </div>
                    </Col>
                    <Col sm={12} md> 
                        <div className="card-details">
                            <div><div className="text-white">Nome:</div> <div>{player.name}</div></div>
                            <div><div className="text-white">Nick:</div> <div>{player.nick}</div></div>
                            <div><div className="text-white">Role:</div> <div>{player.role}</div></div>
                            <div><div className="text-white">Nacionalidade:</div> <div>{player.country}</div></div>
                            <div><div className="text-white">MVPs:</div> <div>{player.mvp}</div></div>
                            <div><div className="text-white">Bagres:</div> <div>{player.bagre}</div></div>
                        </div>
                    </Col>
                </Row>
            </section>
            <section className="panel mb-4">
                <Row>
                    <Col md>
                        <div className="title-display">
                            <div className="title-name">
                                Progresso
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="p-3 justify-content-center">
                    <Col sm={12} md={8}>
                        <LineChart values={dataLinear} />
                    </Col>
                </Row>
            </section>
        </div>
    )
}

export default Team;