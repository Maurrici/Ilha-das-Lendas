import { useEffect, useState } from "react";
import Pagination from "../../components/Table/Pagination";
import Table from "../../components/Table/Table";
import DB from "../../data/data";

const Players = () => {
    const players = DB.getPlayerRanking();

    const [playersFiltered, setPlayersFiltered] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(Math.floor(players.length/10));

    useEffect(() => {
        setPlayersFiltered(() => {
            return players.filter((item, index) => {
                let end = page * 10;
                let start = end - 10;
                console.log(start, " ", end);
                return index >= start && index < end; 
            });
        });
    }, [page]);

    return(
        <section className="container">
            <div className="panel">
                <Table type="playerRanking" page={page} data={playersFiltered}>
                </Table>
                <Pagination total={total} page={page} setPage={setPage}></Pagination>
            </div>
        </section>
    )
}

export default Players;