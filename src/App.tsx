import { useState } from 'react'
import './App.css'
import Header from './components/Header.tsx'
import UserInput from './components/UserInput.tsx'
import Results from './components/Results.tsx'

function App() {
  const [userInput, setUserInput] = useState({
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 10,
    });

  function handleInputChange(inputIdentifier: string, newValue: number) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

return (
  <>
   <Header />
   <UserInput userInput={userInput} onInputChange={handleInputChange} />
   <Results input={userInput} />
  </>
);
}

export default App;
