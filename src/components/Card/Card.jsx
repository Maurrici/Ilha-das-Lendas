import { Link } from "react-router-dom";

const Card = ({title, img, linkName, linkPath, style}) => {
    return(
        <div className={style}>
            <div className="card-display-header">
                {title}
            </div>
            <div className="card-display-body">
                <img src={img} alt="Card" />
            </div>
            <div className="card-display-footer">
                <Link to={linkPath}>{linkName}</Link>
            </div>
        </div>
    )
}

export default Card;