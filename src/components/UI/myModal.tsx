import React from 'react';
import defaultClasses from 'styles/components/UI/MyModal.module.css';
import { IMyModalProps } from 'interfaces/components/UI/myModal';

const MyModal = ({ children, visible, setVisible }: IMyModalProps) => {
  const rootClasses = [defaultClasses.myModal];
  if (visible) {
    rootClasses.push(defaultClasses.active);
  }

  function closeModal() {
    setVisible(false);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={closeModal}>
      <div className={defaultClasses.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default MyModal;
