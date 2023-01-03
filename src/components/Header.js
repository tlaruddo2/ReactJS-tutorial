// snippet: rafce

// import React from 'react' //from class components
import PropTypes from "prop-types"; //from ES7

import Button from "./Button";

//props: object
//{}: structure
// const Header = (props) => {
//   return (
//     <header>
//         <h1>{props.title}</h1>
//     </header>
//   )
// }

const Header = ({ title }) => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <header className="header">
      {/* <h1 style={{color: 'red', backgroundColor : 'black'}}>{title}</h1> */}
      {/* <h1 style={headaingStyle}>{title}</h1> */}
      <h1> {title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
      {/* <Button color = 'Red' text ='Hello'/> */}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in JS (for dynamic styling)
// const headaingStyle = {color: 'red', backgroundColor : 'black'};

export default Header;
