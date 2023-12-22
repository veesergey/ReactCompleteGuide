import { formatter } from "../src/util/investment"

export default function ResultTable({tableData}){
return (
    <div id="result">
        <table className='table'>
          <thead>
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) => (
              <tr key={data.year}>
                <td>{data.year}</td>
                <td>{data.valueEndOfYear}</td>
                <td>{data.interest}</td>
                <td>{data.totalInterest}</td>
                <td>{data.investedCapital}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
)
}

