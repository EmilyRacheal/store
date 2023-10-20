import { Modal } from "@mantine/core";
import React, { ReactNode, createContext, useState } from "react";

export interface IModalContext {
  setModalState: React.Dispatch<React.SetStateAction<IModalState>>;
  modalState: IModalState;
  close: () => void;
}

interface IModalState {
  opened: boolean;
  component: null | ReactNode;
  id?: null | string | number;
  onClose?: () => void;
}

export const ModalContext = createContext<IModalContext | null>(null);
const initialValues = {
  opened: false,
  component: null,
  id: null,
  onClose: () => {},
};
function ModalProvider({ children }: { children: ReactNode }) {
  const [modalState, setModalState] = useState<IModalState>(initialValues);
  const close = () => {
    setModalState({
      opened: false,
      component: null,
      id: null,
      onClose: () => {},
    });
  };
  return (
    <ModalContext.Provider value={{ setModalState, close, modalState }}>
      <Modal
        classNames={{
          content: "flex flex-col rounded-[10px]",
          body: "m-0 p-0 overflow-auto flex-1 flex flex-col",
          header: "m-0 p-0",
        }}
        size="auto"
        centered
        withCloseButton={false}
        opened={modalState.opened}
        onClose={() => {
          setModalState({
            opened: false,
            component: null,
          });
          if (modalState.onClose) modalState.onClose();
        }}
      >
        {modalState.component}
      </Modal>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
