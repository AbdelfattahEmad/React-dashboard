import "./Topbar.scss";
import egypt from "../../../assets/Images/egypt.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faEnvelope, faGear, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import abdo from "../../../assets/Images/abdo.jpg";
import eng from "../../../assets/Images/eng.png";
import ger from "../../../assets/Images/ger.png";
import ital from "../../../assets/Images/ital.png";
import Search from "../search/search";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { faYelp } from "@fortawesome/free-brands-svg-icons";
import NotifictionTap from "../NotictionsTap/Notifiction";



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

                  {/* start langeues flag */}


          <div className="lang_flag">
            <Dropdown  >
              <Dropdown.Toggle className="flag_Btn" >
              <img src={egypt} alt="egypt" />
              </Dropdown.Toggle>


              <Dropdown.Menu className="Menu_flags">

                <Dropdown.Item href="#/action-1" className="Flag_item">
                <img src={eng} alt="england" />
                </Dropdown.Item>

                <Dropdown.Item href="#/action-1" className="Flag_item" >
                <img src={ger} alt="Germany" />
                </Dropdown.Item>


                <Dropdown.Item href="#/action-1" className="Flag_item" >
                <img src={ital} alt="Italia" />
                </Dropdown.Item>
              </Dropdown.Menu>


            </Dropdown>
          </div>

                            {/* end langeues flag */}






        {/* start Bell Notifctions  */}

          <div className="bell">


          <Dropdown>
            <Dropdown.Toggle className="Bell_Btns">
            <FontAwesomeIcon
                icon={faBell}
                size="xl"
                style={{ color: "#525760", marginRight: 20, cursor: "pointer" }}
              />
            </Dropdown.Toggle>


        <Dropdown.Menu className="Menu_bell">

          <Dropdown.Item href="#/action-1" className="menu_item" style={{backgroundColor:"#405189",height:60 }}>

          <div className="Notifications">
            <h5>Notifications</h5>
            <p>5 New</p>

          </div>
          
          </Dropdown.Item>

       <Dropdown.Item href="#/action-1" className="menu_item" >

        < NotifictionTap />


        </Dropdown.Item>






          </Dropdown.Menu>


            </Dropdown>
            <span className="Bel_not">4</span>
          </div>






        {/* end Bell Notifctions  */}


        </div>
        



        {/* start Profile personly */}

        <Dropdown>

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

        {/* end Profile personly */}



      </div>

    </div>
    
  );
};

export default Topbar;
