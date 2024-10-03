import axios from "axios";

export const SendMessage = async (data) => {
  axios
    .post(
      "https://discord.com/api/webhooks/1291434616166809611/UyRYCStpYilvJs95jVE2_vCgNeKa-LDAusmO8xGZth9_Nix4z_toRLkyzrCer4u7-9qP",
      {
        content: data
      }
    )
    .then((response) => {
      console.log("Message sent successfully");
    })
    .catch((error) => {
      console.error("trash discord");
    });
};

