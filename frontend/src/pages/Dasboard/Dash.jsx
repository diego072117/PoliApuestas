import { InfoUser } from "../../components/InfoUser/InfoUser";
import { ListRifas } from "../../components/ListRifas/ListRifas";
import "./Module.scss";
export const Dash = () => {
  return (
    <div className="container-dash">
      <div className="info-user-dash">
        <InfoUser />
      </div>

      <div className="info-rifas-dash">
        <ListRifas />
      </div>
    </div>
  );
};
