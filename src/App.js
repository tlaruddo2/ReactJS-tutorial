// import React from 'react' // for class components
import Header from './components/Header'

function App() {
  const name = 'Brad'
  const x = true
  return (
    <div className="container">
      {/* <Header title='Hello'/> */}
      <Header />
      {/* type error */}
      {/* <Header title = {1}/>   */}

    </div>
  );
}

//class component
// class App extends React.Component{
//   render(){
//     return (
//       <h1> Hello</h1>
//     )
//   }
// }

export default App;
