import React, { useEffect,useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFrown, faSmile,faMeh} from '@fortawesome/free-regular-svg-icons';
import './Feedback.css'
import Axios from 'axios';
import {Link} from 'react-router-dom';
import Header from './Header';
function Feedback()
{
  const [listofFeedback,setFeedback]=useState([]);
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [review,setreview]=useState('');
  const[clr,setclr]=useState('black');
  const[clr1,setclr1]=useState('black');
  const[clr2,setclr2]=useState('black');
  useEffect(()=> {
    Axios.get("https://origintranscoder-app.onrender.com/getfeedback").then((response)=> {setFeedback(response.data)})
  },[])

  const createFeedback= () =>
  {Axios.post("https://origintranscoder-app.onrender.com/addfeedback",{name,email,review,}).then((response) =>{
    alert("Feedback Submited");
  })
}
return( 
<div className="container">
  
    <h1>Feedback</h1>
        <div className='theform'>
            <form className="frm" action="index.html" method="post">
              <h5>Name</h5>
              <input onChange={(event)=>{setname(event.target.value)}} type="text" placeholder="Name" />
              <br/>
              <h5>Email</h5>
              <input onChange={(event)=>{setemail(event.target.value)}} type="email" placeholder='email' />
              <br/>
              <h5>What do you thing about the Convertor</h5>
              <div className="therating" >
              <div id="frown" style={{color:clr}} onClick={()=>{setclr('red')}} onMouseEnter={()=>{setclr('green')}} onMouseLeave={()=>{setclr('black')}}><FontAwesomeIcon icon={faFrown}/></div>
              <div id="meh" style={{color:clr1}} onClick={()=>{setclr1('grey')}} onMouseEnter={()=>{setclr1('green')}} onMouseLeave={()=>{setclr1('black')}}><FontAwesomeIcon icon={faMeh} /></div>
              <div id ="smile" style={{color:clr2}} onClick={()=>{setclr2('blue')}} onMouseEnter={()=>{setclr2('green')}} onMouseLeave={()=>{setclr2('black')}}> <FontAwesomeIcon icon={faSmile}/></div>
            </div>
            <h5>Please leave your feedback below</h5>
              <textarea className='fdbckinpt' onChange={(event)=>{setreview(event.target.value)}}id="fdbkinp"name="name" ></textarea>
              <br/>
              <br/>
              <Link  to="/feedbackthx"><button onClick={createFeedback} type="button" className="btn btn-outline-success"><h5>Submit</h5></button></Link>
            </form>
        </div>
        <div className='review'>
        <h1>Some reviews</h1>
        <div className="theformfb">
        {listofFeedback.map((rev)=> {
            return(
            <div className="formfb" style={{borderColor:"black",borderWidth:"thin"}}>
                <h5>Name:{rev.name}</h5>
                <h5>Review:{rev.review}</h5>
                
            </div>
            );
  
        })
        }
        </div>  
      </div>
   </div>);
}
export default Feedback;
    