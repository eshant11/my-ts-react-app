

import Greet from "./Greet";
import ClassComponent from "./ClassComponent";
import StateComponent from "./StateComponent";
import CounterSetSate from "./CounterSetSate";
import FunctionClick from "./ClassClick";
import ClassClick from "./ClassClick";
import EventBinding from "./EventBinding";
import ParentComponent from "./ParentComponent";
import {ConditionalRenderring} from "./ConditionalRenderring";
import { ListRendering } from "./ListRendering";
import HandleForm from "./HandleForm";
import Mounting from "./Mounting";
import ParentComp from "./ParentComp";
import RefDemo from "./RefDemo";
import ClassRefInput from "./ClassRefInput";
import ClassParentRef from "./ClassParentRef";
import PortalDemo from "./PortalDemo";

const  App= ()=> {
  // const address={city:"khandwa",state:"M.P."}

 return (<>
 {/* <Greet message ={"Hello, Good Morning"}name={"Eshant"} address={address}/> */}
<ClassComponent name="Eshant">
  {/* children component for this component which can be accessable using props.children */}
  <h1>ddssdfnmh</h1>
</ClassComponent>
<StateComponent />
<CounterSetSate name="eshant"/>
<ClassClick/>
<EventBinding/>
<ParentComponent/>
<ConditionalRenderring/>
<ListRendering/>
<HandleForm/>
<Mounting/>
<ParentComp/>
<RefDemo/>
<ClassParentRef/>
<PortalDemo/>
</>

  );
}

export default App;
