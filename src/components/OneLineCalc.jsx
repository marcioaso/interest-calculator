import { createSignal } from "solid-js";
const calcStyle = `
    flex
    bg-gray-50
    border
    border-gray-300
    text-gray-900
    text-sm rounded-lg
    focus:ring-blue-500
    focus:border-blue-500
    block w-full
    p-2.5 dark:bg-gray-700
    dark:border-gray-600
    dark:placeholder-gray-400
    dark:text-white
    dark:focus:ring-blue-500
    dark:focus:border-blue-500
`
const inputStyle = `
    flex-auto
    bg-transparent
    text-gray-400
    text-sm
    text-right
    p-2.5 dark:bg-gray-700
    dark:placeholder-gray-100
    dark:text-white
    outline-none
`

export default function OneLineCalculator() {
    const [calc, setCalc] = createSignal(0);
    const handleInputChange = (e) => {
        const { target: { value } } = e;
        try {
            const result = eval(value)
            setCalc(result)
        } catch (err) {
            setCalc("Err")
        }
    }
    return (
        <div class="w-full mb-3 md:grid-cols-2">
            <div class={calcStyle}>
                <label class="p-2.5">One line calculator</label>
                <input
                    class={inputStyle}
                    onBlur={handleInputChange}
                    placeholder="0"
                />
                <div class={`min-w-28 p-2.5 text-base dark:text-gray-400`}>= {`${calc()}`}</div>
            </div>
        </div>
    )
}