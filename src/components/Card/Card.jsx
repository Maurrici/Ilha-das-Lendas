import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Card = ({title, data, linkImg, linkName, linkPath, styles}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(linkImg);
    }

    return(
        <div className={styles}>
            <div className="card-display-header">
                {title}
            </div>
            <div className="card-display-body" onClick={() => handleClick()}>
                <div className="card-player">
                    <div className="card-img" style={{backgroundImage: `url('${process.env.PUBLIC_URL + data.img}')`}}>
                        <div className="card-overall">{data.overall}</div>
                    </div>
                </div>
            </div>
            <div className="card-display-footer">
                <Link to={linkPath}>{linkName}</Link>
            </div>
        </div>
    )
}

export default Card;