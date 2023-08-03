import React from 'react';
import Data from './Data';
import { Link } from 'react-router-dom';
import {useEffect,useState} from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

function Edit (){





let location = useLocation();
let Navigate= useNavigate();
let [getlocaldata, setlocalData] = useState(location.state.data);
  console.log("location",location);
var index=location.state.index;

    function handlesubmit(e){
      e.preventDefault();
      let newdata=JSON.parse(localStorage.getItem('Data'));
      console.log("data",newdata);
      if(newdata[index]!= undefined){
        newdata[index]=getlocaldata;
        localStorage.setItem('Data',JSON.stringify(newdata));
      }
      console.log("newdata",newdata)
  
     Navigate('/List')
    
    }

  
  function handleinput(e){

      var name = e.target.name;
      var value = e.target.value;
      setlocalData({...getlocaldata,[name]:value
      });
      console.log("name",name)
    }






  return (
    <div>
        <form>
         <label for="name">Name</label>
          <input type="text" name="name" value={getlocaldata.name} onChange={handleinput} placeholder="Your name.."/>

          <label for="email">Email</label>
          <input type="text" name="email" value={getlocaldata.email} onChange={handleinput} placeholder="Your email.."/>

          <label for="lname">Mobile</label>
          <input type="number" name="email" value={getlocaldata.number} onChange={handleinput} placeholder="Your email.."/>

          <label for="lname">Address</label>
          <input type="text"  name="address" value={getlocaldata.address} onChange={handleinput} placeholder="Your address.."/>
          <button onClick={handlesubmit}>Update</button>
        </form>
    </div>
  )
}

export default Edit;
