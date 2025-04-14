import { createSignal } from "solid-js";
import { results } from "~/stores/results";
import { c } from "~/util/numbers";
import { THead } from "./shared";
import OneLineCalculator from "../OneLineCalc";

let shouldShowBanner = false;

export default function TopBanner() {
    const [showTopBanner, setShowTopBanner] = createSignal(shouldShowBanner);
    try {
        window.addEventListener('scroll', (e) => {
            const results = document.getElementById('results');
            if(!results) return;
            const showBanner = results.offsetTop < window.scrollY;
            if(shouldShowBanner !== showBanner) {
                setShowTopBanner(showBanner);
                shouldShowBanner = showBanner;
            }
        })
    } catch(err) {
        console.log("ssr");
    }
    const renderContent = () => {
        const res = results();
        if(!res.length) return '';
        const last = res[0];
        const {row, balance, info} = last;
        const {net, incometax, gross} = balance
        const {total, interest, invested} = info;
        return (
            <div class="px-4">
                <table class="w-full border-b-stone-300 border-b-2">
                    <THead />
                    <tbody>
                        <tr>
                            <td class="p-3">{row}</td>
                            <td class="text-green-400">{c(net)}</td>
                            <td class="text-red-400">{c(incometax)}</td>
                            <td class="text-sky-400">{c(gross)}</td>
                            <td class="text-yellow-400">{c(invested)}</td>
                            <td class="text-green-600">{c(interest)}</td>
                            <td class="text-green-700">{c(total)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
    return (
        <div
            class={`
                fixed
                top-0
                right-0
                w-full
                block
                bg-black
                ${showTopBanner()? '' : 'hidden'}
            `}
        >
            {renderContent()}
        </div>
    )
}
