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
                    <Card title="Maior Overall" img={topPlayer.img} linkImg={`/player/${topPlayer.id}`} linkPath="/player" linkName="Ver todos os jogadores" />
                </Col>
                <Col sm={12} md className="card-display">
                    <Card title="Menor Overall" img={worstPlayer.img} linkImg={`/player/${worstPlayer.id}`} linkPath="/player" linkName="Ver todos os jogadores" />
                </Col>
            </Row>
            <Row className="justify-content-between gap-3 mb-5">
                <Col sm={12} md className="card-display">
                    <Card title="Mais MVPs" img={topMvp.img} linkImg={`/player/${topMvp.id}`} linkPath="/player" linkName="Ver todos os jogadores" />
                </Col>
                <Col sm={12} md className="card-display">
                    <Card title="Mais Bagres" img={topBagre.img} linkImg={`/player/${topBagre.id}`} linkPath="/player" linkName="Ver todos os jogadores" />
                </Col>
            </Row>
            <Row className="justify-content-between gap-3 mb-5">
                <Col sm={12} md className="card-display">
                    <Card title="Time de maior Over" img={topTeam.img} linkImg={`/player/${topTeam.id}`} linkPath="/team" linkName="Ver todos os times" style="img-team" />
                </Col>
                <Col sm={12} md className="card-display">
                    <Card title="Time de menor Over" img={worstTeam.img} linkImg={`/player/${worstTeam.id}`} linkPath="/team" linkName="Ver todos os times" style="img-team" />
                </Col>
            </Row>
        </section>
    )
}

export default Home;