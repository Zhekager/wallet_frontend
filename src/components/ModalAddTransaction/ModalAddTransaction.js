import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import styles from './ModalAddTransaction.module.scss';

const modalRoot = document.querySelector('#modal-root');

export default function ModalAddTransaction({ onClose, children }) {
  useEffect(() => {
    const handleKeyDown = e => {
      const ESC_KEY_CODE = 'Escape';
      if (e.code === ESC_KEY_CODE) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleEventOverlay = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.Overlay} onClick={handleEventOverlay}>
      <div className={styles.Modal}>{children}</div>
    </div>,
    modalRoot,
  );
}

ModalAddTransaction.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
