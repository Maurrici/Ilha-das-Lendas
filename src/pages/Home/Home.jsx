import DB from "../../data/data";

// Components
import Table from "../../components/Table/Table";
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
            <Row className="justify-content-between gap-3 mb-5">
                <Col sm={12} md className="card-display">
                    <Card title="Maior Overall" img={topPlayer.img} linkPath="/player" linkName="Ver todos os jogadores" />
                </Col>
                <Col sm={12} md className="card-display">
                    <Card title="Menor Overall" img={worstPlayer.img} linkPath="/player" linkName="Ver todos os jogadores" />
                </Col>
            </Row>
            <Row className="justify-content-between gap-3 mb-5">
                <Col sm={12} md className="card-display">
                    <Card title="Mais MVPs" img={topMvp.img} linkPath="/player" linkName="Ver todos os jogadores" />
                </Col>
                <Col sm={12} md className="card-display">
                    <Card title="Menor Overall" img={topBagre.img} linkPath="/player" linkName="Ver todos os jogadores" />
                </Col>
            </Row>
            <Row className="justify-content-between gap-3 mb-5">
                <Col sm={12} md className="card-display">
                    <Card title="Time de maior Over" img={topTeam.img} linkPath="/team" linkName="Ver todos os times" style="img-team" />
                </Col>
                <Col sm={12} md className="card-display">
                    <Card title="Time de menor Over" img={worstTeam.img} linkPath="/team" linkName="Ver todos os times" style="img-team" />
                </Col>
            </Row>
        </section>
    )
}

export default Home;