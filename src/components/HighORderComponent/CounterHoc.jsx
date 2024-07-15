// this is HOC now we use this component and its functionality in other component

// as in buttonHover and buttonclick component, we export these component by wrapping counterhoc, so here we accept these componetn as Oldcomponet

import { useState } from "react";

const CounterHoc = (OldComponent) => {
    return function EnhanceComponent(props){
        const [count, setCount] = useState(0);

        return(
          <OldComponent {...props} count={count} incrementCounter={() => setCount(count+1)}  />
        )
    }
}

export default CounterHoc;


// import { useState } from "react";

// const CounterHoc = (OldComponent, incrmentBy=1) => {
//     return function EnhanceComponent(props){
//         const [count, setCount] = useState(0);

//         return(
//           <OldComponent {...props} count={count} incrementCounter={() => setCount(count+incrmentBy)} name='counterHOC' />
//         )
//     }
// }

// export default CounterHoc;