import Card from "../../components/card/Card";
import { Form, Displayed, Title, InputInvalid, DivLine2, DivEmail, DivPassword, DivPhone, DivBirthday, DivLine3 } from "./Home.styled";
import Checkbox from "../../components/checkbox/Checkbox";
import Button from "../../components/button/Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { InputStyled, Label, ContainerInput } from "../../components/input/InputStyled";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().matches(/^[\w]+(?:\s[\w]+)+$/).required(),
  email: yup.string().email().matches(/^[a-z0-9._-]+(?:\.[a-z0-9._-]+)*@(?:[a-z0-9](?:[a-z-]*[a-z])?.)+[a-z](?:[a-z]*[a-z]){1,}?$/).required(),
  phone: yup.string().matches(/\([1-9]{2}\) 9[1-9]\d{3}-\d{4}/).required(),
  password: yup.string().matches(/^[0-9]{6,9}$/).required(),
  birthday: yup.date().min(`1901-01-01`).required(),
}).required();


function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  let navigate = useNavigate();

  function validation(userData) {
    console.log(userData);
    navigate('/sucess');
  }

  return (
    <Card>

      <Displayed src={"/src/img/Data1.png"} />
      <Title>Intern Sign Up</Title>

      <Form onSubmit={handleSubmit(validation)}>


        <ContainerInput>
          <Label htmlFor="Fullname">Full Name *</Label>
          <InputStyled type="text" id="Fullname" placeholder="Name" {...register("name", { required: true })} />
          {errors.name && <InputInvalid>Fullname Invalid</InputInvalid>}
        </ContainerInput>

        <DivLine2>

          <DivEmail>
            <ContainerInput>
              <Label htmlFor="Email">Email *</Label>
              <InputStyled type="text" id="Email" placeholder="foo@bar.com" {...register("email", { required: true })} />
              {errors.email && <InputInvalid>Email Invalid</InputInvalid>}
            </ContainerInput>
          </DivEmail>

          <DivPhone>
            <ContainerInput>
              <Label htmlFor="Phone">Phone</Label>
              <InputStyled type="tel" id="Phone" placeholder="(83) 00000-0000" {...register("phone", { required: true })} />
              {errors.phone && <InputInvalid>Phone Invalid</InputInvalid>}
            </ContainerInput>
          </DivPhone>

          <DivPassword>
            <ContainerInput>
              <Label htmlFor="Password">Password *</Label>
              <InputStyled type="password" id="Password" placeholder="Enter your password" {...register("password", { required: true })} />
              {errors.password && <InputInvalid>Password Invalid</InputInvalid>}
            </ContainerInput>
          </DivPassword>

          <DivBirthday>
            <ContainerInput>
              <Label htmlFor="Birthday *">Birthday *</Label>
              <InputStyled type="date" id="Birthday" placeholder="dd/mm/yyyy" {...register("birthday", { required: true })} />
              {errors.birthday && <InputInvalid>Birthday Invalid</InputInvalid>}
            </ContainerInput>
          </DivBirthday>

        </DivLine2>

        <DivLine3>
          <Checkbox label="I accept the terms and privacy" register={register} />
          <Button name="Register" type="submit" />
        </DivLine3>

      </Form>

    </Card>
  )
}

export default Home                      
