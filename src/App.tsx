

import Greet from "./Greet";
import ClassComponent from "./ClassComponent";
import StateComponent from "./StateComponent";
import CounterSetSate from "./CounterSetSate";
import FunctionClick from "./ClassClick";
import ClassClick from "./ClassClick";
import EventBinding from "./EventBinding";
import ParentComponent from "./ParentComponent";
import { ConditionalRenderring } from "./ConditionalRenderring";
import { ListRendering } from "./ListRendering";
import HandleForm from "./HandleForm";
import Mounting from "./Mounting";
import ParentComp from "./ParentComp";
import RefDemo from "./RefDemo";
import ClassRefInput from "./ClassRefInput";
import ClassParentRef from "./ClassParentRef";
import PortalDemo from "./PortalDemo";
import Errors from "./Errors";
import ErrorBoundary from "./ErrorBoundary";
import HttpGet from "./HttpGet";
import PostForm from "./PostForm";
import ClickCounter from "./ClickCounterHOC";
import ClickCounterHOC from "./ClickCounterHOC";
import HoverCounterHOC from "./HoverCounterHOC";
import PropsRenderCounter from "./PropsRenderCounter";
import PropsClickCounter from "./PropsClickCounter";
import PropsCounter from "./PropsCounter";
import PropsHoverCounter from "./PropsHoverCounter";
import ComponentA from "./ComponentA";
import { UserProvider } from "./UserContext";
import ComponentB from "./ComponentB";
import ReactShare from "./ReactShare";
import GoogleMapIntegration from "./googleMapIntegration/GoogleMapIntegration";


const App = () => {
  // const address={city:"khandwa",state:"M.P."}

  return (<>
    {/* <Greet message ={"Hello, Good Morning"}name={"Eshant"} address={address}/> */}
    <ClassComponent name="Eshant">
      {/* children component for this component which can be accessable using props.children */}
      <h1>ddssdfnmh</h1>
    </ClassComponent>
    {/* <StateComponent />
<CounterSetSate name="eshant"/>
<ClassClick/>
<EventBinding/>
<ParentComponent/>
<ConditionalRenderring/>
<ListRendering/>
<HandleForm/>
<RefDemo/>
<Mounting/>
<ParentComp/>
<ClassParentRef/>
<PortalDemo/> */}
    {/* <ErrorBoundary>
<Errors name="Eshant" />
</ErrorBoundary>
<ErrorBoundary>
<Errors name="Mishra"/>

</ErrorBoundary>
<ErrorBoundary>
<Errors name="Aditya"/>

</ErrorBoundary> */}
    {/* <HttpGet/>
<PostForm/> */}
    {/* <ClickCounterHOC name="Eshant"/>
<HoverCounterHOC  /> */}

    {/* <PropsRenderCounter render={(isLoggedIn:boolean)=>isLoggedIn?"Eshant":"Guest"}/> */}
    <PropsCounter render={(count: number, incrementCount: () => void) => <PropsClickCounter count={count} incrementCount={incrementCount} />} />
    <PropsCounter render={(count: number, incrementCount: () => void) => <PropsHoverCounter count={count} incrementCount={incrementCount} />} />
    {/* <UserProvider value={"Eshant"}>
      <ComponentA />
    </UserProvider> */}
    <ReactShare />
    <GoogleMapIntegration />

  </>
  );
}

export default App;
