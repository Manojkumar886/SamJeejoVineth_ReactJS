import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Homepage } from './MainPage';

import { Homepage1 } from './Hompage';
import Carouselexecution1 from './CarouselExecution';

function App()
{
  return(
    <>
    <Carouselexecution1/>
     {/* <Homepage1/> */}
     {/* <RegistrationForm/>
      <Routes>
        <Route path="homepage" exact element={<RegistrationForm/>}/>
        <Route path='printall' exact element={<BootstrapExecution/>}/>
  </Routes> */}
    </>
  )
}

export default App;