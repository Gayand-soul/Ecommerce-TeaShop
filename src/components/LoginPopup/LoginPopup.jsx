import React from 'react';



const LoginPopup = ({ loginPopup, loginPopupRef }) => {
    return (
      <>
        {loginPopup && (
          <div ref={loginPopupRef} className='fixed top-0 left-0 w-full h-full z-50 overflow-y-auto'>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              login popup
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default LoginPopup;
  
