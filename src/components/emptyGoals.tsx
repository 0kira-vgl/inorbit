import logo from "../assets/logoInOrbit.svg";
import letsStart from "../assets/letsStart.svg";
import { Plus } from "lucide-react";
import { Button } from "../components/ui/button";
import { DialogTrigger } from "../components/ui/dialog";

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit" className="select-none" />
      <img src={letsStart} alt="in.orbit" className="select-none" />

      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  );
}
