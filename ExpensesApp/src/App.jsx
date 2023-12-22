import { useState } from 'react'
import Header from "../components/Header"
import UserInput from '../components/UserInput'
import ResultTable from '../components/ResultTable';
import { calculateInvestmentResults } from './util/investment';

const intialInvestmentObj = {
  initialInvestment: 10000,
  annualInvestment: 300,
  expectedReturn: 5.5,
  duration: 12
}
let tableData = [];

function App() {
  const [investmentObj, setInvestmentObj] = useState(intialInvestmentObj);
  tableData = calculateInvestmentResults(investmentObj);
  
  function changeHandler(event){
    setInvestmentObj((prevObj) => {
      return {...prevObj, [event.target.id]: Number(event.target.value)};
    })
    
    
  }

  console.log(investmentObj);
  console.log(tableData);
  return (
    <div>
      <Header title='Investment Calculator'/>
      <div id="user-input" className='input-group'>        
        <UserInput onChange={changeHandler} type='number' id='initialInvestment' title='Initial Investment ($)' placeHolder={intialInvestmentObj.initialInvestment}/>
        <UserInput onChange={changeHandler} type='number' id='annualInvestment' title='Annual Investment ($)' placeHolder={intialInvestmentObj.annualInvestment}/>
        <UserInput onChange={changeHandler} type='number' id='expectedReturn' title='Expected Return (%)' placeHolder={intialInvestmentObj.expectedReturn}/>
        <UserInput onChange={changeHandler} type='number' id='duration' title='Duration (Years)' placeHolder={intialInvestmentObj.duration}/> 
      </div>      
      <ResultTable tableData={tableData}/>
    </div>      
  )
}

export default App
