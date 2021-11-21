// import React, { useCallback } from 'react';
// import { IconButton } from '@material-ui/core';
// import s from './Header.module.scss';
// // import authSelectors from '../../redux/auth/auth-selectors';
// import { useDispatch } from 'react-redux';
// import authOperations from '../../redux/auth/auth-operations';
// // import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import Logo from '../AuthForms/AuthHeading';

// function Header() {
//   // const user = useSelector(authSelectors.getUsername);
//   const dispatch = useDispatch();
//   const onLogout = useCallback(() => {
//     dispatch(authOperations.logOut());
//   }, [dispatch]);
//   return (
//     <>
//       <header className={s.header}>
//         <div className={s.header__box}>
//           <a href="/" className={s.logo}>
//             <Logo text="Wallet" />
//           </a>
//           <div className={s.user}>
//             <a href="/user" className={s.user__info}>
//               {/* {<img src={user.avatar} alt="avatar" className={s.avatar} /> || (
//                 <AccountCircleIcon />
//               )} */}
//               {/* <p>{user.name}</p> */}
//             </a>
//             <div className={s.vector}></div>
//             <IconButton type="button" onClick={onLogout} variant="contained">
//               <div className={s.button__exit__svg}>
//                 <svg
//                   width="19"
//                   height="18"
//                   viewBox="0 0 19 18"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M11.7788 13.0708H13.1844V15.8818C13.1844 17.0443 12.2386 17.99 11.0761 17.99H2.60814C1.44579 17.99 0.5 17.0443 0.5 15.8818V2.10814C0.5 0.945786 1.44579 0 2.60814 0H11.0761C12.2386 0 13.1844 0.945786 13.1844 2.10814V4.91913H11.7788V2.10814C11.7788 1.72073 11.4637 1.40543 11.0761 1.40543H2.60814C2.22073 1.40543 1.90543 1.72073 1.90543 2.10814V15.8818C1.90543 16.2692 2.22073 16.5845 2.60814 16.5845H11.0761C11.4637 16.5845 11.7788 16.2692 11.7788 15.8818V13.0708ZM15.1872 5.68213L14.1934 6.67598L15.8096 8.29234H6.71922V9.69777H15.8096L14.1934 11.314L15.1872 12.3078L18.5 8.99506L15.1872 5.68213Z"
//                     fill="#BDBDBD"
//                   />
//                 </svg>
//               </div>
//               <div className={s.button__exit}>Exit</div>
//             </IconButton>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }

// export default Header;

//////////////////////////////////////

import { useState } from 'react';
import Logo from '../AuthForms/AuthHeading';
import UserMenu from './UserMenu';
import ModalAddTransaction from '../ModalAddTransaction';
import ButtonIcon from '../ModalAddTransaction/ButtonIcon';
import LogoutForm from './LogoutForm';
import { HiX } from 'react-icons/hi';
import useSizeScreen from '../../hooks/useSizeScreen';

import styles from './Header.module.scss';

export default function Header() {
  const sizeScreen = useSizeScreen();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onOpenModal = e => {
    setShowModal(true);
  };

  return (
    <header className={styles.Header}>
      <div className={styles.HeaderContainer}>
        <Logo text="Wallet" />
        <UserMenu onClick={onOpenModal} />

        {showModal && (
          <ModalAddTransaction onClose={toggleModal}>
            <LogoutForm onClose={toggleModal} />
            {sizeScreen > 767 && (
              <ButtonIcon
                btnClass="ButtonIconClose"
                onClick={toggleModal}
                aria-label="Close modal"
              >
                <HiX />
              </ButtonIcon>
            )}
          </ModalAddTransaction>
        )}
      </div>
    </header>
  );
}
