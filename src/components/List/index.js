import { useEffect, useState, useCallback, useMemo } from "react";

const set =  new Set();

export default function List() {
    const [contador, setContador] = useState(1);

    const number = useMemo(()=> 1533728327832832  * 12123134548, []);

    const handleSetContador = useCallback(() => {
        setContador((oldContador) => oldContador + 1);
        set.add(handleSetContador);
    },[])
    

    return (
        <div>Contador: {contador}
        <button number={number} onClick={handleSetContador}> Aumenta Contador</button>
        </div>
    );
}