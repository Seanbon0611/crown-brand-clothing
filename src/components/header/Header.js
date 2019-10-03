import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/FirebaseUtils';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { ReactComponent as Logo } from '../../assests/crown.svg';
import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
     <div className='header'>
         <Link className='logo-container' to="/">
            <Logo className='logo' />
         </Link>
         <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            {
      //ternary operator if currentUser = object = true which will render div
      //if false(null) renders Link
               currentUser ? (
               <div className='option' onClick={() => auth.signOut()}>
                  SIGN OUT
               </div>
            )   : (
               <Link className='option' to='/signin'>
                  SIGN IN
               </Link>
            )}
            <CartIcon />
         </div>
         {hidden ? null : <CartDropdown />}
     </div>
);

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
   currentUser,
   hidden
});
export default connect(mapStateToProps)(Header);