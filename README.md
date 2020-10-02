# use-state-toggle

There a lot of similar libraries out there, but they only toggle `boolean` state. This hook allows you to toggle any state, by providing custom `truthy` or `falsy` values.

### Sample usage

```jsx
import React from 'react';
import {useStateToggle} from 'use-state-toggle';

const MyComponent = () => {
  const [switch, toggleSwitch] = useStateToggle(false);

  const [didAccept, toggleDidAccept] = useStateToggle('no', {
    truthy: 'yes',
    falsy: 'no',
  });

  return (
    <div>
      <button onPress={toggleDidAccept}>
        Toggle Switch
      </button>
      <h1>Switch is on? {switch}</h1>

      <button onPress={toggleDidAccept}>
        Accept?
      </button>
      <h1>You said {didAccept}</h1>
    </div>
  );
};

export default MyComponent;
```

### License

`use-state-toggle` is MIT licensed, as found in the [LICENSE](/LICENSE) file.