import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Filter from "../../components/Table/Filter";
import Pagination from "../../components/Table/Pagination";
import Table from "../../components/Table/Table";
import DB from "../../data/data";

const Players = () => {

    // Dados
    const players = DB.getPlayerRanking();
    const roles = DB.getRoles();
    const coutries = DB.getCountries();
    const teams = DB.getTeams();

    const [playersList, setPlayersList] = useState([]);
    
    // Filtros de Listagem
    const [playersFiltered, setPlayersFiltered] = useState(players);
    const [role, setRole] = useState('');
    const [country, setCountry] = useState('');
    const [team, setTeam] = useState('');
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(Math.ceil(playersFiltered.length/10));

    // Filtrando a lista
    useEffect(() => {
        if(role == '' || team == '' || country == '') setPlayersFiltered(players);

        if(role != ''){
            setPlayersFiltered((previousList) => previousList.filter(item => item.role === role));
        }

        if(team != ''){
            setPlayersFiltered((previousList) => previousList.filter(item => item.team === team));
        }

        if(country != ''){
            setPlayersFiltered((previousList) => previousList.filter(item => item.country === country));
        }
    }, [role, team, country]);

    // Mudança de páginas
    useEffect(() => {
        setTotal(Math.ceil(playersFiltered.length/10));
        setPage(1);
    }, [playersFiltered]);

    useEffect(() => {
        setPlayersList(() => {
            return playersFiltered.filter((item, index) => {
                let end = page * 10;
                let start = end - 10;
                return index >= start && index < end; 
            });
        });
    }, [page, playersFiltered]);

    return(
        <section className="container">
            <div className="panel">
                <div className="sub-panel mb-2">
                    <Row className="w-100">
                        <Col sm={12} md>
                            <Filter value={role} setValue={setRole} data={roles} placeholder="Rota" />
                        </Col>
                        <Col sm={12} md>
                            <Filter value={team} setValue={setTeam} data={teams} placeholder="Time" />
                        </Col>
                        <Col sm={12} md>
                            <Filter value={country} setValue={setCountry} data={coutries} placeholder="Nacionalidade" />
                        </Col>
                    </Row>
                </div>
                <Table type="playerRanking" page={page} data={playersList}>
                </Table>
                <Pagination total={total} page={page} setPage={setPage}></Pagination>
            </div>
        </section>
    )
}

export default Players;