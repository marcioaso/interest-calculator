import { breakInstallments } from "~/stores/results";
import { calculateForm } from "~/util/calculateForm";
import { setBreakInstallments } from "~/stores/results";

export default function BreakButton({index, row}) {

    const handleBreak = row => {
        const newBreakInstallments = breakInstallments() === row ? -1 : row;
        setBreakInstallments(newBreakInstallments);
        calculateForm();
    }

    const computeButtonText = () => {
        const current = breakInstallments()
        switch(current) {
            case -1: return ' x ';
            case row: return ' ... ';
            default: {
                return row > current ? '' : ' x ';
            }
        }
    }

    return (
        <button
            onClick={() => handleBreak(row)}
        >
            {`${computeButtonText()}`}
        </button>
    );
}