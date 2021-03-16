import { createSignal, onMount } from "solid-js";
import { render, For } from "solid-js/web";
const n1 = "a",
  n2 = "b",
  n3 = "c",
  n4 = "d";
const [list, setList] = createSignal([n1, n2, n3, n4]);

const HelloMessage = (props: { name: string }) => {
  const Child = (props: { ref: HTMLDivElement }) => <div ref={props.ref} textContent="child" />;

  const Parent = () => {
    let ref: HTMLDivElement;
    onMount(() => {
      console.log(ref);
    })
    return <Child ref={ref} />;
  };

  return <div>
    <For each={list()} children={(item: string) => <div>Hello {props.name} {item}</div>}>
    </For>
    <Parent></Parent>
  </div>
}

render(() => <HelloMessage name="Taylor" />, document.getElementById("hello-example"));