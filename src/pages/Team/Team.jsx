import "./Team.css"
import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import RadarChart from "../../components/RadarChart/RadarChart";
import Table from "../../components/Table/Table";
import DB from "../../data/data";

const Team = () => {
    const {id} = useParams();
    const team = DB.getTeam(id);
    const players = team.players;

    // Chart data
    const data = [0,0,0,0,0];
    team.players.forEach(player =>{
        if(player.role.toLocaleLowerCase() == "top") data[0] = player.overall;
        else if(player.role.toLocaleLowerCase() == "jg") data[1] = player.overall;
        else if(player.role.toLocaleLowerCase() == "sup") data[2] = player.overall;
        else if(player.role.toLocaleLowerCase() == "adc") data[3] = player.overall;
        else if(player.role.toLocaleLowerCase() == "mid") data[4] = player.overall;
    });
    
    return(
        <div className="container">
            <section className="panel mb-4">
                <Row>
                    <Col md>
                        <div className="title-display">
                            <img src={team.img} alt="Fluxo" />
                            <div className="title-name">
                                {team.name} <span className="title-shortName">{team.shortName}</span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md> 
                        <div className="overall">
                            <div className="center-div">{team.overall}</div>
                            <span>Overall</span>
                        </div>
                    </Col>
                    <Col sm={12} md> 
                        <div className="overall">
                            <div>
                                <RadarChart values={data} />
                            </div>
                            <span>Poder da Line up</span>
                        </div>
                    </Col>
                </Row>
            </section>
            <section className="panel">
                <Row>
                    <div className="title-display">
                        <div className="title-name">
                            Line up
                        </div>
                    </div>
                </Row>
                <Table type="player" data={players}>

                </Table>
            </section>
        </div>
    )
}

export default Team;