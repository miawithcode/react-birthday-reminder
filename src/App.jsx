import { useState } from "react";
import {birthdayPeople} from "./data";
import List from "./components/List";

function App() {
  const [people, setPeople] = useState(birthdayPeople);
  return (
    <main>
      <section>
        <h2>{people.length} birthdays today</h2>
      </section>
      <List people={people} />
      <button type="button" onClick={() => setPeople([])}>Clear All</button>
    </main>
  )
}
export default App