import React from "react";
import ReactDOM from "react-dom/client";


const sty={
  backgroundColor: "green",
}


const App = (
  <div className="mainDive" style={sty}>
    <h1>Hello from React</h1>
    <p>This content is rendered by React</p>
  </div>
);



function Title() {
  return (
    <div>
      <h2>Title Component</h2>
      <button>Title Button</button>
    </div>
  );
}


function Header() {
  return (
    <div>
      <h2>Header Component</h2>
    </div>
  );
}


function Content() {
  return (
    <div>
      <p>This is the Content component</p>
    </div>
  );
}


function Footer() {
  return (
    <div>
      <h4>Footer Component</h4>
    </div>
  );
}




const Heading= ()=>{
  return (
    <div>
       <Title />
      <Header />
      <Content />
      <Footer />
      <h1>
        Hello
      </h1>
      <button>CLick me</button>
    </div>

  );
}

console.log(typeof App);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading> </Heading>);
