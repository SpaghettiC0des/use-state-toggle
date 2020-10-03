# use-state-toggle

There a lot of similar libraries out there, but they only toggle `boolean` state. This hook allows you to toggle any state, by providing custom `truthy` or `falsy` values.

### Sample usage

**React Web**
```jsx
import React from 'react';
import {useStateToggle} from 'use-state-toggle';

const MyComponent = () => {
  const [switchState, toggleSwitch] = useStateToggle(false);

  const [didAccept, toggleDidAccept] = useStateToggle('no', {
    truthy: 'yes',
    falsy: 'no',
  });

  return (
    <div>
      <button onPress={toggleDidAccept}>
        Toggle Switch
      </button>
      <h1>Switch is on? {String(switchState)}</h1>

      <button onPress={toggleDidAccept}>
        Accept?
      </button>
      <h1>You said {didAccept}</h1>
    </div>
  );
};

export default MyComponent;
```

**React Native**
```tsx
import React from 'react';
import {useStateToggle} from 'use-state-toggle';
import {Text, SafeAreaView, Button} from 'react-native';

const UseToggleStateSample = () => {
  const [switchState, toggleSwitch] = useStateToggle(false);

  const [didAccept, toggleDidAccept] = useStateToggle('no', {
    truthy: 'yes',
    falsy: 'no',
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <Button onPress={toggleDidAccept} title="Accept?" />
      <Text>You said {didAccept}</Text>
      <Button onPress={toggleSwitch} title="Toggle Switch" />
      <Text>Switch is on? {String(switchState)}</Text>
    </SafeAreaView>
  );
};

export default UseToggleStateSample;

```

### License

`use-state-toggle` is MIT licensed, as found in the [LICENSE](/LICENSE) file.