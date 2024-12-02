import useCatagory from "./useCatagory";

const useCatagories = (id?: string) => {
  const { data: catagories } = useCatagory();
  return catagories?.results.find((p) => p.name === id);
};

export default useCatagories;
