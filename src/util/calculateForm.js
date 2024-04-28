import { transactions, setResults } from "~/stores/results";
import { calculator } from "./calculator";
import { form } from "~/stores/home";


export const calculateForm = () => {
    const values = form();
    const {
      period:rawPeriod,
      initial,
      interest,
      incomeTax,
      installment
    } = values;
    const periodMulti = rawPeriod.selected? 1 : 12;
    const table = calculator(
      initial,
      installment,
      interest,
      rawPeriod.value*periodMulti,
      incomeTax,
      transactions(),
    ).reverse();
    setResults(table)
  }