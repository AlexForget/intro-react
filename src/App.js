import './App.css';
import React, { useState, useEffect, useReducer } from 'react';
import restaurant from "./restaurant.jpg";



// -------------useReducer------------------------

function App() {

  const [checked, toggle] = useReducer(
    checked => !checked,
    false);


  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={toggle}></input>
      <p>{checked ? "checked" : "not checked"}</p>
    </>
  )
}




// -------------useState Hook and useEffect------------------------
/*
function App({ authorized }) {

  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`It's ${emotion} around here`);
  }, [emotion])

  useEffect(() => {
    console.log(`It's ${secondary} around here`)
  }, [secondary])


  return (
    <>
      <h1>Current emotion is {emotion} and {secondary}</h1>
      <button onClick={() => setEmotion("happy")}>Make Happy</button>
      <button onClick={() => setEmotion("frustrate")}>Frustrate</button>
      <button onClick={() => setEmotion("enthusiastic")}>Enthuse</button>

      <button onClick={() => setSecondary("crabby")}>Make crabby</button>
    </>
  )
}
*/


// -------------Conditional rendering-----------------
/*
function SecretComponent() {
  return <h1>Secret information for authorized users only.</h1>
}

function RegularComponent() {
  return <h1>Everyone can see this component.</h1>
}



function App({ authorized }) {

  return (
    <>
      {authorized ? <SecretComponent /> : <RegularComponent />};
    </>
  )
}
*/


// ------------React Elements ----------------

/*
function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  )
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around</p>
      <img
        src={restaurant}
        height={200}
        alt="apkin and fork at a restaurant table" />
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  )
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  )
}

const dishes = [
  "Macaroni and cheese",
  "Salmon",
  "Tofy general Taho",
  "Minestrome"
];

const disObject = dishes.map((dish, i) => ({ id: i, title: dish }))


function App({ authorized }) {

  return (
    <>
      <Header name={"alex"} />
      <Main adjective={"Wonderful"} dishes={disObject} />
      <Footer year={new Date().getFullYear()} />
    </>
  )


}

*/





export default App;
