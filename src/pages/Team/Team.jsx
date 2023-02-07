import "./Team.css"
import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import RadarChart from "../../components/RadarChart/RadarChart";
import LineChart from "../../components/LineChart/LineChart";
import Table from "../../components/Table/Table";
import DB from "../../data/data";

const Team = () => {
    const {id} = useParams();
    const team = DB.getTeam(parseInt(id));
    const players = team.players;

    // Radial Chart data
    const dataRadial = [0,0,0,0,0];
    team.players.forEach(player =>{
        if(player.role.toLocaleLowerCase() === "top") dataRadial[0] = player.overall;
        else if(player.role.toLocaleLowerCase() === "jg") dataRadial[1] = player.overall;
        else if(player.role.toLocaleLowerCase() === "sup") dataRadial[2] = player.overall;
        else if(player.role.toLocaleLowerCase() === "adc") dataRadial[3] = player.overall;
        else if(player.role.toLocaleLowerCase() === "mid") dataRadial[4] = player.overall;
    });

    // Linear Chart data
    const dataLinear = [];
    const arrayOverall = team.players.map(player => player.overallHistory);
    console.log(arrayOverall);
    let sum;
    let media;
    for(let i = 0; i < arrayOverall[0].length; i++){
        sum = 0;
        for(let j = 0; j < arrayOverall.length; j++){
            sum += arrayOverall[j][i];
        } 

        media = (sum/arrayOverall.length).toFixed(1);
        dataLinear.push(media);
    }
    
    
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
                                <RadarChart values={dataRadial} />
                            </div>
                            <span>Poder da Line up</span>
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