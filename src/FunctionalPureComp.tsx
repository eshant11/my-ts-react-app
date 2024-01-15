import React from 'react'

function FunctionalPureComp(props:{name:string}) {
    console.log("Rendering Memo Component");
  return (
    

    <div>FunctionalPureComp
        {props.name}
    </div>
  )
}

export default React.memo(FunctionalPureComp)