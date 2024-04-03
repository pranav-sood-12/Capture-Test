export const captureFormCompletion = (formId: string) => {
  const form = document.getElementById(formId) as HTMLFormElement;

  if (!form) {
    return;
  }

  let interactions = 0;

  form.addEventListener(
    "focus",
    () => {
      interactions += 1;
    },
    true
  );

  form.addEventListener("submit", () => {
    console.log(`Form ${formId} submitted with ${interactions} interactions.`);
    // Send data to server
  });
};
