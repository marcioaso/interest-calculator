import { Title } from "@solidjs/meta";
import styles from "./Home.module.css";
import NumberInput from "~/components/NumberInput";
import { form, initialPeriodOptions, setForm } from "~/stores/home";
import Button from "~/components/Button";
import Info from "~/components/Info";

export default function HomeView() {
  const updateNumber = (field) => {
    return (e) => {
      const currentValue = form();
      setForm({
        ...currentValue,
        [field]: +e.target.value || 0,
      })
    }
  }
  const updatePeriod = (period) => {
    setForm({
      ...form(),
      period,
    })
  }
  return (
    <main class="text-white">
      <Title>Interest calculator</Title>
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Compound Insterest Calculator
      </h1>
      <div class={styles.App}>
        <header class={styles.header}>
          <form>
            <div class="grid gap-6 mb-6 md:grid-cols-4">
              <NumberInput
                min={0}
                value={form().initial}
                required
                label="Initial investment"
                onKeyUp={updateNumber("initial")}
              />
              <NumberInput
                min={0}
                value={form().installment}
                required
                label="Installment"
                onKeyUp={updateNumber("installment")}
              />
              <NumberInput
                min={0}
                value={form().interest}
                required
                label="Interest yearly %"
                suffix="%" 
                onKeyUp={updateNumber("interest")}
              /> 
              <NumberInput
                min={0}
                value={form().period}
                required
                label="Period"
                onKeyUp={updatePeriod}
                select={initialPeriodOptions}
              />
            </div>
          </form>
          <Info />
        </header>
      </div>
    </main>
  );
}
