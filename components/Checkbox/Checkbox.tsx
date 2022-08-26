import React, {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import {CheckboxStyles as CBS} from './CheckboxStyles';

interface iToggleCheckbox {
  (id: string): void;
}

interface iCheckboxProps {
  item: {
    id: string;
    title: string;
    checked: boolean;
  };
  toggleCheckbox: iToggleCheckbox;
}

export default function CheckBox({
  item: {id, title, checked},
  toggleCheckbox,
}: iCheckboxProps) {
  const [checkboxState, setCheckboxState] = useState(checked);

  return (
    <BouncyCheckbox
      disableBuiltInState={true}
      text={title}
      isChecked={checkboxState}
      onPress={() => {
        toggleCheckbox(id);
        setCheckboxState(() => !checkboxState);
      }}
      size={18}
      style={CBS.itemContainer}
      iconStyle={CBS.iconOuter}
      textStyle={CBS.title}
      innerIconStyle={CBS.iconInner}
      fillColor="#FFD615"
      iconComponent={<></>}
    />
  );
}
