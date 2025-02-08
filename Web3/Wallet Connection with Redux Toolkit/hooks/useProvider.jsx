import { useSelector } from "react-redux";

// Ethereum provider'ı seçmek için özel hook
const useProvider = () => {
  const provider = useSelector((state) => state.data.provider);
  return provider;
};

export default useProvider;
