import { User as NextUiUser } from "@heroui/react";
import { BASE_URL } from "../../constans";

type Props = {
  name: string,
  avatarUrl: string,
  description?: string,
  className?: string
}

export const User: React.FC<Props> = ({
  name = '',
  avatarUrl = '',
  description = '',
  className = '',
}) => {
  return (
    <NextUiUser 
      name={name}
      className={className}
      description={description}
      avatarProps={{
        src: `${BASE_URL}${avatarUrl}`
      }}
    />
  );
}