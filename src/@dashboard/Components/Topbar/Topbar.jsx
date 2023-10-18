import "./Topbar.scss";
import egypt from "../../../assets/Images/egypt.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import abdo from "../../../assets/Images/abdo.jpg";
import eng from "../../../assets/Images/eng.png";
import Search from "../search/search";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";

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

          <Dropdown as={ButtonGroup}>

          <Dropdown.Toggle className="Profil_Btns">

          <img src={egypt} alt="egypt" />

          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">
            <img src={eng} alt="egypt" />
            </Dropdown.Item>
          </Dropdown.Menu>

        </Dropdown>






            <Dropdown as={ButtonGroup}>
              

              <Dropdown.Toggle variant="link" />
              


              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <FontAwesomeIcon
            icon={faBell}
            size="xl"
            style={{ color: "#525760", marginRight: 20, cursor: "pointer" }}
          />
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

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Settings</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Messages</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Settings</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Help</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Logout</Dropdown.Item>


          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Topbar;
