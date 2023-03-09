<a href="https://www.linkedin.com/in/kristiyan-velkov-763130b3/" target="_blank">
    <img src="https://drive.google.com/uc?export=view&id=1CaHw3OczzvfSAnF2FeU9HH3EruqRDT0q" alt="Morewell logo" title="Morewell" align="right" />
</a>

# dependency-exists

[![Follow me](https://img.shields.io/badge/sponsors-99+-orange.svg)](https://github.com/christiyan14) [![Sponsors](https://img.shields.io/badge/Follow-120-blue?logo=github&style=social.svg)](https://github.com/christiyan14) [![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/) [![Node Version](https://img.shields.io/badge/node-%3E%3D%2014.0.4-brightgreen.svg)](https://nodejs.org/en/)

<a href="https://www.linkedin.com/in/kristiyan-velkov-763130b3/" target="_blank">
    <img src="https://drive.google.com/uc?export=view&id=1Cpz3hVjXUwOiizKtVfTSZqTIwD6I3oB5"  alt="replace-styles"/>
</a>

**Checks if an npm package exists in package.json dependencies. You can also provide a nice terminal message which can be customized as you like.**

You can select where to search the npm package in package.json dependencies (by default is all of them):

- **dependencies**
- **devDependencies**
- **peerDependencies**

---

## Table of contents

- [Installation 🦾](#installation)
- [How to Use? 💻](#how-to-use)
- [Developer Support 🔗 ](#developer-support)
- [Support my work ❤️ ](#support-my-work)

---

## Installation

- Via yarn:

```code
yarn add -D dependency-exists
```

- Via npm:

```code
npm install dependency-exists --save-dev
```

## How to use?

#### API

| Method                         | Usage                                                                                                                                                  |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **dependencyExists()**         | Еasy to use a method that will return a boolean value if npm package exists in package.json dependecies. Option to select specific dependecies scheck. |
| **dependencyExistsWithText()** | Will return a boolean value if the npm package exists. Also will provide a nice terminal message which can be customized as you like.                  |

---

1. **dependencyExists()**

| Properties          | Desrciption                                     | Type               |
| ------------------- | ----------------------------------------------- | ------------------ |
| packageName         | npm package name                                | string             |
| dependenciesConfig? | Search in specific dependencies in package.json | DependenciesConfig |

```js
interface DependenciesConfig {
  dependencies: boolean;
  devDependencies: boolean;
  peerDependencies: boolean;
}
```

```js
function dependencyExists(packageName: string, dependenciesConfig: DependenciesConfig = {
        dependencies: true,
        devDependencies: true,
        peerDependencies: true
    }): boolean;

```

- **Default**:
  By default accepts a string and returns a boolean value. Search in all pakage.json file dependencies:
  - **dependencies**
  - **devDependencies**
  - **peerDependencies**

```js
import { dependencyExists } from "@kv/dependency-exists";

if (dependencyExists("some-npm-package-name")) {
  //=> true
} else {
  //=> false
}
```

- **With dependenciesConfig**
  If you want to search for specific npm package in specific dependency, you can provide config:

  ```js
  import { dependencyExists } from "@kv/dependency-exists";

  if (
    dependencyExists("some-npm-package-name", {
      dependencies: false,
      devDependencies: true, // Will search only in devDependencies
      peerDependencies: false,
    })
  ) {
    //=> true if the package exists in devDependecies
  } else {
    //=> false if the package NOT exists in devDependecies
  }
  ```

---

2. **dependencyExistsWithText() method**

```js
function DependencyExistsWithTextOptions(packageName: string, options: DependencyExistsWithTextOptions): boolean;
```

- **Info:** Easy to use fully customizable method for checking if the npm package exists. Coming with default terminal response. The message in the console (color, text ) can be changed to whatever value you want.

| Properties  | Desrciption                     | Type                            |
| ----------- | ------------------------------- | ------------------------------- |
| packageName | npm package name                | string                          |
| options     | Custamizable terminal response. | DependencyExistsWithTextOptions |

```js

export enum DefaultColorsEnum {
    success = "#008000",
    error = "#DC143C",
    warn = "#FFD700",
    info = "#00FFFF",
}

export interface DependencyExistsWithTextOptions {
    success: DependencyExistsWithTextOption;
    error: DependencyExistsWithTextOption;
}

interface DependencyExistsWithTextOption {
    color?: string | DefaultColorsEnum.success | DefaultColorsEnum.error | DefaultColorsEnum.info | DefaultColorsEnum.warn,
    text: string,
    warn?: TextOptionsStructure;
    info?: TextOptionsStructure;
}

interface TextOptionsStructure {
    color?: string | DefaultColorsEnum.success | DefaultColorsEnum.error | DefaultColorsEnum.info | DefaultColorsEnum.warn;
    text?: string;
}

// Example options types

 success: {
   text: "string",
   color?: "string",
    warn?: {
      color?: "string",
      text?: "string",
    },
    info?: {
      color?: "string",
      text?: "string",
    },
  },
  error: {
   text: "string",
   color?: "string",
    warn?: {
      color?: "string",
      text?: "string",
    },
    info?: {
      color?: "string",
      text?: "string",
    },
```

```js
import { dependencyExistsWithText } from "@kv/dependency-exists";

dependencyExistsWithText("some-npm-package-name", {
  success: {
    color: "#ffffff", // string of terminal emulators supported hex color
    text: "npm package exists!", // string
    warn: {
      color: "#DEADED", // string of terminal emulators supported hex color
      text: "Some exists warning text.", // string
    },
    info: {
      color: "#00cafc", // string of terminal emulators supported hex color
      text: "Some exists info text!", // string
    },
  },
  error: {
    color: "#ffffff", // string of terminal emulators supported hex color
    text: "Example text: npm package NOT exist!", // string
    warn: {
      color: "#DEADED", // string of terminal emulators supported hex color
      text: "Some exists warning text.", // string
    },
    info: {
      color: "#00cafc", // string of terminal emulators supported hex color
      text: "Some exists info text!", // string
    },
  },
});
```

## Examples:

## Developer Support:

- If you saw some issue/bug 🐛 related to the specific release version.
- If you want some new feature or change to be added/implemented. 😊

Please, contact the creator of the **replace-styles**, so he will be able to fix or improve it:

**Kristiyan Velkov**

**Email:** christiyanweb@gmail.com

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kristiyan-velkov-763130b3/)

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/christiyan14)

## Support my work

If you like my work and want to support me to work hard, please donate via:

| <a href="https://revolut.me/kristiyanvelkov" title="Link to Revolut">Revolut</a>                                                                                                                           | <a href="https://www.buymeacoffee.com/kristiyanVelkov" title="Link to Buy me a coffee">Buy me a coffee</a>                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a href="https://revolut.me/kristiyanvelkov" target="_blank"><img src="https://drive.google.com/uc?export=view&id=1W9nlJfo6kTpf-nwCzo-8vJWqq7yW-9oB" width="200px"  alt="Krisityan Velkov - Revolut"/></a> | <a href="https://www.buymeacoffee.com/kristiyanVelkov" style="background:red,height='500px'"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=kristiyanVelkov&button_colour=000000&font_colour=ffffff&font_family=Lato&outline_colour=ffffff&coffee_colour=FFDD00" width="200px"/></a> |

Thanks a bunch for supporting me! It means a LOT 😍

---

Copyright ©️2023. All rights reserved.
