import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import HomeTab from '../../components/HomeTab';
import Container from '../../components/Container';
import ModalAddTransaction from '../../components/ModalAddTransaction';
import TransactionForm from '../../components/TransactionForm';
import ButtonIcon from '../../components/ModalAddTransaction/ButtonIcon';
import BgPageContainer from '../../components/BgPageContainer';
import Button from '../../components/Button';
import useSizeScreen from '../../hooks/useSizeScreen';
import { HiX } from 'react-icons/hi';
// import Currency from '../../components/Sidebar/Currency';

import style from './DashboardPage.module.scss';

export default function DashboardPage() {
  const sizeScreen = useSizeScreen();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onOpenModal = e => {
    setShowModal(true);
  };

  return (
    <>
      <Header />
      <div className={style.dashboard}>
        <div className={style.wrapper}>
          <Sidebar />
          <Switch className={style.wrapper}>
            <Route path="/dashboard" component={HomeTab} />
            <Route />

            {/* <Route path="/currency" component={Currency} /> */}
          </Switch>
          <aside className={style.dashboard__aside}></aside>

          <ButtonIcon
            onClick={onOpenModal}
            aria-label="Open modal"
            btnClass="ButtonIconAdd"
          >
            +
          </ButtonIcon>

          {showModal && (
            <ModalAddTransaction onClose={toggleModal}>
              <TransactionForm onClose={toggleModal} />

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
      </div>
    </>
  );
}
