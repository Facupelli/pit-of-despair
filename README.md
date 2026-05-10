# The Pit of Despair

A cyberpunk-themed job application tracker that turns the job hunt into a darkly humorous, game-like experience.

Built with React, TypeScript, Vite, shadcn/ui, and Tailwind CSS v4, The Pit of Despair helps users track applications, monitor their “Anguish Index”, unlock grim achievements, and export a victory certificate when they finally land an offer.

## Live Demo

Try it here: https://pit-of-despair.vercel.app/

You can also preview different Anguish Index states by appending `?level=1` through `?level=6` to the URL.

Example:

```txt
https://pit-of-despair.vercel.app/?level=4
````

![pit-of-despair-example](https://res.cloudinary.com/dzjz8pe0y/image/upload/v1753712207/samples/the-pit-of-despair_rjne61.gif)

<div style="display:inline-flex; gap:12px; flex-wrap:wrap;">
   <img src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1753712381/samples/pit-of-despair-1_ynu4yb.png" width="360" alt="Static screenshot 1"/>
   <img src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1753712403/samples/pit-of-despair-2_bwppv5.png" width="360" alt="Static screenshot 2"/>
</div>

## Why I Built It

Job hunting can quickly become repetitive and discouraging: applications pile up, responses are inconsistent, and most trackers feel like another spreadsheet to maintain.

I built The Pit of Despair during the Boot.dev Hackathon to explore a different angle: what if a job application tracker felt less like admin work and more like a strange little game?

The goal was to combine a useful single-screen tracker with a strong visual identity, playful writing, local persistence, achievements, and interactive UI details.

## Features

* **Application tracking**: Add and manage job applications in a single-screen interface.
* **Anguish Index**: A dynamic score that reflects the emotional damage of your job search.
* **Progressive levels**: Unlock increasingly dramatic job-hunt misery ranks, from “Intern of Sorrow” to “VP of Void”.
* **Achievements**: Collect milestones based on rejections, ghostings, interviews, and offers.
* **Hit-rate sparkline**: Visualize interview success over time.
* **Preset demo states**: Load predefined scenarios with `?level=1` through `?level=6`.
* **Local persistence**: Data is stored in LocalStorage, so the app works without an account or backend.
* **Victory certificate**: Export a certificate when you finally escape the pit.

## Technical Notes

This project was built under hackathon constraints, so the focus was on shipping a polished, memorable experience rather than designing a long-term production architecture.

The main challenge was turning a simple job application tracker into a playful product with state management, animations, local persistence, achievements, visual feedback, and a cohesive cyberpunk interface.

Some implementation choices were intentionally lightweight:

* LocalStorage instead of a backend.
* Query parameters for demo presets.
* A single-screen layout to keep the experience focused.
* shadcn/ui and Tailwind CSS v4 for fast iteration on the visual system.

## Tech Stack

* **React**
* **TypeScript**
* **Vite**
* **shadcn/ui**
* **Tailwind CSS v4**
* **LocalStorage**

## Anguish Index Presets

The app includes six preset levels to make it easy to test different states without manually creating applications.

Use:

```txt
?level=1
?level=2
?level=3
?level=4
?level=5
?level=6
```

Example:

```txt
http://localhost:5173?level=3
```

Each level populates the app with sample applications and unlocks different UI states, achievements, and visual details.

## Running Locally

Clone the repository:

```bash
git clone https://github.com/Facupelli/pit-of-despair.git
cd pit-of-despair
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the app:

```txt
http://localhost:5173
```

## Available Scripts

```bash
npm run dev
npm run build
npm run preview
```

## Notes

The Pit of Despair was designed as a small, expressive hackathon project. It is intentionally playful, slightly dramatic, and built around the idea that even frustrating processes can become more bearable with good interaction design.

