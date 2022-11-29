import { 
    createContext, 
    useState, 
    ReactNode 
} from "react";

interface InterfaceTipos {
  nome: string;
  sobrenome: string;
  nascimento: Date;
  email: string;
  cpf: string;
  telefone: string;
  genero?: ( 'Feminino' | 'Masculino' | null );
  experiencias: string;
}

interface ContextPropsForms {
  children: ReactNode;
}

const Context = createContext({});

const FormsProvider = ({ children }: ContextPropsForms) => {

  const [ listRegister, setListRegister ] = useState<InterfaceTipos[]>([])
  const addCadastro = (dados: InterfaceTipos) => { setListRegister([...listRegister, dados]) }

  return (
    <Context.Provider value={{addCadastro, listRegister}}>
      {children}
    </Context.Provider>
  );
};

export { FormsProvider, Context };