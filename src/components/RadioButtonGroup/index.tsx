import React, { useCallback } from 'react';
import { ButtonContainer, GroupContainer } from './styles';

interface IRadioButtonGroupProps {
  buttons: string[];
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<'cpf' | 'cnpj'>>;
}

const RadioButtonGroup: React.FC<IRadioButtonGroupProps> = ({
  buttons,
  selectedOption,
  setSelectedOption,
}) => {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedOption(event.target.value as 'cpf' | 'cnpj');
    },
    [setSelectedOption],
  );

  return (
    <GroupContainer>
      {buttons.map(name => (
        <ButtonContainer key={name}>
          <input
            type="radio"
            value={name}
            id={name}
            checked={selectedOption === name}
            onChange={handleChange}
          />
          <label htmlFor={name}>{name}</label>
        </ButtonContainer>
      ))}
    </GroupContainer>
  );
};

export default RadioButtonGroup;
