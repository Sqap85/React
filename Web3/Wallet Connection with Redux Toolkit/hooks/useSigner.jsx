import { useSelector } from "react-redux";

// Kullanıcının imzalayıcı objesini seçmek için özel hook
const useSigner = () => {
  const signer = useSelector((state) => state.data.signer);
  return signer;
};

export default useSigner;
