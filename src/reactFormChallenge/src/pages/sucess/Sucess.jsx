import Card from "../../components/card/Card";
import {Displayed2, Title2} from "./Sucess.styled";
import Button from "../../components/button/Button";
import {useNavigate}  from "react-router-dom";

function Sucess() {
  let navigate = useNavigate();
    return (
      <Card>
      <Displayed2  src={"/src/img/Data1.png"}/>
      <Title2>Succes!</Title2> 
      <Button name="Go Back!"  onClick={()=>navigate("/")}/>
       </Card>
    )
  }
  
  export default Sucess       