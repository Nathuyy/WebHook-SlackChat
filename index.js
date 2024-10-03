import { fetchDataAds } from "./fetchDataAds.js";
import { updateGoogleSheets } from "./updateGoogleSheets.js";
import { SendMessage } from "./sendMessage.js";
import cron from "node-cron";

cron.schedule("0 * * * * ", async () => {
  console.log("start!");

  try {
    const data = await fetchDataAds();

    const formattedData = Object.entries(data[0])
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    SendMessage(formattedData);

    console.log("Envio de dados finalizado!");

    await updateGoogleSheets(data);
  } catch (error) {
    console.error("Erro ao executar cron job:", error);
  }
});
