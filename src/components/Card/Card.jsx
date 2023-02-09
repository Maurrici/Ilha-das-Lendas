import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Card = ({title, img, linkImg, linkName, linkPath, style}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(linkImg);
    }

    return(
        <div className={style}>
            <div className="card-display-header">
                {title}
            </div>
            <div className="card-display-body" onClick={() => handleClick()}>
                <img src={`${process.env.PUBLIC_URL}` +img} alt="Card" />
            </div>
            <div className="card-display-footer">
                <Link to={linkPath}>{linkName}</Link>
            </div>
        </div>
    )
}

export default Card;