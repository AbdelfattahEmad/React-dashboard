import "./Category.scss"
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';
import Tabel from '../../Components/Tabel/Tabel';
import Spinner from 'react-bootstrap/Spinner';
import CategoryHook from "../../../Redux/Hooks/CategoryHooks"





const Category = ({id ,img,Descreption ,quantity ,Price , title , btn, pathText,SubCat}) => {

  const {t}=useTranslation()

  const {CategoryData ,Loading }= CategoryHook()




  return (

    <div className='Category_Container'>

    <div className='Tabel_Header'>

      <div className='Title'>
      <h1>Category</h1>
      
      
      <Link to="AddCategory" className='Btn'>Add Category</Link>

      </div>

      
     
    <div className='Tabel_Body'>

      {

      Loading ===false ? (

        CategoryData ? CategoryData.map((catItem , index)=>{
          return(
            <Tabel id={catItem.id} img={catItem.image} Descreption={catItem.slug}  quantity={catItem.slug} Price="15" SubCat="Clothes" />)
        }): <h1> No Categores</h1>

      ) :<Spinner animation="border" variant="primary" />


      
      }




      </div>



      </div>
      
      </div>



  )
}

export default Category