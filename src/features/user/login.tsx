import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../components/input";
import { Button, Link } from "@heroui/react";
import { useLazyCurrentQuery, useLoginMutation } from "../../app/services/userApi";
import { useNavigate } from "react-router-dom";
import { hasErrorField } from "../../utils/has-error-field";
import { ErrorMessage } from "../../components/error-message";

type Login ={
  email: string,
  password: string
}

type Props = {
  setSelected: (value: string) => void
}

export const Login: React.FC<Props> = ({ setSelected }) => {
  const { 
    handleSubmit,
    control,
    formState: { errors }
   } = useForm<Login>({
    mode: 'onChange',
    reValidateMode: 'onBlur',
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [triggerCurrentQuery] = useLazyCurrentQuery();

  const onSubmit = async (data: Login) => {
    try {
      await login(data).unwrap();
      await triggerCurrentQuery().unwrap();
      navigate('/');
    } catch (error) {
      if (hasErrorField(error)) {
        setError(error.data.error);
      }
    }
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Input 
        control={control}
        name="email"
        label="E-mail"
        type="email"
        required="Обов'язкове поле"
      />
      <Input 
        control={control}
        name="password"
        label="Пароль"
        type="password"
        required="Обов'язкове поле"
      />
      <ErrorMessage error={error} />
      <p className="text-center text-small">
        Немає аккаунта?{" "}
        <Link
          size="sm"
          className="cursor-pointer"
          onPress={() => setSelected('sign-up')}
        >
          Зареєструйтесь
        </Link>
      </p>
      <div className="flex gap-2 justify-end">
        <Button fullWidth color="primary" type="submit" isLoading={isLoading}>
          Увійти
        </Button>
      </div>
    </form>
  );
}