import { useParams } from "react-router-dom";
import { getToken } from "../utils/token";
export const PostUser = () => {
  const params = useParams();
  console.log(params.id); //Aqui esta el id del usuario
  let token = getToken(); // Aqui tienes el token
  const request = fetch();
  console.log(token);

  return <h2>{params.id}</h2>;
};
