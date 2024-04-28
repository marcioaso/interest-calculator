import { For, createSignal } from "solid-js";

const labelStyle = "text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white";

export default function NumberInputSelect({
    id,
    label,
    select,
    value: defaultValue,
    onKeyUp,
    onChange,
}) {
    const [values, setValues] = createSignal(defaultValue);
    const handleOptionClick = (selected) => {
        const newValues = {
            ...values(),
            selected,
        }
        setValues(newValues);
        if(onChange) onChange(newValues);
        if(onKeyUp) onKeyUp(newValues);
    }
    const handleInputChange = (e) => {
        const newValues = {
            ...values(),
            value: +e.target.value,
        }
        setValues(newValues);
        if(onChange) onChange(newValues);
        if(onKeyUp) onKeyUp(newValues);
    }

    return (
        <div class="flex mb-6 flex-col">
            <label for={id} class={labelStyle}>{label}</label>
            <div class="flex mb-6">
            <div class="relative w-full">
                <input value={values().value} 
                    { ...onKeyUp? {onKeyUp:handleInputChange}:{} }
                    { ...onChange? {onChange:handleInputChange}:{} }
                type="number" id={id} class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-s-lg border-e-gray-50 border-e-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-e-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" required />
            </div>
            <button id={`${label}dropdown-fiat-number-button`} data-dropdown-toggle={`${label}dropdown-fiat-number`} class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-e-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
               {select[values().selected].label}
            </button>
            <div id={`${label}dropdown-fiat-number`} class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                    {
                        <For each={select}>
                            {(option => (
                                <li onClick={() => handleOptionClick(option.id)}>
                                    <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                        <div class="inline-flex items-center">
                                            {option.label}
                                        </div>
                                    </button>
                                </li>
                            ))}
                        </For>
                    }
                </ul>
            </div>
            </div>
        </div>
    )
}