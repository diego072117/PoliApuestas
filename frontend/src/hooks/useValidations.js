import { useSelector } from "react-redux";

const useValidators = {
  isUserAuthenticated: () => {
    const isAuthenticated = useSelector((state) => state.users.auth.access_token);
    return isAuthenticated === true;
  },
  isUserRolOrganizador: () => {
    const idOrganizador = useSelector((state) => state.users.auth.user.rol);
    return idOrganizador === 'organizador';
  },
};

export default useValidators;