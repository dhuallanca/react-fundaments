import React from 'react';
import './global.css';

// children get all objects inside <Parent>
const Parent = ({ children }) => {

  // children has all child includes function
  //REact children filter function, because function should not be rendered
  const mapChildren = React.children(children, (child, index) => {
    // cloneElement clona el elemento hijo y le puede pasar props
    const newElement = React.cloneElement(child, { propClicks: 10 })
    // child.type  indica el tipo del child
    return child;
  });
  return (
    <div className='box'>
      <div className='box blue'>
        { mapChildren }
      </div>
      <div className='box red'>
      </div>
    </div>
  )
}

export default Parent;
