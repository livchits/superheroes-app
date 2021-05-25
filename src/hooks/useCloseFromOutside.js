import React from 'react';

function useCloseFromOutside(callback) {
  const ref = React.useRef();

  React.useEffect(() => {
    const closeFromOutside = (event) => {
      if (!ref.current?.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('mousedown', closeFromOutside);

    return () => {
      document.removeEventListener('mousedown', closeFromOutside);
    };
  });

  React.useEffect(() => {
    const closeFromOutside = (event) => {
      if (!ref.current?.contains(event.target) && event.key === 'Escape') {
        callback();
      }
    };

    document.addEventListener('keydown', closeFromOutside);

    return () => {
      document.removeEventListener('keydown', closeFromOutside);
    };
  });

  return ref;
}

export default useCloseFromOutside;
