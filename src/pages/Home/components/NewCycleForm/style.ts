import styled from 'styled-components'

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
