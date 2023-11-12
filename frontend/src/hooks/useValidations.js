import { useSelector } from "react-redux";

export const useValidators = () => {
  const isAuthenticated = useSelector((state) => state.users.auth.access_token);
  const user = useSelector((state) => state.users.auth.user?.rol);

  const isUserAuthenticated = () => {
    return isAuthenticated ? true : false;
  };

  const isUserRolOrganizador = () => {
    return user === "organizador" ? true : false;
  };

  return {
    isUserAuthenticated,
    isUserRolOrganizador,
  };
};