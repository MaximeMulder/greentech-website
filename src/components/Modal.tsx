import React, { ReactElement, ReactNode } from 'react';

import close from '../images/close.svg';

import './Modal.scss';

interface ModalProviderProps {
  children: ReactNode;
}

const ModalContext = React.createContext(null);

const ModalProvider = (props: ModalProviderProps): ReactElement => {
  const [modal, setModal] = React.useState<ReactElement>(null);
  return (
    <ModalContext.Provider value={setModal}>
      <div className={'modal-wrapper' + (modal ? ' modal-open' : '')}>
        {props.children}
      </div>
      {modal}
    </ModalContext.Provider>
  );
};

interface ModalProps {
  children: ReactNode;
  setModal: (element: ReactElement) => void;
}

const Modal = (props: ModalProps) => {
  return (
    <div className="modal">
      <div className="modal-window">
        <img className="modal-close" src={close} onClick={() => props.setModal(null)} />
        <div className="modal-content">
          {props.children}
        </div>
      </div>
      <div className="modal-overlay" onClick={() => props.setModal(null)}></div>
    </div>
  );
};

function withModal<P>(Component: React.ComponentType<P>): React.ElementType {
  return (props: P): ReactElement => (
    <ModalContext.Consumer>
      {(setModal) => <Component {...props} { ...{ setModal }} />}
    </ModalContext.Consumer>
  );
}

export default Modal;
export { ModalProvider, withModal };
