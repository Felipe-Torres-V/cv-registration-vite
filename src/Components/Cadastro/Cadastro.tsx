import InputMask from 'react-input-mask';
import { useForm } from 'react-hook-form';
import { isCPF } from 'brazilian-values';
import { Context } from '../Context/Context';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { 
  CadastroContainer, 
  Container, 
  InputContainer, 
  Input, 
  Title, 
  InputSelect, 
  NormalInputs, 
  SelectInputContainer, 
  ExpContainer, 
  Submit, 
  ExpText 
} from './CadastroStyles';

type Tipos = {
  nome: string;
  sobrenome: string;
  nascimento: Date;
  email: string;
  cpf: string;
  telefone: string;
  genero: ( 'Feminino' | 'Masculino' | null );
  experiencias: string;
};

const Cadastro = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Tipos>({ mode: "onTouched" });
  const { addCadastro }: any = useContext(Context);
  const navigate = useNavigate();
  const addPost = (data: Tipos) => {
    addCadastro(data)
    navigate("/listaCadastros");
  };

  const nomeWatch = watch('nome');
  const sobrenomeWatch = watch('sobrenome');
  const nascimentoWatch = watch('nascimento');
  const emailWatch = watch('email');
  const cpfWatch = watch('cpf');
  const telefoneWatch = watch('telefone');
  const experienciasWatch = watch('experiencias');
  const isValid = nomeWatch && sobrenomeWatch && nascimentoWatch && emailWatch && cpfWatch && telefoneWatch && experienciasWatch;

  return (

    <Container>
      <Title>Cadastro</Title>
      <CadastroContainer onSubmit={handleSubmit(addPost)}>
        <NormalInputs>
          <InputContainer>
            <label htmlFor="nome">Nome *</label>
            <Input type="text" id="nome" placeholder="Nome" 
            {...register("nome", { required: "Campo obrigatório", maxLength: 80, })}/>
            {errors.nome && <p>{errors.nome.message}</p>}
          </InputContainer>
          <InputContainer>
            <label htmlFor="sobrenome">Sobrenome *</label>
            <Input placeholder="Sobrenome" id="sobrenome" 
            {...register("sobrenome", {required: {value: true, message: "Campo obrigatório"}, minLength: {value: 2, message: "Ao menos duas letras"}})}/>
            {errors.sobrenome && <p>{errors.sobrenome.message}</p>}
          </InputContainer>
          <InputContainer>
            <label htmlFor="nascimento">Data de Nascimento *</label>
            <Input id='nascimento' type='date'
              {...register("nascimento", {required: "Campo obrigatório"})}/>
            {errors.nascimento && <p>{errors.nascimento.message}</p>}
          </InputContainer>
          <InputContainer>
            <label htmlFor="email">Email *</label>
            <Input placeholder="Email" type="text" id='email'
              {...register("email", {required: "Campo obrigatório", maxLength: 70,
                pattern: {
                  value: /^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Endereço de email inválido"}})}/>
            {errors.email && <p>{errors.email.message}</p>}
          </InputContainer>
          <InputContainer>
            <label htmlFor="cpf">CPF *</label>
            <InputMask
              style={{
                'outline': 'none',
                'height': '25px',
                'borderRadius': '2px',
                'border': '0',
                'padding': '5px',
                'width': '200px',
                'fontFamily': "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
              }}
              id='cpf'
              mask="999.999.999-99"
              placeholder="CPF"
              {...register("cpf", {required: "Campo obrigatório",validate: {value: async value => await isCPF(value) || "Digite um CPF existente"}})}/>
            {errors.cpf && <p>{errors.cpf.message}</p>}
          </InputContainer>
          <InputContainer>
            <label htmlFor="telefone">Telefone</label>
            <InputMask
              style={{
                'outline': 'none',
                'height': '25px',
                'borderRadius': '2px',
                'border': '0',
                'padding': '5px',
                'width': '200px',
                'fontFamily': "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
              }}
              id='telefone'
              mask="(99) 99999-9999"
              placeholder="Telefone"
              {...register("telefone", {required: "Campo obrigatório",})}/>
            {errors.telefone && <p>{errors.telefone.message}</p>}
          </InputContainer>
          <SelectInputContainer>
            <label htmlFor="genero">Gênero</label>
            <div>
              <label htmlFor="genero">
              <InputSelect>
                <input
                  {...register('genero')} type="radio" name="genero" value="Feminino"/>{' '} Feminino
              </InputSelect>
              </label>
              <label htmlFor="genero">
              <InputSelect>
                <input
                  {...register('genero')} type="radio" name="genero" value="Masculino"/>{' '} Masculino
              </InputSelect>
              </label>
            </div>
          </SelectInputContainer>
        </NormalInputs>
        <ExpContainer>
          <label htmlFor="experiencias">Experiências</label>
          <ExpText
            {...register('experiencias', {required: "Ao menos um ítem", minLength: 10})}
            id='experiencias' />
          {errors.experiencias && <p>{errors.experiencias.message}</p>}
        </ExpContainer>
        <Submit type="submit" disabled={!isValid} className="button">Cadastrar</Submit>
      </CadastroContainer>
    </Container>
  );
};

export default Cadastro;