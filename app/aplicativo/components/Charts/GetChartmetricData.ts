"use server";

export default async function GetChartmetricData() {
  console.log("Fetching data from Chartmetric API");
  try {
    return "ok";
  } catch (error) {
    console.error(error);
  }
}
