import { For } from "solid-js";
import { results } from "~/stores/results";
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
Number.prototype.c = function() { return formatter.format(this) }

export default function Info() {
    return (
        <div class="flex">
            <table class="flex-1">
                <thead>
                    <tr class="bg-slate-700">
                        <td class="p-3">Month</td>
                        <td class="bg-green-700">Net</td>
                        <td class="bg-red-700">Tax</td>
                        <td class="bg-sky-700">Gross</td>
                        <td>Invested</td>
                        <td>Interest</td>
                        <td>Total</td>
                    </tr>
                </thead>
                <tbody>
                    <For each={results()}>{(result,i) =>
                        <tr class="odd:bg-slate-900">
                            <td class="p-3">{result.row}</td>
                            <td class="text-green-400">{result.balance.net.c()}</td>
                            <td class="text-red-400">{result.balance.incometax.c()}</td>
                            <td class="text-sky-400">{result.balance.gross.c()}</td>
                            <td>{result.info.invested.c()}</td>
                            <td>{result.info.interest.c()}</td>
                            <td>{result.info.total.c()}</td>
                        </tr>
                    }</For>
                </tbody>
            </table>
        </div>
    );
}