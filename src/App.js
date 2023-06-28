import SampleFour, { SampleThree, Sampleone, Sampletwo } from "./BasicComponents";
import { BootstrapExecution } from "./ExecuteBootstrap";
import { ExampleofParameters } from "./FuncwithArguments";
import { StudentDetails } from "./TableCreationWithCSS";

function App()
{
  return(
    <>
    {/* <SampleThree/>
    <Sampleone/>
    <Sampletwo/>
    <SampleFour/> */}
    {/* <StudentDetails/> */}
    {/* <BootstrapExecution/> */}
    <ExampleofParameters location='./relax.webp' vertical='600px' Horizontal='900px' />
    </>
  )
}

export default App;