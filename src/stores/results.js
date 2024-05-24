import {createSignal} from 'solid-js';

export const [transactions, setTransactions] = createSignal([]);
export const [results, setResults] = createSignal([]);
export const [breakInstallments, setBreakInstallments] = createSignal(-1);