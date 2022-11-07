import { MinutesAmountInput, FormContainer, TaskInput } from './style'
import { useFormContext } from 'react-hook-form'
import { useContext } from 'react'
import { CycleContext } from '../../../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CycleContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        disabled={!!activeCycle}
        placeholder="Dê um nome para o seu projeto"
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1"></option>
      </datalist>

      <label htmlFor="amountMinutes">durante</label>
      <MinutesAmountInput
        type="number"
        id="amountMinutes"
        placeholder="-00+"
        disabled={!!activeCycle}
        step={5}
        // max={60}
        min={5}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
