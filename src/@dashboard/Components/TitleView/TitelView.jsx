import {Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TitelView.scss"



const TitleView = ({title , btn, pathText }) => {
    return (
       
        <Container className="Titles">

                <div className="Adress">{title}</div>

                <Link to={`${pathText}`}  className="Link_Title" style={{textDecoration:'none'}}>{btn} </Link>

        </Container>
)
}
export default TitleView ;