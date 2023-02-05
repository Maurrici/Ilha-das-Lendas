import { Link } from 'react-router-dom';

// CSS
import './Table.css';

const Table = ({type, page = 1, data}) => {
    const baseNumber = (page - 1) * 10
    return(
        <div className="table">
            <div className="table-header">
                <div className="table-row">
                    <div className="table-item number"></div>
                    <div className="table-item big">{type != "player" && "Nome"}</div>
                    {type == "playerRanking" && <div className='table-item'>Rota</div>}
                    <div className="table-item">Overall</div>
                </div>
            </div>
            <div className="table-body">
            {
                data.map((item, index) => {
                    if(type == "team"){
                        return(
                            <Link key={item.id} to={`/team/${item.id}`} className="table-row">
                                <div className="table-item number">{baseNumber + index + 1}</div>
                                <div className="table-item big"><img src={item.img} alt={item.name} /><span>{item.name}</span></div>
                                <div className="table-item number">{item.overall}</div>
                            </Link>
                        )
                    }else if(type == "player"){
                        return(
                            <Link key={item.id} to={`/player/${item.id}`} className="table-row">
                                <div className="table-item number"><img src={item.img} alt={item.role} /></div>
                                <div className="table-item big"><span>{item.nick}</span></div>
                                <div className="table-item number">{item.overall}</div>
                            </Link>
                        )
                    }else if(type == "playerRanking"){
                        return(
                            <Link key={item.id} to={`/player/${item.id}`} className="table-row">
                                <div className="table-item number">{baseNumber + index + 1}</div>
                                <div className="table-item big"><img src={item.img} alt={item.team} /><span>{item.nick}</span></div>
                                <div className="table-item"><img src={`./role/${item.role}.svg`} alt={item.role} /></div>
                                <div className="table-item number">{item.overall}</div>
                            </Link>
                        )
                    }
                })
            }
            </div>
        </div>
    )
}

export default Table;