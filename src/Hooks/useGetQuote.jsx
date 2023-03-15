import { useState, useEffect } from "react";
import axios from 'axios'

export default function useGetQuote() {
    const [currentQuote, setCurrentQuote] = useState();

    useEffect(() => {
        (async () => {
            try {
                    const quoteData = await axios.get("https://api.api-ninjas.com/v1/quotes", {
                    params: {
                        'limit': 1
                    },
                    headers: {
                        'X-Api-Key': import.meta.env.VITE_API_KEY
                    }
                })
                setCurrentQuote(quoteData.data[0])
            }
            catch (error) {
                console.log(error);
            }
        })()

    }, [])

    return currentQuote;
}