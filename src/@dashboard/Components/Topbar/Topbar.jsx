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
import i18n from "../../../i18n";
import { useTranslation } from "react-i18next";

const Topbar = () => {

  const {t} =useTranslation()


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

            <Dropdown  onSelect={( eventKey , event )=>{

              if(eventKey === "ar"){

                document.documentElement.setAttribute("dir", "rtl")
                document.documentElement.setAttribute("lang", "ar")
                localStorage.setItem("i18nextLng" , "ar" )
                i18n.changeLanguage("ar")

              }else{

                document.documentElement.setAttribute("dir", "ltr")
                document.documentElement.setAttribute("lang", "en")
                localStorage.setItem("i18nextLng" , "en" )

                i18n.changeLanguage("en")

              }

            }} >

              <Dropdown.Toggle className="flag_Btn" >
                {
                    i18n.dir() === "rtl" ?  <img src={egypt} alt="egypt"  /> : <img src={eng} alt="england" />

                }
             

              </Dropdown.Toggle>


              <Dropdown.Menu className="Menu_flags">
                {
                  i18n.dir() === "rtl" ? <Dropdown.Item  eventKey="en"  className="Flag_item">
                  
                  <img src={eng} alt="england" />
                  </Dropdown.Item>
  
                   : 
                   <Dropdown.Item  eventKey="ar"  className="Flag_item" >
                
                   <img src={egypt} alt="egypt"  />
                     </Dropdown.Item>
     
                    

                }



                

              </Dropdown.Menu>


            </Dropdown>
          </div>

          {/* end langeues flag */}




        {/* start Bell Notifctions  */}

          <div className="bell">


          <Dropdown autoClose="outside">
            <Dropdown.Toggle className="Bell_Btns">
            <FontAwesomeIcon
                icon={faBell}
                size="xl"
                style={{ color: "#525760", marginRight: 20, cursor: "pointer" }}
              />
            </Dropdown.Toggle>


        <Dropdown.Menu className="Menu_bell">

          <Dropdown.Item  className="menu_item" style={{backgroundColor:"#405189",height:60 }}>

          <div className="Notifications">
            <h5>{t("Notifications")}</h5>
            <p>5{t("New")}</p>

          </div>
          
          </Dropdown.Item>

       <Dropdown.Item  className="menu_item" >

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
                  <h5>{t("abdelfatah")}</h5>
                  <p>{t("programmer")}</p>
                </div>
            </div>
            
          </Dropdown.Toggle>



          <Dropdown.Menu className="Menu">

            <Dropdown.Item  className="menu_item">
            <FontAwesomeIcon icon={faUser} style={{color: "#4e5156", marginRight:5}} />
            <Link className="Link">  {t("Profile")} </Link>
            
            </Dropdown.Item>



            <Dropdown.Item href="#/action-1" className="menu_item">
            <FontAwesomeIcon icon={faGear} style={{color:"#4e5156", marginRight:5}} />
            <Link className="Link"> {t("Setting")}</Link>
            
            </Dropdown.Item>

            <Dropdown.Item href="#/action-1" className="menu_item">
            <FontAwesomeIcon icon={faEnvelope} style={{color:"#4e5156", marginRight:5}} />
            <Link className="Link">{t("Messages")}</Link>
            
            </Dropdown.Item>

            <Dropdown.Item href="#/action-1" className="menu_item">
            <FontAwesomeIcon icon={faYelp} style={{color:"#4e5156", marginRight:5}} />
            <Link className="Link"> {t("Help")}</Link>
            
            </Dropdown.Item>

            
            <Dropdown.Item href="#/action-1" className="menu_item">
            <FontAwesomeIcon icon={faRightFromBracket} style={{color:"#4e5156", marginRight:5}} />
            <Link className="Link">{t("Log out")}</Link>
            
            </Dropdown.Item>

          </Dropdown.Menu>


        </Dropdown>

        {/* end Profile personly */}



      </div>

    </div>
    
  );
};

export default Topbar;
