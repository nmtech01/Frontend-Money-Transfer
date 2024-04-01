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
      okButtonProps={{ style: { backgroundColor: '#fab005', borderColor: '#fab005' } }}
      cancelButtonProps={{ type: 'default' }}
    >
      {children}
    </Modal>
  );
};

export default ConfirmationModal;
