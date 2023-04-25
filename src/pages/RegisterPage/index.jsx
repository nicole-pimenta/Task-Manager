import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { StyledButton } from "../../styles/button";

export const RegisterPage = () => {
  const { register, handleSubmit } = useForm();

  const submit = (formData) => {
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        id="name"
        label="Nome"
        register={register("name")}
        type="text"
        placeholder="Digite aqui seu nome"
      />
      <Input
        id="email"
        label="Email"
        register={register("email")}
        type="text"
        placeholder="Digite aqui seu email"
      />
      <Input
        id="password"
        label="Senha"
        register={register("password")}
        type="password"
        placeholder="Digite aqui sua senha"
      />
      <Input
        id="confirmPassword"
        label="Confirmar Senha"
        register={register("passwordConfirm")}
        type="password"
        placeholder="Digite novamente sua senha"
      />
      <StyledButton type="submit">Cadastrar </StyledButton>
    </form>
  );
};
