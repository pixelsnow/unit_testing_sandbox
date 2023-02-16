import { useState } from 'react';
import Calculate from './Calculate'

export default function Calculator () {
  const [valueA, setValueA] = useState("0");
  const [operator, setOperator] = useState("+");
  const [valueB, setValueB] = useState("0");

  return (
    <div>
        <form >
            <label>First number:
                <input 
                    type="text" 
                    value={valueA}
                    onChange={(e) => setValueA(e.target.value)}
                    />
            </label>
            <label>Operator:
                <select 
                    value={operator} 
                    onChange={(e) => setOperator(e.target.value)}
                >
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
            </label>
            <label>Second number:
                <input 
                type="text" 
                value={valueB}
                onChange={(e) => setValueB(e.target.value)}
                />
            </label>
        </form>
        <h3>Output:</h3>
        <Calculate 
            A={valueA}
            B={valueB}
            op={operator} 
        />
    </div>
  )
}
