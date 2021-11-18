import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import HomeTab from '../../components/HomeTab';
import ModalAddTransaction from '../../components/ModalAddTransaction';
import TransactionForm from '../../components/TransactionForm';
import ButtonIcon from '../../components/ModalAddTransaction/ButtonIcon';
import Button from '../../components/Button';
import { HiX } from 'react-icons/hi';
// import Currency from '../../components/Sidebar/Currency';

import styles from './DashboardPage.scss';

export default function DashboardPage() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onOpenModal = e => {
    toggleModal();
  };

  return (
    <>
      <Header />
      <div className={styles.dashboard}>
        <div className={styles.container}>
          <Sidebar />
          <main>
            <Switch>
              <Route path="/dashboard" component={HomeTab} />
              <Route />
              {/* <Route path="/currency" component={Currency} /> */}
            </Switch>

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

                <ButtonIcon
                  btnClass="ButtonIconClose"
                  onClick={toggleModal}
                  aria-label="Close modal"
                >
                  <HiX />
                </ButtonIcon>
              </ModalAddTransaction>
            )}
          </main>
        </div>
      </div>
    </>
  );
}
