import React, { useState } from 'react';

const ShowHideText = () => {
  const [isTextVisible, setTextVisibility] = useState(false);

  const handleClick = () => {
    setTextVisibility(!isTextVisible);
  };

  return (
    <div>
      <button style={{backgroundColor: 'skyblue', color: 'white'}}
        onClick={handleClick}>
        {isTextVisible ? 'Show' : 'Hide'}
      
      </button>
      {!isTextVisible && <p>Some text to show or hide.</p>}
    </div>
  );
};

export default ShowHideText;
