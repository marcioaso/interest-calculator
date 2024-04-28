import {createSignal} from 'solid-js';
export const initialPeriodOptions = [
    { id: 0, label: "Years" },
    { id: 1, label: "Months" }
]

export const initialState = {
    initial: 0,
    installment: 0,
    interest: 0,
    period: {
        value: 0,
        selected: 0,
    }
}

export const [form, setForm] = createSignal(initialState);