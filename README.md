# Awesome Toast

A lightweight, customizable toast notification for JavaScript, TypeScript, React, Vue, and Angular.

## Installation

```sh
# npm install awesome-universal-toast

Usage
js
Copy
Edit
import { Toast } from "awesome-toast";

Toast.show({
  text: "Hello World!",
  backgroundColor: "#007bff",
  duration: 3000,
  position: "top-right"
});

# Supported Frameworks
✅ JavaScript
✅ TypeScript
✅ React
✅ Vue
✅ Angular



# 1. Usage in JavaScript
After installing your package:

js
Copy
Edit
import { Toast } from "awesome-toast";

Toast.show({
  text: "Hello, World!",
  color: "#fff",
  backgroundColor: "#007bff",
  duration: 5000,
  position: "top-right"
});


# Usage in Vue
vue
Copy
Edit
<template>
  <button @click="showToast">Show Toast</button>
</template>

<script>
import { Toast } from "awesome-toast";

export default {
  methods: {
    showToast() {
      Toast.show({ text: "Hello Vue!", backgroundColor: "green" });
    }
  }
};
</script>


# Usage in Angular
ts
Copy
Edit
import { Component } from '@angular/core';
import { Toast } from 'awesome-toast';

@Component({
  selector: 'app-root',
  template: `<button (click)="showToast()">Show Toast</button>`,
})
export class AppComponent {
  showToast() {
    Toast.show({ text: 'Hello Angular!', backgroundColor: 'blue' });
  }
}