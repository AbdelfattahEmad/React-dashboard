import Carousel from 'react-bootstrap/Carousel';
import ecommerce from "../../../assets/Images/ecommerce.png"
import ecc from "../../../assets/Images/ecc.jpg"
import online from "../../../assets/Images/online.webp"


const Slider =()=> {
    return (
      <>

    <Carousel>

        
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ecommerce}
          alt="First slide"
        />
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ecc}
          alt="Second slide"
        />

      </Carousel.Item>
      

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={online}
          alt="Third slide"
        />

        
      </Carousel.Item>

    </Carousel>

      </>
      
    );
  }
  
  export default Slider;
  