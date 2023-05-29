import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import LineChart from "../../components/LineChart/LineChart";
import DB from "../../data/data";

const Team = () => {
    const {id} = useParams();
    const player = DB.getPlayer(parseInt(id));

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
                    <Col sm={12} md={3} className="d-flex justify-content-center aligm-items-center">
                        <img className="img-fluid" src={`${process.env.PUBLIC_URL}/team/${player.team.toLowerCase()}.png`} alt={player.team} />
                    </Col>
                </Row>
                <Row>
                    <Col md>
                        <div className="card-player">
                            <div className="card-img" style={{backgroundImage: `url(${process.env.PUBLIC_URL + player.img})`}}>
                                <div className="card-overall">{player.overall}</div>
                            </div>
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