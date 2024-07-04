export const EMPLOYEE_HSA_DATA_URL: string = process.env.NODE_ENV === "development"
  ? "https://api.airtable.com/v0/appekA493GuXz8uDK/tbllLFdZDMfLjAT4N "
  : "prouction url goes here"


  export const HSA_CONTRIBUTION_LIMITS = {
    'FAMILY_HDHP_MIN_DEDUCTIBLE': 3200,
    'SELFONLY_HDHP_MIN_DEDUCTIBLE': 1600,
    'FAMILY_HSA_CONTRIBUTION_LIMIT': 8300,
    'SELFONLY_HSA_CONTRIBUTION_LIMIT': 4150,
    'HSA_CATCHUP': 1000,
  }