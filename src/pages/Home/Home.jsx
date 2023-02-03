import DB from "../../data/data";

// Components
import Table from "../../components/Table/Table";


const Home = () => {
    const teams = DB.getTeamRanking();
    
    const headers = ["", "Times", "Overall"]
    return(
        <section className="container">
            <div className="panel">
                <Table type="team" headers={headers} data={teams}/>
            </div>
        </section>
    )
}

export default Home;