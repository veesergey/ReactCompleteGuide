import { useState } from 'react'
import Header from "../components/Header"
import UserInput from '../components/UserInput'

function App() {
  const tableData = [
    { year: 1, investmentValue: 1000, interestYear: 100, totalInterest: 100, investedCapital: 1000 },
    { year: 2, investmentValue: 2000, interestYear: 200, totalInterest: 300, investedCapital: 3000 },
    { year: 3, investmentValue: 3000, interestYear: 300, totalInterest: 600, investedCapital: 6000 },
    // Add more data as needed
  ];
  return (
    <div>
      <Header title='Investment Calculator'/>
      <div id="user-input" className='input-group'>        
        <UserInput type='text' id='initial-investment' title='Initial Investment' placeHolder='Enter Initial Investment'/>
        <UserInput type='number' id='annual-investment' title='Annual Investment' placeHolder='Enter Annual Investment'/>
        <UserInput type='number' id='expected-return' title='Expected Return' placeHolder='Enter Expected Return'/>
        <UserInput type='number' id='duration' title='Duration' placeHolder='Enter Duration in months'/> 
      </div>      
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
                <td>{data.investmentValue}</td>
                <td>{data.interestYear}</td>
                <td>{data.totalInterest}</td>
                <td>{data.investedCapital}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>      
  )
}

export default App
