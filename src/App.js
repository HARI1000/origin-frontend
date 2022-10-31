import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Feedback from './Feedback';
import Home from './Home';
import Thx from './Thx';
function App(){
 return(
<Router>
   <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/feedback" element={<Feedback/>} />
        <Route exact path="/feedbackthx" element={<Thx/>} />
    </Routes>
</Router>
    

  );
}
export default App;