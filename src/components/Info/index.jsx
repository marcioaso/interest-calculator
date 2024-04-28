import { For, createSignal } from "solid-js";
import { results } from "~/stores/results";
import TransactionButton from "../TransactionButton";
import { c } from "~/util/numbers";
import TopBanner from "./topBanner";
import { THead } from "./shared";


export default function Info() {
    
    return (
        <>
            <TopBanner />
            <div class="flex">
                <table id="results" class="flex-1">
                    <THead />
                    <tbody>
                        <For each={results()}>{(result,i) =>
                            <tr class="odd:bg-slate-900">
                                <td class="p-3">{result.row}</td>
                                <td class="text-green-400">{c(result.balance.net)}</td>
                                <td class="text-red-400">{c(result.balance.incometax)}</td>
                                <td class="text-sky-400">{c(result.balance.gross)}</td>
                                <td class="text-yellow-400">
                                    {c(result.info.invested)}
                                    <TransactionButton
                                        index={i()}
                                        result={result}
                                    />
                                </td>
                                <td class="text-green-600">{c(result.info.interest)}</td>
                                <td class="text-green-700">{c(result.info.total)}</td>
                            </tr>
                        }</For>
                    </tbody>
                </table>
            </div>
        </>
    );
}