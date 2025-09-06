# Button Component

Reusable button for Stayra design system.

## Variants
- **primary** – Indigo background, white text
- **outline** – Border, gray text
- **ghost** – Subtle gray text

## Usage

```jsx
import { Button } from "@/design-system/button";

<Button variant="primary">Click me</Button>
<Button variant="outline">Cancel</Button>
<Button variant="ghost">Skip</Button>

---

## 3) test it in `App.jsx`

```jsx
import React from "react";
import { Button } from "@/design-system/button";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-gray-100">
      <h1 className="text-3xl font-bold text-indigo-600">Stayra Design System</h1>
      <div className="flex gap-2">
        <Button variant="primary">Primary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    </div>
  );
}
