import DB from "../../data/data";

// Components
import Table from "../../components/Table/Table";


const Teams = () => {
    const teams = DB.getTeamRanking();
    
    return(
        <section className="container">
            <div className="panel">
                <Table type="team" data={teams}/>
            </div>
        </section>
    )
}

export default Teams;