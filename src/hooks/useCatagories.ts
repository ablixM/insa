import useCatagory from "./useCatagory";

const useCatagories = (id?: number) => {
  const { data: catagories } = useCatagory();
  return catagories?.results.find((p) => p.id === id);
};

export default useCatagories;
