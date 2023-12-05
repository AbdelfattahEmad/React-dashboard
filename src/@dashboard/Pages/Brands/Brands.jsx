import React from 'react'
import "./Brands.scss"
import { useTranslation } from 'react-i18next'
import Tabel from '../../Components/Tabel/Tabel'
import TitleView from '../../Components/TitleView/TitelView'
import Spinner from 'react-bootstrap/Spinner';
import GetBrandHook from '../../../Redux/Hooks/BrandHooks/GetBrandHooks'
import { Link } from 'react-router-dom'


const Brands = ({title , btn, pathText  }) => {


  const {GetBarnds ,Loading}=GetBrandHook()

   console.log(GetBarnds ,"hello  brands")

  const {t}=useTranslation()


  return (

    <div className="Brand_Container">


    <TitleView title="Brand Page" btn="AddBrand" pathText="AddBrand" />

      <div className='Tabel_Body'>
              <Tabel>

                <Tabel.tabelHead>
                    <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>img</th>
                    <th>SubCategory</th>
                    <th>Setting</th>
                    </tr>
                </Tabel.tabelHead>


                <Tabel.tabelebody>

    {
            Loading === false ? (

              GetBarnds ? GetBarnds.map((item)=>{
                

              return(
                <Tabel.tabelRow key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.image}</td>
                  <td>{item.createdAt}</td>
                <td>
                <Link className="Table_Btn" to={`EditBrands/${item._id}`}>Edit</Link>
                <button className="Table_Btn">Delete</button>
                </td>
              </Tabel.tabelRow>

                )
            }): <h1>No Brands</h1>

          ):<Spinner animation="border" variant="primary" />


          
        }


                </Tabel.tabelebody>


              </Tabel>

          </div>


    </div>


  )
}

export default Brands