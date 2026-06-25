/**
 * @typedef {Object} Project
 * @property {string} slug - Unique identifier for the project URL
 * @property {string} title - Project display name
 * @property {string} description - Short summary for cards
 * @property {string[]} tags - Technologies used
 * @property {boolean} featured - Whether to show on the landing page
 * @property {string} details - Long-form description for the details page
 * @property {string} [image] - (optional) path to thumbnail image
 * @property {string} [siteUrl] - (optional) Link to live website/demo
 * @property {string} [siteLabel] - (optional) Label for the site link (e.g. "Website")
 * @property {string} [downloadUrl] - (optional) Link to download or releases
 * @property {string} [downloadLabel] - (optional) Label for the download link (e.g. "Download")
 * @property {string} [repoUrl] - (optional) Link to GitHub repository
 * @property {string} [motivation] - (optional) "Why I Built This" section
 * @property {string} [motivationTitle] - (optional) Custom heading for the motivation section (defaults to "Why I Built This")
 * @property {string[]} [screenshots] - (optional) Gallery of additional screenshots for the details page
 * @property {boolean} [compactThumbnail] - (optional) Constrain the main image width on the details page (useful for portrait screenshots)
 */

export const projects = [
  {
    slug: "lm-plus-locator",
    title: "LM+ Locator",
    description: "A Flutter app for finding the nearest LM Plus office or mailbox in Belgium by GPS or address, with opening hours, distance, and one-tap directions. This app is not affiliated with LM Plus (Liberale Mutualiteit).",
    tags: ["Flutter", "Dart", "Mobile App", "Firebase", "Geolocation", "Android", "iOS"],
    featured: true,
    details: "LM+ Locator is a companion app for finding the nearest LM Plus (Liberale Mutualiteit) office or mailbox drop-off point in Belgium. Users can search by GPS or by typing an address with live autocomplete, then browse results sorted by distance with opening hours and an 'open now' status, and open any location directly in Maps with one tap.\n\nThe app is offline-first: the bundled office dataset and GPS search work with no internet connection, with an animated banner appearing when offline. It supports Dutch, French, German, and English (following the device language by default), light/dark theming, and an optional email/password account (via Firebase) that syncs saved offices to the cloud.\n\nBuilt with Flutter and Dart for a single Android/iOS codebase, using geolocator and geocoding for location handling, Nominatim (OpenStreetMap) for address search, Firebase Auth and Cloud Firestore for the optional account and favorites sync, and shared_preferences for local persistence. A Python pipeline in the repo scrapes and refreshes the bundled office dataset.\n\nThis app is not affiliated with LM Plus.",
    repoUrl: "https://github.com/symonxdd/lm-plus-locator",
    siteUrl: "https://symonxdd.github.io/lm-plus-locator/",
    siteLabel: "Docs",
  },
  {
    slug: "witness",
    title: "Witness",
    description: "A React Native app for Depole.io that helps people document online hate speech and connect with legal and mental-health support, built with a strong focus on data security, the subject of my bachelor's thesis.",
    tags: ["React Native", "TypeScript", "AWS Amplify", "AWS Cognito", "AWS AppSync", "AWS Lambda", "DynamoDB", "Mobile App", "Security Research"],
    featured: true,
    details: "Witness is a mobile application developed by Depole.io, a company building digital tools to combat online hate speech and toxic content. The app gives individuals a structured way to document incidents of online harassment, organize them into 'dossiers', and securely send those dossiers to the relevant authorities, such as the police or a school counselor, while also connecting users with legal and mental health support.\n\nI joined the Witness team for my bachelor's internship, working within an Agile/Scrum process managed through Jira. My contributions extended the existing AWS Amplify backend and included building a 'kiosk' system for the secure delivery of dossier reports to their respective institutions. The app is built with React Native and TypeScript on the frontend, with AWS Amplify (managed via the Amplify CLI) powering the backend: AWS Cognito handles authentication, AWS Lambda provides serverless compute, and an AWS AppSync GraphQL API connects to a DynamoDB data store.\n\nSecurity was the central theme of my work on this project, and the entire subject of my bachelor's thesis, 'Witness & Security'. The research evaluated the app's architecture and implementation against the OWASP Top 10 and the CIS Critical Security Controls (CIS 8), combining penetration testing and code audits to identify vulnerabilities, followed by data analysis and concrete recommendations to harden the application, covering areas such as authentication flows, API access control, and how sensitive incident data is stored and transmitted.",
    image: "/images/projects/witness/incidents.png",
    compactThumbnail: true,
    screenshots: [
      "/images/projects/witness/incidents.png",
      "/images/projects/witness/dossiers.png",
      "/images/projects/witness/dossier-details.png",
      "/images/projects/witness/help-support.png",
      "/images/projects/witness/login.png",
    ],
    motivationTitle: "A Note on Design & My Role",
    motivation: "It's worth noting that the UI and UX shown in these screenshots were directed primarily by Depole.io's product lead and a fellow developer on the team. My role focused on the backend architecture, AWS Amplify integration, and the security research described above, rather than the interface design.\n\nGiven more ownership over the design, I would have approached several flows differently, particularly simplifying navigation and reducing visual clutter, to make the app feel cleaner and more performant. That said, working within an existing design system and codebase was valuable in itself, and it sharpened my ability to reason about security within constraints I didn't fully control.",
  },
  {
    slug: "piano-transcriber",
    title: "Piano Transcriber",
    description: "A Flutter mobile app that records piano audio and transcribes it into MIDI using on-device AI, with an immersive playback experience.",
    tags: ["Flutter", "Dart", "Mobile", "TFLite", "AI", "MIDI"],
    featured: true,
    details: "Built with Flutter, this app captures piano audio from the microphone and automatically transcribes it to MIDI using on-device machine learning via TFLite. Currently uses Spotify's Basic Pitch CNN model as a starting point, with plans to upgrade to more accurate architectures, such as Google's Onsets and Frames (a hybrid CNN-RNN model designed specifically for polyphonic piano transcription) or newer transformer-based models, which leverage self-attention mechanisms to better capture long-range musical context and temporal dependencies, yielding significantly higher transcription accuracy. Features include a live waveform display during recording, background isolate transcription, a full-featured MIDI/WAV player with mini and full-player views, a falling-notes visualizer with an interactive piano keyboard, audio format toggling, playback scrubbing, recordings management with favorites and groups, and SoundFont-based MIDI synthesis. Supports iOS and Android with light/dark theming. Work in progress, core transcription accuracy and premium features are actively being developed.",
  },
  {
    slug: "epic-switcher",
    title: "Epic Switcher",
    description: "A fast, minimal desktop tool for switching between Epic Games accounts with a single click, eliminating repetitive logins and 2FA friction.",
    tags: ["Wails", "Go", "React", "Desktop App", "Windows", "Epic Games"],
    featured: true,
    details: "Epic Switcher is a lightweight Windows desktop application built with Wails, Go, and React. It allows users to quickly switch between Epic Games accounts without repeatedly logging in or dealing with 2FA prompts. The app focuses on speed, simplicity, and a clean UI. It features session management, customizable avatars, nickname editing, and a transparent overview of how account switching works. The project includes an automated release pipeline using GitHub Actions to build and distribute standalone executables.",
    image: "/images/projects/epic-switcher.png",
    siteUrl: "https://epic-switcher.vercel.app",
    siteLabel: "Website",
    repoUrl: "https://github.com/symonxdd/epic-switcher",
    downloadUrl: "https://github.com/symonxdd/epic-switcher/releases/latest",
    downloadLabel: "Download",
    motivation: "Epic Switcher started the same way most of my projects do: I, or people around me needed it.\n\nNot too long ago, my siblings and I used to play Fortnite together. At some point, I gave her my main Fortnite account since I wasn't playing much anymore, which meant I had to make a separate account to play with them.\n\nAside from Fortnite (which I don't really play anymore), I'm really into Rocket League, and that's on my main account, the one I gave her. So I was constantly switching between Epic Games accounts, and the official launcher makes that way slower and more annoying than it should be. Logging out, logging back in, re-entering credentials, and dealing with 2FA almost every time got frustrating fast.\n\nExisting solutions were either over-engineered, had outdated UIs, or were bundled with features I didn't want. I just wanted something fast, minimal, and one-click.\n\nSo I built Epic Switcher. Once it proved useful, I open-sourced it in case it helps others with the same problem.",
  },
  {
    slug: "avd-launcher",
    title: "AVD Launcher",
    description: "A lightning-fast, ultra-lightweight desktop app for launching Android Virtual Devices without opening Android Studio.",
    tags: ["Wails", "Go", "Vue", "Desktop App", "Android Development", "Cross-platform"],
    featured: true,
    details: "AVD Launcher is a cross-platform desktop application built with Wails, Go, and Vue. It allows developers to quickly start and manage Android Virtual Devices without the overhead of Android Studio. Designed to be fast, portable, and minimal, it includes features like AVD listing, one-click launching, log viewing, and environment validation. The project also features a fully automated GitHub Actions release pipeline that builds and distributes native binaries for Windows, macOS, and Linux.",
    image: "/images/projects/avd-launcher.png",
    motivation: "I built this project to solve a recurring frustration: quickly launching Android Virtual Devices (AVDs) without the overhead of opening Android Studio or relying on brittle, hard-to-maintain scripts. This need became especially clear during my college internship, where I frequently worked with AVDs and found the existing workflow unnecessarily time-consuming.\n\nTo address this, I created AVD Launcher, a lightweight tool designed to streamline the process and make emulator startup fast and straightforward.\n\nThis project also gave me the opportunity to explore new technologies. It was my first time working with Go and Wails, and I was particularly impressed by how effectively Wails bridges a modern frontend with Go’s powerful backend. The integration felt intuitive, allowing me to focus on building functionality rather than fighting the tooling.\n\nWhile there were challenges along the way, each one contributed to a deeper understanding of the stack and made the end result more rewarding. Overall, the experience reinforced my interest in building practical tools that improve everyday development workflows.",
    downloadUrl: "https://github.com/symonxdd/avd-launcher/releases/latest",
    downloadLabel: "Download",
    repoUrl: "https://github.com/symonxdd/avd-launcher",
  }
];

export const featuredProjects = projects.filter((p) => p.featured);
