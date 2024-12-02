import useRoles from "./useRoles";

const useRole = (role?: string) => {
  const { data: roles } = useRoles();
  return roles?.results.find((p) => p.name === role);
};

export default useRole;
