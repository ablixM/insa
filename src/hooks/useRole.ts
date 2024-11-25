
import useRoles from "./useRoles";


const useRole= (id?: number) => {
    const {data: roles} = useRoles();
    return  roles?.results.find(p => p.id === id);
};

export default useRole;