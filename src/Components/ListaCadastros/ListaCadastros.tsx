import { useContext } from 'react';
import { Context } from '../Context/Context';
import { Container, Info, InfoList, InfoName, Lista, Title } from './ListaCadastrosStyles';

const ListaCadastros = () => {

  const { listRegister }: any = useContext(Context);

  return (
    <Container>    
      <Title>Lista de Cadastros</Title>
      <Lista>
        {listRegister?.map((item: any, index: number) => (
          <InfoList key={index}>
            <InfoName><b>{item.nome} {item.sobrenome}</b></InfoName>
            <div>
              <Info>{item.nascimento}</Info>
              <Info>{item.email}</Info>
              <Info>{item.cpf}</Info>
              <Info>{item.telefone}</Info>
              <Info>{item.genero}</Info>
              <Info>{item.experiencias}</Info>
            </div>
          </InfoList>
        ))}
      </Lista>
    </Container>
  );
};

export default ListaCadastros;