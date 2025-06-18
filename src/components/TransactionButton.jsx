import { setTransactions, transactions } from "~/stores/results";
import { calculateForm } from "~/util/calculateForm";
import {absDecimals} from '~/util/numbers'


Number.prototype.fixed = function() {
    return `${absDecimals(this)}`
}

export default function TransactionButton({ index }) {
    const handleTransaction = row => {
        const apport = prompt(`Transaction on month ${row}`, 0)
        const newValue = [...transactions()];
        let apportNum = +apport;
        if(isNaN(apportNum)) apportNum = 0;
        newValue[index] = apportNum !== 0 ? {
            row,
            value: +apport,
        } : undefined
        setTransactions(newValue);
        calculateForm();
    }
    const computeButtonStyle = () => {
        const arr = transactions();
        if(!arr) return "p-2 text-white";
        const t = arr[index];
        if(!t || t.value === 0) return "p-2 text-white";
        if(t.value > 0) return 'p-2 text-green-700 text-xs';
        return 'p-2 text-red-700 text-xs';
    }
    const computeButtonText = () => {
        if (index === 0) return '∞';
        const arr = transactions();
        if (!arr) return '+';
        const t = arr[index];
        if (!t || t.value === 0) return '+';
        return t.value.fixed();
    }
    return (
        <button
            title="Add a custom installment here"
            onClick={() => handleTransaction(index)}
            class={computeButtonStyle()}
            disabled={index === 0}
        >
            {computeButtonText()}
        </button>
    );
}
