import { CreateGoal } from "./components/createGoal";
import { Summary } from "./components/summary";
import { EmptyGoals } from "./components/emptyGoals";
import { useQuery } from "@tanstack/react-query";
import { getSummary } from "./http/getSummary";
import { Dialog } from "./components/ui/dialog";

export function App() {
  const { data } = useQuery({
    queryKey: ["summary"],
    queryFn: getSummary,
    staleTime: 1000 * 60,
  });

  return (
    <Dialog>
      {data?.total && data.total > 0 ? <Summary /> : <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  );
}
