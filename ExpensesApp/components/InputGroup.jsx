import UserInput from "./UserInput"

export default function InputGroup(){
    return(
        <div id="user-input" className='input-group'>
            <UserInput type='text' id='initial-investment' title='Initial Investment' placeHolder='Enter Initial Investment'/>
            <UserInput type='number' id='annual-investment' title='Annual Investment' placeHolder='Enter Annual Investment'/>
            <UserInput type='number' id='expected-return' title='Expected Return' placeHolder='Enter Expected Return'/>
            <UserInput type='number' id='duration' title='Duration' placeHolder='Enter Duration in months'/>
        </div>
    )
}