import { Dialog } from "./components/ui/dialog";
import { CreateGoal } from "./components/createGoal";
import { Summary } from "./components/summary";
// import { EmptyGoals } from "./components/emptyGoals";

export function App() {
  return (
    <Dialog>
      {/* <EmptyGoals /> */}
      <Summary />

      <CreateGoal />
    </Dialog>
  );
}
