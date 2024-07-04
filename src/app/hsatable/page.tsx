import { fetchHsaData } from "./helpers/fetchData";
import { handleData } from "./helpers/handleData"; 

import styles from "./page.module.css";


export default function Page() {
  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.title}>
          HSA Eligibility and Max Contributions
        </h1>
      </div>
      <div>
        {/* @ts-expect-error Server Component */}
        <HsaTable/>
      </div>
    </main>
  );
}


async function HsaTable() {
  const data = await fetchHsaData();
  const rows = handleData(data);
  return (
    <div className={styles.table}>
      <table>
        <thead>
          <tr>
            {rows.length > 0 && Object.keys(rows[0]).map((key) => (
              <th key={key} className={styles.thead}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((item) => (
            <tr key={item.Name} className={styles.row}> {/* Rather than using 'Name', I should use a guaranteed unique id or even an auto generated unique id */}
              {Object.values(item).map((val, index) => (
                <td key={index} className={styles.tdata}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
