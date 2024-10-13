import { useState } from "react";

const useFetch =(callback) =>{
    const[data,setData]=useState(undefined);
    const[loading,setLoading]= useState(null);
    const[error, setError]=useState(null);

    const func= async(...args)=>{
        setLoading(true);
        setError(null);

        try {
            const response= await callback(...args);
            setData(response);
            setError(null);

        } catch (error) {
            setError(error);

        }finally{
            setLoading(true);
        }
    }

    return {data, loading, error , func};
}

export default useFetch;