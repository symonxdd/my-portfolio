export const projects = [
  {
    slug: "epic-switcher",
    title: "Epic Switcher",
    description:
      "A fast, minimal desktop tool for switching between Epic Games accounts with a single click, eliminating repetitive logins and 2FA friction.",
    tags: ["Wails", "Go", "React", "Desktop App", "Windows", "Epic Games"],
    image: "/images/projects/epic-switcher.png",
    liveUrl: "https://epic-switcher.vercel.app",
    repoUrl: "https://github.com/symonxdd/epic-switcher",
    featured: true,
    details:
      "Epic Switcher is a lightweight Windows desktop application built with Wails, Go, and React. It allows users to quickly switch between Epic Games accounts without repeatedly logging in or dealing with 2FA prompts. The app focuses on speed, simplicity, and a clean UI. It features session management, customizable avatars, nickname editing, and a transparent overview of how account switching works. The project includes an automated release pipeline using GitHub Actions to build and distribute standalone executables.",
    motivation:
      "Epic Switcher started the same way most of my projects do: I, or people around me needed it.\n\nNot too long ago, my siblings and I used to play Fortnite together. At some point, I gave her my main Fortnite account since I wasn't playing much anymore, which meant I had to make a separate account to play with them.\n\nAside from Fortnite (which I don't really play anymore), I'm really into Rocket League, and that's on my main account — the one I gave her. So I was constantly switching between Epic Games accounts, and the official launcher makes that way slower and more annoying than it should be. Logging out, logging back in, re-entering credentials, and dealing with 2FA almost every time got frustrating fast.\n\nExisting solutions were either over-engineered, had outdated UIs, or were bundled with features I didn't want. I just wanted something fast, minimal, and one-click.\n\nSo I built Epic Switcher. Once it proved useful, I open-sourced it in case it helps others with the same problem.",
  },
  {
    slug: "piano-transcriber",
    title: "Piano Transcriber",
    description:
      "A Flutter mobile app that records piano audio and transcribes it into MIDI using on-device AI, with an immersive playback experience.",
    tags: ["Flutter", "Dart", "Mobile", "TFLite", "AI", "MIDI"],
    image: null,
    liveUrl: null,
    repoUrl: null,
    featured: true,
    details:
      "Built with Flutter, this app captures piano audio from the microphone and automatically transcribes it to MIDI using on-device machine learning via TFLite. Currently uses Spotify's Basic Pitch CNN model as a starting point, with plans to upgrade to more accurate architectures — such as Google's Onsets and Frames (a hybrid CNN-RNN model designed specifically for polyphonic piano transcription) or newer transformer-based models, which leverage self-attention mechanisms to better capture long-range musical context and temporal dependencies, yielding significantly higher transcription accuracy. Features include a live waveform display during recording, background isolate transcription, a full-featured MIDI/WAV player with mini and full-player views, a falling-notes visualizer with an interactive piano keyboard, audio format toggling, playback scrubbing, recordings management with favorites and groups, and SoundFont-based MIDI synthesis. Supports iOS and Android with light/dark theming. Work in progress — core transcription accuracy and premium features are actively being developed.",
  },
  {
    slug: "avd-launcher",
    title: "AVD Launcher",
    description:
      "A lightning-fast, ultra-lightweight desktop app for launching Android Virtual Devices without opening Android Studio.",
    tags: ["Wails", "Go", "Vue", "Desktop App", "Android Development", "Cross-platform"],
    image: null,
    liveUrl: "https://github.com/symonxdd/AVD-Launcher/releases/latest",
    repoUrl: "https://github.com/symonxdd/AVD-Launcher",
    featured: true,
    details:
      "AVD Launcher is a cross-platform desktop application built with Wails, Go, and Vue. It allows developers to quickly start and manage Android Virtual Devices without the overhead of Android Studio. Designed to be fast, portable, and minimal, it includes features like AVD listing, one-click launching, log viewing, and environment validation. The project also features a fully automated GitHub Actions release pipeline that builds and distributes native binaries for Windows, macOS, and Linux.",
  }
];

export const featuredProjects = projects.filter((p) => p.featured);
