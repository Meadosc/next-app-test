import { HSA_CONTRIBUTION_LIMITS } from "./constants";


export function handleData(data: any) {
    let new_table = []
    for (let i = 0; i < data['records'].length; i++) {
      let record = data['records'][i]['fields']
      record = calculate_new_columns(record);
      new_table.push(record)
    }

    return new_table
  }
  
  
  function calculate_new_columns(record: any) {
    let hdhp_min_deductible, hsa_contribution_limit, hsa_catchup;
    if ( record['Plan type'] == 'Family' ) {
      hdhp_min_deductible = HSA_CONTRIBUTION_LIMITS['FAMILY_HDHP_MIN_DEDUCTIBLE'];
      hsa_contribution_limit = HSA_CONTRIBUTION_LIMITS['FAMILY_HSA_CONTRIBUTION_LIMIT'];
      hsa_catchup = HSA_CONTRIBUTION_LIMITS['HSA_CATCHUP'];
    } else {
      hdhp_min_deductible = HSA_CONTRIBUTION_LIMITS['SELFONLY_HDHP_MIN_DEDUCTIBLE'];
      hsa_contribution_limit = HSA_CONTRIBUTION_LIMITS['SELFONLY_HSA_CONTRIBUTION_LIMIT'];
      hsa_catchup = HSA_CONTRIBUTION_LIMITS['HSA_CATCHUP'];
    }
    // Could add error handling if value is not 'Family' or 'Self-only'.
  
    // Add HSA eligible column
    record['HSA eligible'] = (record['Deductible'] >= hdhp_min_deductible) ? 'Yes' : 'No';
  
    // Add HSA Max contibution column
    if ( is_fifty_five_or_older(record['Date of birth']) ) {
        record['HSA max contribution'] = hsa_contribution_limit + hsa_catchup
    } else {
        record['HSA max contribution'] = hsa_contribution_limit
    }
  
    return record
  }


  function is_fifty_five_or_older(date_of_birth: string) {
    const today = new Date(); // Further investigation should be done to consider what timezone this is in and how it affects the outcome.
    const dob = new Date(date_of_birth)
    const years = (today.valueOf() - dob.valueOf()) / (1000 * 60 * 60 * 24 * 365 ) // milliseconds * seconds * minutes * hours * days  to find number of years
    const is_55_or_older = ( years >= 55 )
    return is_55_or_older
  }
