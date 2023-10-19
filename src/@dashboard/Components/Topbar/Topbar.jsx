import "./Topbar.scss";
import egypt from "../../../assets/Images/egypt.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faEnvelope, faGear, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import abdo from "../../../assets/Images/abdo.jpg";
import eng from "../../../assets/Images/eng.png";
import ger from "../../../assets/Images/ger.png";
import ital from "../../../assets/Images/ital.png";

import Search from "../search/search";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { faYelp } from "@fortawesome/free-brands-svg-icons";

const Topbar = () => {
  return (
    <div className="Topbar_Container">
      <div className="search_item">
        <FontAwesomeIcon
          icon={faBars}
          size="xl"
          style={{ color: "#878a99", marginRight: 10 }}
        />
        <Search />
      </div>

      <div className="Personal_Data">

        <div className="Icons">

          <div className="img">

            <Dropdown >

              <Dropdown.Toggle className="Profil_Btns">
              <img src={egypt} alt="egypt" />
              </Dropdown.Toggle>


              <Dropdown.Menu className="Menu_flags">

                <Dropdown.Item href="#/action-1">
                <img src={eng} alt="england" />
                </Dropdown.Item>

                <Dropdown.Item href="#/action-1" >
                <img src={ger} alt="Germany" />
                </Dropdown.Item>


                <Dropdown.Item href="#/action-1" >
                <img src={ital} alt="Italia" />
                </Dropdown.Item>
              </Dropdown.Menu>

            </Dropdown>

          </div>

          <div className="bell">
          <Dropdown as={ButtonGroup}>

        <Dropdown.Toggle className="Profil_Btns">
        <FontAwesomeIcon
            icon={faBell}
            size="xl"
            style={{ color: "#525760", marginRight: 20, cursor: "pointer" }}
          />



          
        </Dropdown.Toggle>




        <Dropdown.Menu className="Menu">

          <Dropdown.Item href="#/action-1" className="menu_item">
          <FontAwesomeIcon icon={faUser} style={{color: "#4e5156", marginRight:5}} />
          <Link className="Link"> 2525</Link>
          
          </Dropdown.Item>

          <Dropdown.Item href="#/action-1" className="menu_item">
          <FontAwesomeIcon icon={faUser} style={{color: "#4e5156", marginRight:5}} />
          <Link className="Link"> 2222</Link>
          
          </Dropdown.Item>


          </Dropdown.Menu>
            </Dropdown>



          </div>



        </div>
        


        <Dropdown as={ButtonGroup}>

          <Dropdown.Toggle className="Profil_Btns">

            <div className="name">
              <img src={abdo} alt="aboda" />
              <div className="data">
                <h5>Abdelfatah</h5>
                <p>Develober</p>
              </div>
            </div>
            
          </Dropdown.Toggle>

          <Dropdown.Menu className="Menu">

            <Dropdown.Item href="#/action-1" className="menu_item">
            <FontAwesomeIcon icon={faUser} style={{color: "#4e5156", marginRight:5}} />
            <Link className="Link"> Profile</Link>
            
            </Dropdown.Item>



            <Dropdown.Item href="#/action-1" className="menu_item">
            <FontAwesomeIcon icon={faGear} style={{color:"#4e5156", marginRight:5}} />
            <Link className="Link"> Setting</Link>
            
            </Dropdown.Item>

            <Dropdown.Item href="#/action-1" className="menu_item">
            <FontAwesomeIcon icon={faEnvelope} style={{color:"#4e5156", marginRight:5}} />
            <Link className="Link"> Messages</Link>
            
            </Dropdown.Item>

            <Dropdown.Item href="#/action-1" className="menu_item">
            <FontAwesomeIcon icon={faYelp} style={{color:"#4e5156", marginRight:5}} />
            <Link className="Link"> Help</Link>
            
            </Dropdown.Item>

            
            <Dropdown.Item href="#/action-1" className="menu_item">
            <FontAwesomeIcon icon={faRightFromBracket} style={{color:"#4e5156", marginRight:5}} />
            <Link className="Link"> Log out</Link>
            
            </Dropdown.Item>

          </Dropdown.Menu>
        </Dropdown>



      </div>
    </div>
  );
};

export default Topbar;
