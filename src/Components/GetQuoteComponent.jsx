import { useState, useEffect } from "react";
import axios from 'axios'
import useGetQuote from "../Hooks/useGetQuote";

function GetQuoteComponent() {
    // const [currentQuote, setCurrentQuote] = useState();
    const currentQuote = useGetQuote();

    // useEffect(async () => {
    //     (async () => {
    //         try {
    //                 const quoteData = await axios.get("https://api.api-ninjas.com/v1/quotes", {
    //                 params: {
    //                     'limit': 1
    //                 },
    //                 headers: {
    //                     'X-Api-Key': import.meta.env.VITE_API_KEY
    //                 }
    //             })
    //             setCurrentQuote(quoteData.data[0])
    //         }
    //         catch (error) {
    //             console.log(error);
    //         }
    //     })()

    // }, [])

    return (
        <>
        {
            currentQuote && 
            <>
                <h1>{currentQuote.quote}</h1>
                <h2>Spoken by {currentQuote.author}</h2>
            </>
        
        }
        </>
    )
}

export default GetQuoteComponent