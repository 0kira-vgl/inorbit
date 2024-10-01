export async function createGoalCompletion(goalId: string) {
  await fetch("https://rstinformatica.tech/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      goalId,
    }),
  });
}
