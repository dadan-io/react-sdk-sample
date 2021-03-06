# React Dadan SDK Sample

A lightweight React app that shows how to use [react-dadan-sdk](https://www.npmjs.com/package/react-dadan-sdk) package , which used for checking, validating, and manipulating [Google Dadan Extension](https://haal.link.sa/onboarding/download) with React.

## Install

```bash
npm install
```

## Usage

In App.js we import the following

```javascript
import React, { useState } from "react";
import { RecordVideoButton } from "react-dadan-sdk";
```

In App.js we add RecordVideoButton component the following

```jsx
function App() {
  const [videos, setVideos] = useState([]);
  return (
    <>
      <RecordVideoButton
        showSvg={true}
        title="Select Video"
        copyToClipboard={true}
        showPreview={true}
        type="select"
        buttonClass="dd__record__button__default__class"
        buttonStyle={{}}
        onFailure={handleResponse}
        onSuccess={handleResponse}
      />
    </>
  );
}
```

the handleResponse function , is a callback function which accept object with three parameters

```javascript
function handleResponse({ success, data, message }) {
  if (success) {
    // only false when user close extension
    if (data) {
      // represnts the selected videos , or recorded video object after stop recording
      setVideos(data);
    }
  } else {
    setVideos([]);
    console.error(message); //User Closed Extension
  }
}
```

## Record Button Props

| Parameter         | Type      | Description                                                                                 |
| :---------------- | :-------- | :------------------------------------------------------------------------------------------ |
| `type`            | `string`  | **Required**. either record or select , else will show error                                |
| `title`           | `string`  | **Optional**. button title                                                                  |
| `buttonClass`     | `string`  | **Optional**. the default class , or your custom class                                      |
| `buttonStyle`     | `object`  | **Optional**. the default style , or your custom style as string                            |
| `showSvg`         | `boolean` | **Optional**. to show Svg icon in button                                                    |
| `showPreview`     | `boolean` | **Optional**. to show preview dialog of recorded video                                      |
| `copyToClipboard` | `boolean` | **Optional**. to notify user that video shared url was copied to clipboard as toast message |

## License

[MIT](https://choosealicense.com/licenses/mit/)
