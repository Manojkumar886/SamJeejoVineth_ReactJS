import SampleFour, { SampleThree, Sampleone, Sampletwo } from "./BasicComponents";
import { BootstrapExecution } from "./ExecuteBootstrap";
import { ExampleofParameters } from "./FuncwithArguments";
import { Firsthookexecution } from "./HooksUSESTATE";
import { StudentDetails } from "./TableCreationWithCSS";
import { Operator } from "./TernaryOPeratorusingUSESTATE";

function App()
{
  return(
    <>
    <Operator/>
    {/* <Firsthookexecution/> */}
    {/* <SampleThree/>
    <Sampleone/>
    <Sampletwo/>
    <SampleFour/> */}
    {/* <StudentDetails/> */}
    {/* <BootstrapExecution/> */}
    {/* <ExampleofParameters location='./relax.webp' vertical='600px' Horizontal='900px' /> */}
    </>
  )
}

export default App;