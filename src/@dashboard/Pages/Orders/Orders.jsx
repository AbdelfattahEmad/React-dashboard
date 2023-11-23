import React from 'react'
import "./Orders.scss"
import { useTranslation } from 'react-i18next'
import abdo from "../../../assets/Images/abdo.jpg"
import Table from 'react-bootstrap/Table';



const Orders = () => {

  const {t}=useTranslation()


  return (
    
    <div className='order_Container'>

      <div className='Tabel_Header'>

          <h1>Customers Orders</h1>


            <div className='Tabel_Body'>



            <Table striped="columns" className='Tabel'>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Customer</th>
                    <th>Location</th>
                    <th>Order Date</th>
                    <th>Status</th>
                    <th>Amount</th>
                  </tr>
                </thead>

                <tbody>

                <tr>
                    <td>1</td>
                    <td className='Image'><img src={abdo} alt="aboda" /></td>
                    <td>Abdelfatah</td>
                    <td>27 Dec 2023</td>
                    <td> <span className='Delvierd'>Dliverd</span></td>
                    <td><strong>125$</strong></td>


                </tr>

                <tr>
                    <td>2</td>
                    <td className='Image'><img src={abdo} alt="aboda" /></td>
                    <td>Abdelfatah</td>
                    <td>2 Dec 2023</td>
                    <td><span className='shipped'>shipped</span></td>
                    <td><strong>125$</strong></td>


                </tr>

                <tr>
                    <td>3</td>
                    <td className='Image'><img src={abdo} alt="aboda" /></td>
                    <td>Abdelfatah</td>
                    <td>2 Dec 2023</td>
                    <td> <span className='Delvierd'>Dliverd</span></td>
                    <td><strong>125$</strong></td>


                </tr>

                <tr>
                    <td>4</td>
                    <td className='Image'><img src={abdo} alt="aboda" /></td>
                    <td>Abdelfatah</td>
                    <td>2 Dec 2023</td>
                    <td> <span className='canceled'>Pending</span></td>
                    <td><strong>125$</strong></td>


                </tr>

                <tr>
                    <td>5</td>
                    <td className='Image'><img src={abdo} alt="aboda" /></td>
                    <td>Abdelfatah</td>
                    <td>2 Dec 2023</td>
                    <td><span className='pending'>Pending</span></td>
                    <td><strong>125$</strong></td>


                </tr>




                </tbody>







            </Table>

            </div>



        </div>
        
      </div>
  )
}

export default Orders