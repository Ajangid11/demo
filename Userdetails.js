import { React,useEffect,useState} from 'react';
import { Table } from 'react-bootstrap';
import Edit from './Edit';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {useNavigate, Route, Routes, redirect  } from "react-router-dom";
// import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core';

function Userdetails () {
  
  const location=useLocation();
  const [data,setdata]=useState([]);

  function remove(id){
      setdata((rec) => rec.filter((_ ,index) => index !== id));
      localStorage.setItem('Data',JSON.stringify(data));
    
  }

  function getDataFromDB(){
    const demo=localStorage.getItem('Data');
    if(demo!='' && demo!=undefined && demo!=' '){
      var signupvalue=JSON.parse(demo);
      if(Array.isArray(signupvalue)){
        setdata(signupvalue);
      }
    }
  }

 useEffect(()=>{
  getDataFromDB();
 },[])

  return (
    <div>

        <div className='usertable'>
        <Table  striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Mobile Number</th>
          <th>DOB</th>
          <th>Address</th>
          <th colSpan={2} className='ps-5'>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          data.length ?
          data.map((data,index)=>(

          <tr>
           <td>{index}</td>
          <td>{data.name}</td>
          <td>{data.number}</td>
          <td>{data.dob}</td>
          <td>{data.address}</td>
          <td><Link to="/Edit" state={{data:data,index}} >Edit</Link></td>
          <td><button  onClick={()=>remove(index)}>delete</button></td>
        </tr>
            ))
            :''
          }
      </tbody>
    </Table>
        </div>
    
      
    </div>
  )
}
export default Userdetails;
