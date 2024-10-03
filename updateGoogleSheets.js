import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();


export async function deleteSheetsData() {
    const sheets = process.env.SHEETDB_API_URL;


    try {
        const response = await axios.delete(`${sheets}/all`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });


        console.log('Dados deletados com sucesso:', response.data);
    } catch (error) {
        console.error('Erro ao deletar os dados:', error.response?.data || error.message);
    }
}




export async function updateGoogleSheets(data) {


    const sheetDBUrl = process.env.SHEETDB_API_URL;


    if (!Array.isArray(data)) {
        console.error("Expected data to be an array, but got:", typeof data);
        return;
    }


    const formattedData = data.map(item => ({
        campaign: item.campaign,
        clicks: item.clicks,
        spend: item.spend,
        impressions: item.impressions,
        date: item.date
    }));




    try {
        const response = await axios.post(sheetDBUrl, { data: formattedData });
    } catch (error) {
        console.error('Error sending data to SheetDB:', error);
    }
}
