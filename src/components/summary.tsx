import { CheckCircle2, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { DialogTrigger } from "./ui/dialog";
import inOrbit from "../assets/inOrbit.svg";
import { Progress, ProgressIndicator } from "./ui/progressBar";
import { Separator } from "./ui/separator";
import { OutlineButton } from "./ui/outlineButton";
import { useQuery } from "@tanstack/react-query";
import { getSummary } from "../http/getSummary";
import dayjs from "dayjs";
import ptBR from "dayjs/locale/pt-BR";

dayjs.locale(ptBR);
export function Summary() {
  const { data } = useQuery({
    queryKey: ["summary"],
    queryFn: getSummary,
    staleTime: 1000 * 60,
  });

  if (!data) {
    return null;
  }

  const firstDayOfWeek = dayjs().startOf("week").format("D MMM");
  const lestDayOfWeek = dayjs().endOf("week").format("D MMM");

  const completedPorcentage = Math.round((data.completed * 100) / data.total);

  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={inOrbit} alt="" />
          <span className="text-lg font-semibold capitalize">
            {firstDayOfWeek} - {lestDayOfWeek}
          </span>
        </div>

        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress value={8} max={15}>
          <ProgressIndicator style={{ width: `${completedPorcentage}%` }} />
        </Progress>

        <div className="flex items-center justify-between text-sm text-zinc-400">
          <span>
            Você completou{" "}
            <span className="text-zinc-100">{data?.completed}</span> de{" "}
            <span className="text-zinc-100">{data?.total}</span> metas nessa
            semana.
          </span>
          <span>{completedPorcentage}%</span>
        </div>
      </div>

      <Separator />

      <div className="flex flex-wrap gap-3">
        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Meditar
        </OutlineButton>

        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Praticar exercício
        </OutlineButton>

        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Nadar
        </OutlineButton>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Sua semana</h2>

        {Object.entries(data.goalsPerDay).map(([date, goals]) => {
          const weekDay = dayjs(date).format("dddd");
          const formattedDate = dayjs(date).format("DD[ de ]MMMM");

          return (
            <div key={date} className="flex flex-col gap-4">
              <h3 className="font-medium">
                <span className="capitalize">{weekDay}</span>{" "}
                <span className="text-zinc-400 text-xs">({formattedDate})</span>
              </h3>

              <ul className="flex flex-col gap-3">
                {goals.map((goal) => {
                  return (
                    <li key={goal.id} className="flex items-center gap-2">
                      <CheckCircle2 className=" size-4 text-pink-500" />
                      <span className="text-xs text-zinc-400">
                        Você completou “
                        <span className="text-zinc-100">{goal.title}</span>” às{" "}
                        <span className="text-zinc-100">08:13h</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
