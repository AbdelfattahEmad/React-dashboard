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
import { NavDropdown } from "react-bootstrap";

const Topbar = () => {
  return (
    <div className="Topbar_Container">
      <div className="search_item">
        <FontAwesomeIcon
          icon={faBars}
          size="xl"
          style={{ color: "#878a99", marginRight: 10 }}
        />

        {/* <input placeholder="Search..." alt="search" /> */}
        <Search />
      </div>

      <div className="Personal_Data">
        <div className="Icons">
          <div className="img">
            <Dropdown as={ButtonGroup}>
              <Button className="BTn" variant="link">
                <img src={egypt} alt="egypt" />
              </Button>

              <Dropdown.Toggle variant="link" />

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <img src={eng} alt="egypt" />
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
          {/* <Button className="Profil_Btn" variant="link">
            
          </Button> */}

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
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Topbar;
