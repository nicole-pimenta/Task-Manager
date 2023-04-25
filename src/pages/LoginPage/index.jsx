import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { StyledButton } from "../../styles/button";

export const LoginPage = () => {
  const submit = (formData) => {
    console.log(formData);
  };

  const { register, handleSubmit } = useForm();
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <Input
          id="email"
          label="Email"
          register={register("email")}
          type="email"
          placeholder="Digite aqui seu email"
        />
        <Input
          id="password"
          label="Senha"
          register={register("password")}
          type="password"
          placeholder="Digite aqui sua senha"
        />
        <StyledButton type="submit">Entrar</StyledButton>
      </form>
      LoginPage
    </div>
  );
};
