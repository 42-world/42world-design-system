import { ControlType } from 'framer';
import { applyFramerProperties } from '../../common/framer';
import { themeProperty } from '../../common/property';
import { SortSelector } from './SortSelector';

applyFramerProperties(SortSelector, {
  theme: themeProperty,
  selectedIndex: {
    title: 'SelectedIndex',
    type: ControlType.Number,
    displayStepper: true,
    defaultValue: 0,
    min: 0,
  },
  list: {
    title: 'List',
    type: ControlType.Array,
    control: {
      type: ControlType.Object,
      controls: {
        text: {
          type: ControlType.String,
        },
        link: {
          type: ControlType.Link,
        },
      },
    },
    defaultValue: [{ text: 'sort1' }, { text: 'sort2' }, { text: 'sort3' }],
  },
  onClick: {
    title: 'onClick',
    type: ControlType.EventHandler,
  },
});
