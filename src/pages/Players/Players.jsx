import { useState } from "react";
import Table from "../../components/Table/Table";
import DB from "../../data/data";

const Players = () => {
    const [players, setPlayers] = useState(DB.getPlayerRanking());

    return(
        <section className="container">
            <div className="panel">
                <Table type="playerRanking" data={players}>
                </Table>
                
            </div>
        </section>
    )
}

export default Players;