import { useSelector } from "react-redux";

// Akıllı kontrat referansını seçmek için özel hook
const useContract = () => {
  const contract = useSelector((state) => state.contract.simpleContract);
  return contract;
};

export default useContract;
