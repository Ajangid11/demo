import React from 'react';
import Data from './Data';
import List from './List';
import Edit from './Edit';
import { Link } from 'react-router-dom';
import {useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';


function Add(){

  const[getdata,setdata]=useState({name:''});
  const[getlocaldata,setlocaldata]=useState([]);
  let Navigate=useNavigate();

 function handleinput(e){
    console.log(e.target.value)
    var name=e.target.name;
    var value=e.target.value;
    console.log(name,value)
    setdata({...getdata,[name]:value});
    console.log(getdata);

 } 

 
 useEffect(()=>{
  getdatafromls();
 },[])

 function getdatafromls(){
  var demo=localStorage.getItem('Data');
  console.log("demo",demo)
  if(demo!='' && demo!=undefined && demo!=' '){
    var olddata=JSON.parse(demo);
    if(Array.isArray(olddata)){
      setlocaldata(olddata);
    
  }
  }
 }



 function submitbutton(e){
    e.preventDefault();
    getlocaldata.push(getdata);
    localStorage.setItem('Data',JSON.stringify(getlocaldata));
    console.log("newdata",getlocaldata);
    getdatafromls();
    setdata({name:''});
    
    Navigate('/List');

 }


  return (
    <div>
        <form>
            {/* <Data></Data> */}
            <label for="name">Name</label>
            <input type="text" name="name" onChange={handleinput} placeholder="Your name.."/>

            <label for="email">Email</label>
            <input type="text" name="email"  onChange={handleinput} placeholder="Your email.."/>

            <label for="lname">Mobile</label>
            <input type="number" name="number"   onChange={handleinput} placeholder="Your email.."/>

            <label for="lname">Address</label>
            <input type="text"  name="address"   onChange={handleinput} placeholder="Your address.."/>
    
            <button onClick={submitbutton} >
            <Link to="/List" >
              Submit
              </Link>
            </button>
        </form>
  
     
    </div>
  )
}
export default Add;