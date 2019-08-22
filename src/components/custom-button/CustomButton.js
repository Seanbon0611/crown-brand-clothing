import React from 'react';
import './custom-button.styles.scss';

//makes it so when a 'type='submit' is passed through CustomButton, it will trigger
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}>
        {children}
    </button>
);

export default CustomButton;