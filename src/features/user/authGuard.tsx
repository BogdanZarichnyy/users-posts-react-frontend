import { Spinner } from "@heroui/react";
import { useCurrentQuery } from "../../app/services/userApi";

export const AuthGuard = ({
  children
}: { children: JSX.Element }) => {
  const { isLoading } = useCurrentQuery();

  if (isLoading) {
    return <Spinner />
  }

  return children;
}