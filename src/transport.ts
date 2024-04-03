
export async function transport(eventType: string, data: any) {
  const createEventMutation = `
  mutation CreateEvent($input: EventInput!) {
    createEvent(input: $input) {
      id
      type
      userID
      campaignID
      time
    }
  }
`;

const variables = {
  input: {
    userId: "5df6793d-4933-4cc4-a556-9be520894fd3",
    campaignId: "b92e934f-663b-49ee-864c-4fbf8a087341",
    type: "click"
  }
};

const apiUrl = "http://localhost:1323/query";

const body = JSON.stringify({
  query: createEventMutation,
  variables: variables
});
console.log(body);

try {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body
  });

  console.log(response.json());

  if (response.status !== 200) {
    throw new Error("Failed to send data to server.");
  }
} catch (error) {
  console.error("Error sending event:", error);
}

}
