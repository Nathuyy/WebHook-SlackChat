import axios from "axios";
import dotenv from "dotenv";


dotenv.config();

export async function fetchDataAds() {
    const apiKey = process.env.WINDSOR_API_KEY
    const url = `https://connectors.windsor.ai/facebook?api_key=${apiKey}&date_from=2023-01-01&date_to=${new Date().toISOString().slice(0, 10)}&fields=campaign,clicks,spend,impressions,date`;

    try {
        const response = await axios.get(url)
       return response.data.data;
    } catch (error) {
        console.error('Error fetching data from Windsor.ai:', error); 

    }
}

