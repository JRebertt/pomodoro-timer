import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 3.5rem;
  }
`

const BaseInput = styled.input`
  height: 2.5rem;

  background: transparent;

  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-100']};

  font-weight: bold;
  font-size: 1.125rem;
  color: ${(props) => props.theme['gray-100']};

  padding: 0.5rem;

  &:focus {
    box-shadow: none;
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4.2rem;
`

export const FormContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;

  font-size: 1.125rem;
  font-weight: bold;

  color: ${(props) => props.theme['gray-100']};
`
export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background-color: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
  }
`
export const Separator = styled.div`
  width: 4rem;

  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};

  overflow: hidden;

  display: flex;
  justify-content: center;
`
export const StartCountdownButton = styled.button`
  width: 100%;

  border: none;
  border-radius: 8px;

  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`
