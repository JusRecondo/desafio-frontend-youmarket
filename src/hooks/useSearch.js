import { useEffect, useRef, useState } from "react";

export function useSearch () {
  const [search, setSearch] = useState('');
  const [searchError, setSearchError] = useState(null);

  const isFirstInput = useRef(true);

  useEffect(() => {
    if(isFirstInput.current) {
      isFirstInput.current = search === '';
      return;
    }

    if(search === '') {
      setSearchError('Por favor ingrese un nombre o email.');
      return;
    }
    setSearchError(null);
  }, [search]);

  return { search, setSearch, searchError }
}