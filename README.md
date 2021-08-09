# React Dadan Extension Sample

A lightweight React Sample that shows how to checking, validating, and manipulating Google Dadan Extension with React.

## Install

```bash
npm install
```

## Usage

In your component import the following

```javascript
import React, { useState } from "react";
import { RecordVideoButton } from "react-dadan-extension";
```

In your component copy & paste the following

```javascript
function MyComponent() {
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

## Record Button Object Options

| Parameter         | Type      | Description                                                                                 |
| :---------------- | :-------- | :------------------------------------------------------------------------------------------ |
| `containerId`     | `string`  | **Required**. the container id that holds the button                                        |
| `title`           | `string`  | **Required**. button title                                                                  |
| `type`            | `string`  | **Required**. either record or select , else will show error                                |
| `buttonClass`     | `string`  | **Optional**. the default class , or your custom class                                      |
| `buttonStyle`     | `string`  | **Optional**. the default style , or your custom style as string                            |
| `showSvg`         | `boolean` | **Optional**. to show Svg icon in button                                                    |
| `showPreview`     | `boolean` | **Optional**. to show preview dialog of recorded video                                      |
| `copyToClipboard` | `boolean` | **Optional**. to notify user that video shared url was copied to clipboard as toast message |
| `returnControlId` | `string`  | **Optional**. the input text id which will holds sharedUrl of recorded video                |

## License

[MIT](https://choosealicense.com/licenses/mit/)
