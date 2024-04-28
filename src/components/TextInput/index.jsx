const labelStyle = "text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white";
const inputStyle = `
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

export default function NumberInput(props) {
    const {label,disabled} = props;
    const id = (props.label || '')+Math.random();
    return(
        <div class="mb-6">
            <label for={id} class={labelStyle}>{label}</label>
            <input 
                id={id}
                type="text"
                class={inputStyle}
                {...props}
            />
        </div>
    )
}