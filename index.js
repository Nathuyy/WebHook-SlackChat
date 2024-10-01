import { fetchDataAds } from "./fetchDataAds.js";
import { updateGoogleSheets } from "./updateGoogleSheets.js";

(async () => {
    const data = await fetchDataAds();
    console.log(data);
    
    await updateGoogleSheets(data);
 
})();