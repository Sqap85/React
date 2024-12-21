import React, { useState , useEffect} from 'react'

function useCopyToClipboard(text) {
    const [copied,setCopied] = useState(false);

    const copy = ()=>{
        navigator.clipboard.writeText(text)
        .then(()=>setCopied(true))
        .catch(()=>setCopied(false));
    }

    // copied true olduğunda, 3 saniye sonra tekrar false yapar
  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false); // 3 saniye sonra copied durumunu sıfırla
      }, 3000);

      return () => clearTimeout(timeout); // component unmount olduğunda timeout'u temizle
    }
  }, [copied]);

  return [copied, copy];
}

export default useCopyToClipboard