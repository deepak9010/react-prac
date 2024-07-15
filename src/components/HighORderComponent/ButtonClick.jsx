
// now we access counterhoc properties here 

import CounterHoc from "./CounterHoc";

const ButtonClick = (props) => {
    const {count, incrementCounter} = props;
    return(
        <div>
        <button onClick={incrementCounter}>Click Me</button>
        <p>Count is {count} </p>
        </div>
    )
}

export default CounterHoc(ButtonClick);  /* here we wrap our component into hoc componet */




// const ButtonClick = (props) => {
//     const {count, incrementCounter, name} = props;
//     // const [count, setCount] = useState(0);
//     return(
//         <div>
//         <button onClick={incrementCounter}>Click Me</button>
//         <p>Count is {count} </p>
//         <p>Name is: {name}</p>
//         </div>
//     )
// }

// export default SecondHoc(CounterHoc(ButtonClick, 10));