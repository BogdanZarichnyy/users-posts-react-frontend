import { Button as NextButton } from "@heroui/react";

type Props = {
  children: React.ReactNode,
  icon?: JSX.Element,
  classname: string,
  type: 'button' | 'submit' | 'reset',
  fullWidth?: boolean,
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | undefined
}

export const Button: React.FC<Props> = ({
  children,
  icon,
  classname,
  type,
  fullWidth,
  color
}) => {
  return (
    <NextButton 
      startContent={icon}
      size='lg'
      color={color}
      variant='light'
      className={classname}
      type={type}
      fullWidth={fullWidth}
    >
      {children}
    </NextButton>
  );
}