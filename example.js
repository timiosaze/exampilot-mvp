import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Or directly provide your key
});

const response = await client.responses.create({
  model: "gpt-4.1-mini",
  input:
    "You are a CELPIP speaking examiner. Evaluate the following transcript and pronunciation data. Grade each of the following: Content/Coherence, Vocabulary, Listenability, Task Fulfillment (1–12 scale) The Question is Talk about a time when something did not happen the way you first expected. Maybe you can talk about something that did not happen according to plan when you were working on a project, or when you were trying to accomplish something. At first, how did you expect things to happen, how did they actually happen, and what was your response?, While the Answer is I used to think our product launch would be a straight line: finish the features by Friday, record a quick demo on Monday, and push the marketing site live by midweek. Instead, the very first user test derailed the plan. Our checkout flow broke when someone tried to buy from a phone with low signal, and the video recordings were full of tiny pauses that made the demo look slow. At first I felt annoyed, because the timeline was carefully negotiated with stakeholders. Then I reframed it as data. We paused the launch, recreated the weak‑signal conditions, and instrumented the flow to capture retries and error states. The team simplified the steps, added a graceful offline queue, and trimmed the demo to show outcomes before options. A week later, the second test ran clean. The lesson I carried forward was simple: plans are guesses; prototypes are questions; and honest tests are answers. Now I expect detours, and I budget for them. Give me the result only in an object format",
});

console.log(response.output_text);
const data = response.output_text;
console.log(JSON.parse(data)["Vocabulary"]);
