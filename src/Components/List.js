import React from 'react';
import { Form, Link } from 'react-router-dom';
import {useEffect,useState} from 'react';




function List () {

  const[getlocaldata,setlocaldata]=useState([]);
  // console.log(getlocaldata)
 
  useEffect(()=>{
    getdatafromls();
   },[])


   function getdatafromls(){
    var demo=localStorage.getItem('Data');
    console.log("demo",demo)
    let olddata=JSON.parse(demo);
    if(Array.isArray(olddata)){
      setlocaldata(olddata);
    }
   }
  


   function remove(id){
      setlocaldata((remove)=>remove.filter((_,index)=>index!=id));
      localStorage.setItem('Data',JSON.stringify(getlocaldata));
  
   }



  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No.</th>
            <th>Address</th>
            <th colSpan={2}>Action</th>
           
          </tr>
        </thead>
        <tbody>
          

        {
          getlocaldata.map((r,index)=>(

            <tr>
              <td>{index}</td>
            <td>{r.name}</td>
            <td>{r.email}</td>
            <td>{r.number}</td>
            <td>{r.address}</td>
            <td><Link to="/Edit" state={{data:r,index}} >Edit</Link></td>
            <td><button ><button onClick={()=>remove(index)}>Delete</button></button></td>
          </tr>
             ))
           }

       
        </tbody>
    

 

</table>
    </div>
  )
}

export default List;
