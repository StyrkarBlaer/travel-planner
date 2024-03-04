'use client'
import { useState } from 'react';

// TODO: Make this an actual thing, not just a constant list.
const options: string[] = ["New York, USA", "Paris, France", "Tokyo, Japan", "London, UK", "Berlin, Germany", "Sydney, Australia", "Rome, Italy", "Barcelona, Spain", "Toronto, Canada", "Amsterdam, Netherlands", "Dubai, UAE", "Bangkok, Thailand", "Singapore, Singapore", "Hong Kong, China", "Istanbul, Turkey", "Mumbai, India", "Mexico City, Mexico", "Cape Town, South Africa", "Rio de Janeiro, Brazil", "Buenos Aires, Argentina",];

// TODO: Refactor this entire file

const AutoCompleteInput: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (!value) {
      setSuggestions([]);
    } else {
      const filteredOptions = options.filter(option =>
        option.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredOptions);
    }
  };

  const handleSuggestionClick = (value: string) => {
    setInputValue(value);
    setSuggestions([]);
  };

  return (
    <div className="relative">
      <input
        type="text"
        id="location"
        name="location"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type to search..."
        required
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-md max-h-60 overflow-auto">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)} style={{ cursor: 'pointer' }}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoCompleteInput;