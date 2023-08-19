import React, { useContext } from 'react';
import { Switch } from 'antd';

import { ThemeContext } from '../../App';

function Setting() {
  const { toggleTheme } = useContext(ThemeContext);

  return <Switch checkedChildren="DARK" unCheckedChildren="LIGHT" onClick={toggleTheme} />;
}

export default Setting;
