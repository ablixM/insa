import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  FormHelperText,
  FormErrorMessage,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useToast,
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
      <Box maxW="800px">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <FormControl isInvalid={!!errors.username}>
            <FormLabel>Username</FormLabel>
            <Input
              {...register("username")}
              placeholder="Enter username"
              borderRadius="md"
              _focus={{
                borderColor: "blue.400",
                boxShadow: "0 0 0 1px blue.400",
              }}
              _hover={{
                borderColor: "gray.300",
              }}
            />
            <FormHelperText>Choose a unique username</FormHelperText>
            <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              {...register("email")}
              type="email"
              placeholder="Enter email"
              borderRadius="md"
              _focus={{
                borderColor: "blue.400",
                boxShadow: "0 0 0 1px blue.400",
              }}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.firstName}>
            <FormLabel>First Name</FormLabel>
            <Input
              {...register("firstName")}
              placeholder="Enter first name"
              borderRadius="md"
              _focus={{
                borderColor: "blue.400",
                boxShadow: "0 0 0 1px blue.400",
              }}
            />
            <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.lastName}>
            <FormLabel>Last Name</FormLabel>
            <Input
              {...register("lastName")}
              placeholder="Enter last name"
              borderRadius="md"
              _focus={{
                borderColor: "blue.400",
                boxShadow: "0 0 0 1px blue.400",
              }}
            />
            <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.password}>
            <FormLabel>Password</FormLabel>
            <Input
              {...register("password")}
              type="password"
              placeholder="••••••••"
              borderRadius="md"
              _focus={{
                borderColor: "blue.400",
                boxShadow: "0 0 0 1px blue.400",
              }}
            />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.confirmPassword}>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              {...register("confirmPassword")}
              type="password"
              placeholder="••••••••"
              borderRadius="md"
              _focus={{
                borderColor: "blue.400",
                boxShadow: "0 0 0 1px blue.400",
              }}
            />
            <FormErrorMessage>
              {errors.confirmPassword?.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl>
            <FormLabel>Role</FormLabel>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<BsChevronDown />}
                width="100%"
                textAlign="left"
                variant="outline"
              >
                {selectedRole?.name || "Select Role"}
              </MenuButton>
              <MenuList>
                {data?.results.map((role) => (
                  <MenuItem
                    key={role.id}
                    onClick={() => setSelectedRoleId(role.name)}
                  >
                    {role.name}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </FormControl>
        </SimpleGrid>

        <Button
          type="submit"
          colorScheme="blue"
          size="md"
          width="100%"
          borderRadius="md"
          mt={8}
        >
          Submit
        </Button>
      </Box>
    </form>
  );
}

export default NewUserForm;
