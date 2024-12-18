import { useState } from "react";
export default function UserInput() {
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
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial investment">INITIAL INVESTMENT</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleInputChange("initialInvestment", +event.target.value)
            }
            required
          />
        </p>

        <p>
          <label htmlFor="annual investment">ANNUAL INVESTMENT</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleInputChange("annualInvestment", +event.target.value)
            }
            required
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="expected return">EXPECTED RETURN</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleInputChange("expectedReturn", +event.target.value)
            }
            required
          />
        </p>

        <p>
          <label htmlFor="duration">DURATION</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(event) =>
              handleInputChange("duration", +event.target.value)
            }
            required
          />
        </p>
      </div>
    </section>
  );
}
