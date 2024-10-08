type PendingGoalsResponse = {
  id: string;
  title: string;
  desiredWeeklyFrequency: number;
  completionCount: number;
}[];

export async function getPendingGoals(): Promise<PendingGoalsResponse> {
  const response = await fetch("https://rstinformatica.tech/pending-goals");
  const data = await response.json();

  return data.pendingGoals;
}
