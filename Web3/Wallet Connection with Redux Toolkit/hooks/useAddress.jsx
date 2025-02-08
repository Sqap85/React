import { useSelector } from "react-redux";

// Kullanıcının adresini seçmek için özel hook
const useAddress = () => {
  const address = useSelector((state) => state.data.address);
  return address;
};

export default useAddress;
