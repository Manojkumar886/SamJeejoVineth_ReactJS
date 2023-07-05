import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Homepage } from './MainPage';
import { StudentDetails } from './TableCreationWithCSS';
import { BootstrapExecution } from './ExecuteBootstrap';

function App()
{
  return(
    <>
    <BrowserRouter>
     <Homepage/>
      <Routes>
        <Route path="homepage" exact element={<StudentDetails/>}/>
        <Route path='printall' exact element={<BootstrapExecution/>}/>
      </Routes>
    </BrowserRouter>  
    </>
  )
}

export default App;