# React Native Template – Themes & Tabs

A modern React Native + TypeScript starter template built with Expo and `expo-router`, featuring:

- ✅ Bottom tab navigation
- 🎨 Dynamic theme switching (supports multiple named themes)
- 📦 Centralized color and style management
- ⚛️ Ionicons and component-based structure
- 💡 Clean and scalable template for new apps

## 📁 Structure
# React Native Template – Themes & Tabs

A modern React Native + TypeScript starter template built with Expo and `expo-router`.

This template includes:

- ✅ Bottom tab navigation using `expo-router`
- 🎨 Theme switching with support for multiple named themes (e.g. `default`, `blackBlue`)
- 📦 Centralized color and style management via `Colors.ts` and `Themes.ts`
- ⚛️ Clean component architecture with Ionicons integration
- 📁 Easily extendable for scalable apps

---

## 🚀 Getting Started

```bash
pnpm install
pnpm start
```

To run on platforms:

- iOS: `pnpm ios`
- Android: `pnpm android`
- Web: `pnpm web`

---

## 🧩 Theme System

Themes are defined in `constants/Themes.ts` and managed globally using React context (`context/ThemeContext.tsx`).

Current themes:

- `default`: dark mode with gold accents
- `blackBlue`: dark blue variant

### Theme Usage

Colors are accessed via `getColors()` which returns the correct color set for the current theme.

Example:
```ts
import { getColors } from "@/constants/Colors";
const colors = getColors();
```

### Switching Themes

Inside the app, go to the first tab to open the theme selector:

1. Select a theme from the dropdown.
2. Press “Set Theme” to apply globally.

Themes are persistent and automatically update all components using `getColors()`.

---

## 🧱 File Structure Overview

```
pt-mobile/
├── app/
│   └── (tabs)/        # Tab screen routes
│       └── index.tsx  # Example with theme selector
├── components/        # Reusable UI components
├── context/
│   └── ThemeContext.tsx # Theme provider and hook
├── constants/
│   ├── Colors.ts      # Uses current theme to return usable color tokens
│   └── Themes.ts      # Defines all theme color variables
├── styles/            # Global styles and overrides
```

---

## 📦 Included Libraries

- [Expo Router](https://expo.github.io/router/)
- [React Navigation](https://reactnavigation.org/)
- [Ionicons](https://icons.expo.fyi/)
- [Tailwind-compatible HSL theming system]

---

## 📝 Customization

To add new themes:

1. Add the theme object to `Themes.ts`.
2. Update `ThemeType` in `ThemeContext.tsx`.
3. Update the dropdown options in `index.tsx`.

---

## 🛡️ License

MIT – use freely for commercial or personal projects.