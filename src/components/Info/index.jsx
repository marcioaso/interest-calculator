import { form } from "~/stores/home";

export default function Info() {
    return (<div>
        <div>{form().initial}</div>
        <div>{form().installment}</div>
        <div>{form().interest}</div>
        <div>{form().period.value} {form().period.selected}</div>
    </div>)
}