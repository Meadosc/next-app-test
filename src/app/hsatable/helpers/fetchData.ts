import { EMPLOYEE_HSA_DATA_URL } from "./constants";


export async function fetchHsaData() {
  const options = {
    headers: {
      'Accept': "application/json",
      'Authorization': `Bearer ${process.env.THATCH_API_KEY}`,
    },
  };

  const res = await fetch(EMPLOYEE_HSA_DATA_URL, options)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  // Could add more handling for different reponses here.
  // For example, a 204 response can return an empty table or list
 
  return res.json()
}