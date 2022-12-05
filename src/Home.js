import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppStoreIos, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faMoon,faLightbulb } from '@fortawesome/free-regular-svg-icons';
// import FileDownload from "js-file-download";
import Axios  from 'axios';
import chargeSample from './10mb.zip';

function Home() {

  const [bgclr,setbgclr]=React.useState('white');
  const [txtclr,settxtclr]=React.useState('black');
  const[prginp,setprginp]=React.useState('a=10');
  const[prgout,setprgout]=React.useState('');
 
  const printwords=[];
  const processinp = () => {
    
    console.log(printwords);
    console.log(prginp);
    Axios.get("https://originapi.onrender.com/"+prginp)
    .then((res)=>{
      console.log(res.data.data);
      console.log("**"+JSON.stringify(res.data.data));
      let output=JSON.stringify(res.data.data).replaceAll('~',"\n");
      output=output.replaceAll("\\",'');
      console.log("##"+output);
      setprgout(output);
      
    }).catch(err => {
      console.log(err);
    })
    
    }
  const processdata=()=>{
    Axios.post("https://origintranscoder-app.onrender.com/addprgrm",{prginp}).then((response)=>{
      alert("submited");
    }).catch(err=>
    {
      console.log(err);
    })
  }

  const pinpchng = (e)=> {
    
    setprginp(e.target.value.replaceAll('\n','$'));

        //console.log("https://apiorigin.herokuapp.com/"+prginp);
  }

  return (
    <div style={{backgroundColor:bgclr,color:txtclr}}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid" style={{backgroundColor:bgclr,color:txtclr}}>
    <a className="navbar-brand" href="/#"><h1>Origin-The Transcoder</h1></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#aboutcontainer">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#inputbox">Use</a>
        </li>
        <li className="nav-item">
        <Link className='nav-link' to="/feedback"><p>Feedback</p></Link>
        </li>
      </ul>
    </div>
    <div onClick={()=>{setbgclr('#3F3351');settxtclr('white');}}><FontAwesomeIcon icon={faMoon}/></div>
    <div onClick={()=>{setbgclr('white');settxtclr('black');}}><FontAwesomeIcon icon={faLightbulb}/></div>
  </div>
  
</nav>
    
<section className="home" id="home">

   <div className="content">
       <h3>About code convertor</h3>
       <p>Codeconvertor is a website which helps programers and beginner coder to learn and convert program from one language to another </p>
       <a href="#inputbox" className="btn">Try it!</a>
   </div>
</section>
<div className="aboutcontainer" id="aboutcontainer">
  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="images/img1.png" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">

          <h5>Any programmer or developer is in need of converting a certain lines of code from one programming language into another programming language</h5>
        </div>
      </div>
      <div className="carousel-item">
        <img src="images/img3.png" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">

          <h5>Reduction of work and time increase in efficiency</h5>
        </div>
      </div>
      <div className="carousel-item">
        <img src="images/img2.png" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">

          <h5>Can be used for learning purposes</h5>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" ></span>

    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" ></span>
    </button>
  </div>
</div>
<section  id="inputbox" className="convertorarea">

<h4 className="heading"> <span>THE CONVERTOR</span></h4>
 <form className="inputbox">
  <div className="ipbox">
 <textarea className='ibox' style={{backgroundColor:bgclr}} onChange={pinpchng} placeholder="input your python code"   >
    </textarea>
    </div>
   <div className="outbox">
 <textarea  className='obox' style={{backgroundColor:bgclr}} value={prgout} placeholder="the output" >
   </textarea>
  </div>
  <button onClick={processinp} type="button"  className="btn btn-outline-success" id="key">Process</button>
  <button onClick={processdata} type="button"  className="btn btn-outline-success" id="key">Send</button>
    </form>
  
  </section>
<div className="feedbackdiv">
  <h5>Enter the feedback here</h5>
  <br/>
  <br/>
  <Link className='link' to="/feedback"><h1>Feedback</h1></Link>
</div>
<div className='download'>
<h1>Download the app</h1>
<div className="down">
    <div className="as">
    <a  className='link' href={chargeSample} download="10mb">
    <FontAwesomeIcon icon={faGooglePlay}/>
    </a>
    <h6>Download in playstore</h6>
    </div>
    <div className="as">
    <FontAwesomeIcon icon={faAppStoreIos}/>
    <h6>Download in appstore</h6>
    </div>
      
</div>
</div>
</div>
  );




}

export default Home;
