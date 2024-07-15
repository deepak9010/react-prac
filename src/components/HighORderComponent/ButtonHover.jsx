// now we access counterhoc properties here 

import CounterHoc from "./CounterHoc";

const ButtonHover = (props) => {
    const {count, incrementCounter} = props;

    return(
        <div>
        <button onMouseOver={incrementCounter}>Hover Me</button>
        <p>Count is {count} </p>
        </div>
    )
}

export default CounterHoc(ButtonHover); /* here we wrap our component into hoc componet */