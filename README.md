# The Pit of Despair

The Pit of Despair is a cyberpunk-themed, single-screen job application tracker wrapped in a darkly humorous game-like interface. Built with React, TypeScript, Vite, and styled using shadcn/ui with Tailwind CSS v4, it transforms the grueling job-hunt process into an engaging, retro ASCII-console experience. Track your applications, watch your "Anguish Index" climb, earn grim "achievements," and export a victory certificate when you finally land an offer—all with a tongue-in-cheek nod to the absurdities of job hunting.

## Motivation

Job hunting can feel like falling into a pit of despair: endless applications, ghosted emails, and soul-crushing rejections. This app was born from the desire to inject some humor and interactivity into the process, making the act of tracking job applications feel less like a chore and more like a darkly funny game. By gamifying the grind with ASCII art, snarky UI elements, and easter eggs, The Pit of Despair aims to bring a bit of levity to the job search struggle.

## Development Notes

This project was created for the Boot.dev Hackathon, where time was of the essence. I'm not particularly proud of the code—it’s a bit rough around the edges due to the tight deadline. Many ambitious ideas, like a more robust leaderboard or enhanced sound effects, had to be shelved. Nevertheless, building The Pit of Despair was a blast, and the process of blending dark humor with a functional job tracker was incredibly fun.

## Showcase: Anguish Index Level Presets

The Pit of Despair features six distinct Anguish Index levels, each reflecting a deeper stage of job-hunting misery. To help the Boot.dev Hackathon jury experience all levels without grinding through applications, we've provided presets accessible via search query parameters. Use the links below to instantly load the app with a predefined Anguish Index corresponding to each level:
- Intern of Sorrow (0-9): The starting point, where hope still flickers faintly. Expect a low Anguish Index with minimal rejections.
- Middle Manager of Misery (10-24): A few ghostings and rejections pile up, hinting at the grind ahead.
- Senior Suffering Engineer (25-49): The despair deepens with more applications buried in The Pit.
- Lead Loser (50-74): A seasoned veteran of rejection, with a growing tombstone collection.
- Principal Pain-haver (75-99): Nearing the abyss, with frequent ghostings and interview fatigue.
- VP of Void (100+): The pinnacle of despair, complete with subtle screen border glitches for maximum cyberpunk gloom.

To use these presets, ensure the app is running locally (see Installation below) and click the links or append ?level=${levelnumber} to the URL (e.g., http://localhost:5173?level=1). Each preset populates The Pit with sample applications to simulate the corresponding Anguish Index level, showcasing the UI, animations, and level-specific features.

## Features

- **Anguish Index**: A dynamic score reflecting your job-hunt misery, complete with sarcastic level names like "Intern of Sorrow" or "VP of Void."
- **The Pit**: A scrollable, filterable tombstone list of your job applications.
- **Submit Button**: A modal for adding new applications, with randomized, sadistic button labels.
- **Hit-Rate Sparkline**: An chart showing your interview success rate.
- **Achievements**: Collect milestones like your first rejection or surviving three interview rounds only to be rejected.

## Prerequisites

To run The Pit of Despair locally, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v9 or higher) or **yarn** (v1.22 or higher)
- A modern web browser (Chrome, Firefox, Edge, etc.)

## Installation

Follow these steps to get the project up and running in under 5 minutes:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Facupelli/pit-of-despair.git
   cd pit-of-despair
   ```

2. **Install Dependencies**

   Using npm:
   ```bash
   npm install
   ```

   Or using yarn:
   ```bash
   yarn install
   ```

3. **Run the Development Server**

   Start the Vite development server with:
   ```bash
   npm run dev
   ```

   Or with yarn:
   ```bash
   yarn dev
   ```

4. **Open the App**

   Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal). The Pit of Despair should now be running!

## Available Scripts

In the project directory, you can run:

- `npm run dev` or `yarn dev`: Starts the development server.
- `npm run build` or `yarn build`: Builds the app for production to the `dist` folder.
- `npm run preview` or `yarn preview`: Previews the production build locally.

## Tech Stack

- **React**: For building the interactive UI.
- **TypeScript**: For type-safe development.
- **Vite**: For fast development and optimized builds.
- **shadcn/ui**: For customizable, Tailwind CSS v4-based UI components.
- **Tailwind CSS v4**: For rapid, utility-first styling with a cyberpunk aesthetic.

## Contributing

Feel like adding more grim humor or features to The Pit? Contributions are welcome! Please:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.


Welcome to The Pit of Despair—may your Anguish Index stay low, and your offers come quick!
