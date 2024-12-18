interface UserInputProps {
  onInputChange: (field: string, value: number) => void;
  userInput: {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
  };
}

export default function UserInput({userInput, onInputChange}: UserInputProps) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial investment">INITIAL INVESTMENT</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(event) =>
              onInputChange("initialInvestment", +event.target.value)
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
              onInputChange("annualInvestment", +event.target.value)
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
              onInputChange("expectedReturn", +event.target.value)
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
              onInputChange("duration", +event.target.value)
            }
            required
          />
        </p>
      </div>
    </section>
  );
}
