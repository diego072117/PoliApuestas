import { InfoUser } from "../../components/InfoUser/InfoUser";
import { ListRifas } from "../../components/ListRifas/ListRifas";
import { useValidators } from "../../hooks/useValidations";
import "./Module.scss";
export const Dash = () => {
  const { isUserRolParticipante } = useValidators();
  return (
    <div className="container-dash">
      <div className="info-user-dash">
        <InfoUser />
      </div>
      {isUserRolParticipante() && (
        <div className="info-rifas-dash">
          <ListRifas />
        </div>
      )}
    </div>
  );
};
