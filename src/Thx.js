import React  from "react";
import './Thx.css'
import {Link} from 'react-router-dom'
function Thx()
{return(
    
    <div  className="thxcontent">
        <div className="thx">
         <h3>Thank you for you feedback</h3>
            <p>Your feedback is much appreciated and will be used to make our site and product better</p>
            <Link  to="/"><button  type="button" class="btn btn-outline-success"><h5>Go to home page</h5></button></Link>
       </div>
   </div>
)

}
export default Thx;