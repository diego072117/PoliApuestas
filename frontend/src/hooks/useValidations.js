import { useSelector } from "react-redux";

const useValidators = {
  isUserAuthenticated: () => {
    const isAuthenticated = useSelector((state) => state.users.auth.access_token);
    return isAuthenticated === true;
  },
};

export default useValidators;