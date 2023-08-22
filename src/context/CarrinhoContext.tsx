import { createContext, useState, useContext } from "react";

// Criar um contexto
const ModalContext = createContext();

// Provedor do contexto
export function ModalProvider({ children }) {
  const [modalCarrinho, setModalCarrinho] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ modalCarrinho, setModalCarrinho }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal deve ser usado dentro do ModalProvider");
  }
  return context;
}
