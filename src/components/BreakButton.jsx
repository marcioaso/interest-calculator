import { breakInstallments } from "~/stores/results";
import { calculateForm } from "~/util/calculateForm";
import { setBreakInstallments } from "~/stores/results";

export default function BreakButton({index}) {

    const handleBreak = row => {
        const newBreakInstallments = breakInstallments() === row ? -1 : row;
        setBreakInstallments(newBreakInstallments);
        calculateForm();
    }

    const computeButtonText = () => {
        const current = breakInstallments()
        switch(current) {
            case -1: return ' x ';
            case index: return ' ... ';
            default: {
                return index > current ? '' : ' x ';
            }
        }
    }

    return (
        <button
            title="Stop adding installments here"
            onClick={() => handleBreak(index)}
        >
            {`${computeButtonText()}`}
        </button>
    );
}
