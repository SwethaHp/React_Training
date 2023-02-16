import { SubRoot1 } from "./SuperComponent/SubRoot1";
import { SubRoot2 } from "./SuperComponent/SubRoot2";
import { SubRoot3 } from "./SuperComponent/SubRoot3";
import { SubRoot4 } from "./SuperComponent/SubRoot4";
import { SubRoot5 } from "./SuperComponent/SubRoot5";

function App() {
  return (
    <>
      <SubRoot1 name1="Invoke SubRoot1"></SubRoot1>
      <SubRoot2 name="Invoke SubRoot2 function"></SubRoot2>
      <SubRoot3 name="Invoke SubRoot3 function"></SubRoot3>
      <SubRoot4 name4="Invoke SubRoot4 function"></SubRoot4>
      <SubRoot5 name="Invoke SubRoot5 function"></SubRoot5>
    </>
  );
}

export default App;
