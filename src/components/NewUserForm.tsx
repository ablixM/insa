import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useUserQueryStore from "../store/useUserStore";
import useRole from "../hooks/useRole";
import useRoles from "../hooks/useRoles";
import useAddUser from "../hooks/useAddUser";

// Define validation schema with Zod
const userSchema = z
  .object({
    username: z.string().min(1, { message: "Username is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof userSchema>;

function NewUserForm() {
  const toast = useToast();
  const selectedRoleId = useUserQueryStore((s) => s.userQuery.role);
  const setSelectedRoleId = useUserQueryStore((s) => s.setRole);
  const selectedRole = useRole(selectedRoleId);
  const { data } = useRoles();
  const { mutate } = useAddUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      username: "",
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (formData: FormData) => {
    mutate(
      {
        ...formData,
        role: selectedRoleId,
      },
      {
        onSuccess: () => {
          toast({
            title: "Success",
            description: "User added successfully.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          reset();
        },
        onError: (error) => {
          toast({
            title: "Error",
            description: error.message || "Failed to add user.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack
        flexDirection={"column"}
        align={"center"}
        justify={"center"}
        maxW={"50%"}
        spacing={4}
      >
        <FormControl isInvalid={!!errors.username}>
          <Box as={Flex} flexDirection={"row"} align={"center"}>
            <FormLabel width={"250px"} margin={0}>
              User name
            </FormLabel>
            <Input {...register("username")} />
          </Box>
          <Box color="red.500">{errors.username?.message}</Box>
        </FormControl>

        <FormControl isInvalid={!!errors.email}>
          <Box as={Flex} flexDirection={"row"} align={"center"}>
            <FormLabel width={"250px"} margin={0}>
              E-mail
            </FormLabel>
            <Input type="email" {...register("email")} />
          </Box>
          <Box color="red.500">{errors.email?.message}</Box>
        </FormControl>

        <FormControl isInvalid={!!errors.firstName}>
          <Box as={Flex} flexDirection={"row"} align={"center"}>
            <FormLabel width={"250px"} margin={0}>
              First Name
            </FormLabel>
            <Input {...register("firstName")} />
          </Box>
          <Box color="red.500">{errors.firstName?.message}</Box>
        </FormControl>

        <FormControl isInvalid={!!errors.lastName}>
          <Box as={Flex} flexDirection={"row"} align={"center"}>
            <FormLabel width={"250px"} margin={0}>
              Last Name
            </FormLabel>
            <Input {...register("lastName")} />
          </Box>
          <Box color="red.500">{errors.lastName?.message}</Box>
        </FormControl>

        <FormControl isInvalid={!!errors.password}>
          <Box as={Flex} flexDirection={"row"} align={"center"}>
            <FormLabel width={"250px"} margin={0}>
              Password
            </FormLabel>
            <Input type="password" {...register("password")} />
          </Box>
          <Box color="red.500">{errors.password?.message}</Box>
        </FormControl>

        <FormControl isInvalid={!!errors.confirmPassword}>
          <Box as={Flex} flexDirection={"row"} align={"center"}>
            <FormLabel width={"250px"} margin={0}>
              Confirm Password
            </FormLabel>
            <Input type="password" {...register("confirmPassword")} />
          </Box>
          <Box color="red.500">{errors.confirmPassword?.message}</Box>
        </FormControl>

        <FormControl>
          <Box as={Flex} flexDirection={"row"} align={"center"}>
            <FormLabel width={"200px"} margin={0}>
              Role
            </FormLabel>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<BsChevronDown />}
                overflowY={"hidden"}
              >
                {selectedRole?.name || "Role"}
              </MenuButton>
              <MenuList overflowY={"auto"}>
                {data?.results.map((role) => (
                  <MenuItem
                    onClick={() => setSelectedRoleId(role.name)}
                    key={role.id}
                  >
                    {role.name}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
        </FormControl>

        <Box marginY={12}>
          <Button type={"submit"} bg={"green.400"} width={"200px"}>
            Add User
          </Button>
        </Box>
      </VStack>
    </form>
  );
}

export default NewUserForm;
