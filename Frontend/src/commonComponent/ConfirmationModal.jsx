import React from 'react';
import { Modal } from 'antd';

const ConfirmationModal = ({ visible, onOk, onCancel, okText, cancelText, children }) => {
  return (
    <Modal
      title="Confirm"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      okText={okText}
      cancelText={cancelText}
      okButtonProps={{ style: { backgroundColor: '#B79600', borderColor: '#B79600' } }}
      cancelButtonProps={{ type: 'default' }}
    >
      {children}
    </Modal>
  );
};

export default ConfirmationModal;
