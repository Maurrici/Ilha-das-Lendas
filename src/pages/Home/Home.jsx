import DB from "../../data/data";

// Components
import { Row, Col } from "react-bootstrap";
import Card from "../../components/Card/Card";


const Home = () => {
    const topTeam = DB.getTopTeam();
    const worstTeam = DB.getWorstTeam();
    const topPlayer = DB.getTopPlayer();
    const worstPlayer = DB.getWorstPlayer();
    const topMvp = DB.getTopMVP();
    const topBagre = DB.getTopBagre();
    
    return(
        <section className="container">
            <Row className="justify-content-between gap-md-3">
                <Col sm={12} md className="card-display mb-5">
                    <Card title="Maior Overall" data={topPlayer} linkImg={`/player/${topPlayer.id}`} linkPath="/player" linkName="Ver todos os jogadores" />
                </Col>
                <Col sm={12} md className="card-display mb-5">
                    <Card title="Menor Overall" data={worstPlayer} linkImg={`/player/${worstPlayer.id}`} linkPath="/player" linkName="Ver todos os jogadores" />
                </Col>
            </Row>
            <Row className="justify-content-between gap-md-3">
                <Col sm={12} md className="card-display mb-5">
                    <Card title="Mais MVPs" data={topMvp} linkImg={`/player/${topMvp.id}`} linkPath="/player" linkName="Ver todos os jogadores" />
                </Col>
                <Col sm={12} md className="card-display mb-5">
                    <Card title="Mais Bagres" data={topBagre} linkImg={`/player/${topBagre.id}`} linkPath="/player" linkName="Ver todos os jogadores" />
                </Col>
            </Row>
            <Row className="justify-content-between gap-md-3">
                <Col sm={12} md className="card-display mb-5">
                    <Card title="Time de maior Over" data={topTeam} linkImg={`/team/${topTeam.id}`} linkPath="/team" linkName="Ver todos os times" styles={"img-team"} />
                </Col>
                <Col sm={12} md className="card-display mb-5">
                    <Card title="Time de menor Over" data={worstTeam} linkImg={`/team/${worstTeam.id}`} linkPath="/team" linkName="Ver todos os times" styles={"img-team"} />
                </Col>
            </Row>
        </section>
    )
}

export default Home;