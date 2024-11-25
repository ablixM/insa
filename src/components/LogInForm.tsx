import {
  Box,
  FormControl,
  Input,
  Button,
  FormHelperText,
  InputGroup,
  InputRightElement,
  Flex,
  FormLabel,
  HStack,
  Checkbox,
  Image,
} from "@chakra-ui/react";
import insaLogo from "../assets/insaLogo.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { BiHide, BiShow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { users } from "../data/users";
import { useUsersStore } from "../store/useUsersStore";

const schema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
});

type FormData = z.infer<typeof schema>;

const LoginForm = () => {
  const [show, setShow] = useState(false);
  const setUser = useUsersStore((state) => state.setUser);
  const navigate = useNavigate();
  const handleClick = () => setShow(!show);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FieldValues) => {
    const { email, password } = data;
    console.log(data);
    const user = users.find(
      (u) =>
        (u.username === email || u.email === email) && u.password === password
    );

    if (user) {
      setUser({ username: user.username, email: user.email });
      navigate("/dashboard"); // Redirect on successful login
    } else {
      alert("Invalid username/email or password"); // General error
    }
    // loginClient
    //     .post({ email: data.email, password: data.password })
    //     .then((response) => {
    //       console.log("Login successful:", response);
    //     })
    //     .catch((error) => {
    //       console.error("Login failed:", error);
    //     });
  };
  return (
    <Flex flexDirection={"column"}>
      <Flex
        marginTop={"50px"}
        marginBottom={"20px"}
        width={"100%"}
        align={"center"}
        justify={"center"}
        paddingX={12}
      >
        <Image src={insaLogo}></Image>
      </Flex>
      <Box
        minWidth={"400px"}
        minHeight={"400px"}
        shadow={"base"}
        as={Flex}
        align={"center"}
        justify={"center"}
      >
        <Box width={"80%"}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <Box paddingY={2}>
                <FormLabel>Username or Email Adress</FormLabel>
                <Input
                  id="email"
                  fontSize={"md"}
                  paddingY={6}
                  {...register("email")}
                />
                {errors.email && (
                  <FormHelperText color={"red.400"}>
                    {errors.email.message}
                  </FormHelperText>
                )}
              </Box>
              <Box>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    fontSize={"md"}
                    paddingY={6}
                    {...register("password")}
                  />

                  <InputRightElement width="4.5rem" marginTop={1}>
                    <Button variant={"ghost"} onClick={handleClick}>
                      {show ? (
                        <BiHide fontSize={"20px"} />
                      ) : (
                        <BiShow fontSize={"20px"} />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {errors.password && (
                  <FormHelperText color={"red.400"}>
                    {errors.password.message}
                  </FormHelperText>
                )}
              </Box>
            </FormControl>
            <HStack
              marginTop={6}
              as={Flex}
              justify={"space-between"}
              align={"center"}
            >
              <Box>
                <Checkbox>Remember me</Checkbox>
              </Box>

              <Button
                bg="blue.400"
                type="submit"
                size={"sm"}
                paddingX={6}
                borderRadius={4}
              >
                Log In
              </Button>
            </HStack>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default LoginForm;
