import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

// CSS
import './Table.css';

const Table = ({type, page = 1, data}) => {
    const baseNumber = (page - 1) * 10
    return(
        <div className="table">
            <div className="table-header">
                <Row className="w-100 justify-content-center">
                    <Col sm={type === "team" ? 2 : 1} className="number"></Col>
                    <Col sm={type === "team" ? 8 : 5} className="text-start">Nome</Col>
                    {type === "playerRanking" && <Col sm className='text-center'>Nacionalidade</Col>}
                    {type === "playerRanking" && <Col sm className='text-center'>Rota</Col>}
                    <Col sm={type === "team" ? 2 : 1} className="text-center">Overall</Col>
                </Row>
            </div>
            <div className="table-body">
            {
                data !== undefined && data.map((item, index) => {
                    if(type === "team"){
                        return(
                            <Link key={item.id} to={`/team/${item.id}`} className="row table-row w-100">
                                <Col sm={2} className="table-item number d-flex justify-content-center">{baseNumber + index + 1}</Col>
                                <Col sm={8} className="table-item"><img src={`${process.env.PUBLIC_URL}` +item.img} alt={item.name} /><span>{item.name}</span></Col>
                                <Col sm={2} className="table-item number d-flex justify-content-center">{item.overall}</Col>
                            </Link>
                        )
                    }else if(type === "player"){
                        return(
                            <Link key={item.id} to={`/player/${item.id}`} className="row table-row w-100">
                                <Col sm={1} className="table-item number d-flex justify-content-center"><img src={`${process.env.PUBLIC_URL}/role/${item.role}.svg`} alt={item.role} /></Col>
                                <Col sm={5} className="table-item text-start">{item.nick}</Col>
                                <Col sm={1} className="table-item number d-flex justify-content-center">{item.overall}</Col>
                            </Link>
                        )
                    }else if(type === "playerRanking"){
                        return(
                            <Link key={item.id} to={`/player/${item.id}`} className="row table-row w-100">
                                <Col sm={1} className="table-item number d-flex justify-content-center">{baseNumber + index + 1}</Col>
                                <Col sm={5} className="table-item text-start">
                                    <img src={`${process.env.PUBLIC_URL}/team/${item.team.toLowerCase()}.png`} alt={item.team} />
                                    <span>{item.nick}</span>
                                </Col>
                                <Col className="table-item d-flex justify-content-center">
                                    <img src={`${process.env.PUBLIC_URL}/country/${item.country}.svg`} alt={item.country} width="30px" height="25px" />
                                </Col>
                                <Col className="table-item d-flex justify-content-center">
                                    <img src={`${process.env.PUBLIC_URL}/role/${item.role}.svg`} alt={item.role} />
                                </Col>
                                <Col sm={1} className="table-item number d-flex justify-content-center">{item.overall}</Col>
                            </Link>
                        )
                    }else{
                        return <></>
                    }
                })
            }
            </div>
        </div>
    )
}

export default Table;