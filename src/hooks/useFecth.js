import {useState,useEffect} from 'react';

export default function useFetch(url,optios)
{
     const [loading,setLoading]= useState(true);
     const [result,setResult]=useState(null);
     const [error,setError]=useState(null);


     useEffect(() => {
         (async()=>{
             try{
                const res=await fetch(url,optios);
                const json = await res.json();
                setResult(json);
                setLoading(false);
             }catch(err)
             {
                setError(err);
                setLoading(false);
             }
         })();
     }, [optios,url])

     return {loading,result,error};

}