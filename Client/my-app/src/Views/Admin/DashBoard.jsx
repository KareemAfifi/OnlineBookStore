import React from 'react'
import AdminNavBar from '../../Components/Admin/AdminNavBar'
import AllBooks from '../../Components/Admin/AllBooks'
import { useEffect } from 'react'
import axios from 'axios'
import AddBook from './AddBook'
const DashBoard = () => {
  const [Books,setBooks]=React.useState([])
  const [flag,setFlag] = React.useState(false)
  useEffect(()=>{
    const  fetch=  ()=>{
       axios.get('http://localhost:8000/admin/viewbooks')
          .then((res)=>{
            console.log(res.data)
            setBooks(res.data)
            
          })
      };
      fetch();
   
  },[])
  return (
    <div>
     
      <AdminNavBar/>
      <AllBooks list={Books}/>
      
    </div>
  )
}

export default DashBoard
