import { fetchDataAds } from "./fetchDataAds.js";
import { updateGoogleSheets } from "./updateGoogleSheets.js";
import { SendMessage } from "./sendMessage.js";

(async () => {
  const data = await fetchDataAds();

  const formattedData = Object.entries(data[0])
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  SendMessage(formattedData);

  console.log("envio de dados finalizado!");

  await updateGoogleSheets(data);
})();
