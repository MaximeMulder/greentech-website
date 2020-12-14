import React, { ReactElement, ReactNode } from 'react';

interface ModalProviderProps {
  children: ReactNode;
}

const ModalContext = React.createContext(null);

const ModalProvider = (props: ModalProviderProps): ReactElement => {
  const [modal, setModal] = React.useState<ReactElement>(null);
  return (
    <ModalContext.Provider value={setModal}>
      {props.children}
      {modal}
    </ModalContext.Provider>
  );
};

function withModal<P>(Component: React.ComponentType<P>): React.ElementType {
  return (props: P): ReactElement => (
    <ModalContext.Consumer>
      {(setModal) => <Component {...props} { ...{ setModal }} />}
    </ModalContext.Consumer>
  );
}

export { ModalProvider, withModal };
