# Easy Chronometer JS

## Description

This is a small project for creating chronometers with JS

## Usage

```html
<div id="chronometer"></div>
```

```javascript
const element = document.getElementById("chronometer");
const chronometer = new Chronometer(element);

chronometer.start();
```

## Available functions

- `chronometer.start()`
- `chronometer.pause()`
- `chronometer.resume()`
- `chronometer.restart()`