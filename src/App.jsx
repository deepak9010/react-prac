// // import Myheading from "./components/Myheading";
// // import {MyheadingLittle as MeracustomName, MyheadingLittle2} from "./components/Myheading";
// // if we import same file then we can write it as
// import Myheading,{MyheadingLittle as MeracustomName, MyheadingLittle2} from "./components/Myheading";


// const a= 20;
// // function Myheading(){
// //   return <h1>heading</h1>
// // } write this by arrow function in simple way

// // const Myheading = () => <h1>Heading</h1>;


// function App() {
//   return (
//     // here we can use empty tags <> </> instead of div
//     <div>
//       <Myheading name="deepak" text="nice"/>
//       <MeracustomName />
//       <MyheadingLittle2 />

//     <h1>hello  {a}</h1>
//     </div>
//   );
// }

// export default App;

import Header2 from "./components/Header";
// import Header from "./components/Header"; 
import "./styles/App.css"; 
import "./styles/Header.css"; 
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import ButtonClick from "./components/HighORderComponent/ButtonClick";
import ButtonHover from "./components/HighORderComponent/ButtonHover";
import UseStateFunction from "./components/UseState/UseStateFunction";
import UseStateClass from "./components/UseState/UseStateClass";
import Asssignment from "./components/Asssignment";

import { Provider } from 'react-redux';
import store from './components/store';

function App() {
  return ( 
    <Provider store={store}>
             <Asssignment />
    </Provider>

//   <Router>
//    <Header2 />
//      <h3>high order component example</h3>
//     <ButtonClick />
//     <ButtonHover />
    
//     <h3>usestate example using Function</h3>
//     <UseStateFunction/>

//     <h3>usestate example using class</h3>
//     <UseStateClass/>


//  <Routes>

//    <Route path="/" element={<Home />} />
//    <Route path="/contact" element={<Contact />} />


//  </Routes>

//   </Router>
  );
}

export default App;
