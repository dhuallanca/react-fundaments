import React, { useContext, useState } from 'react';
import Header from '../../header/header';


// context tiene dos atributos {provider, consumer}
const MyContext = React.createContext();

// el uso de () retorma una expresion de objeto literal
// regular use of context
// const ComponentNieto = () => (
//   <MyContext.Consumer>
//     {
//       (context) => {
//         return (
//           <div>
//             <h2>Nieto {context.clicks}</h2>
//             <button onClick={context.addClicks}>Nieto dispatcher</button>
//           </div>
//         );
//       }
//     }
//   </MyContext.Consumer>
// )

//use of hook context
const ComponentNieto = () => {
  // parameter context from provider
  const context = useContext(MyContext);
  // const { clicks, addClicks } = useContext(MyContext);
  return (
    <div>
      <h2>Nieto {context.clicks}</h2>
      <button onClick={context.addClicks}>Nieto dispatcher</button>
    </div>
  );
}

const ComponentHijo = () => {
  return (
    <div>
      <h2>Hijo</h2>
      <ComponentNieto></ComponentNieto>
    </div>
  );
};

const ContadorUseContext = () => {
 const [clicks, setClicks] = useState(0);


 const addClicks = () => {
   setClicks(clicks + 1);
 };

  return (
    // value son los valores que recibe el context
   <MyContext.Provider value={{clicks, addClicks}}>      
    <>
      <Header title="Use Context"></Header>
        <button onClick={addClicks}> Clicks {clicks} </button>
        <br></br>
      <ComponentHijo></ComponentHijo>
    </>
   </MyContext.Provider>
 );
}

export default ContadorUseContext;