import { ControlType } from 'framer';
import type { ComponentProps } from 'react';
import { FramerProvider, applyFramerProperties } from '../../common/framer';
import { ListItem as _ListItem } from './ListItem';

export function ListItem({ rightAddon, ...props }: ComponentProps<typeof _ListItem> & { rightAddon: JSX.Element[] }) {
  if (!rightAddon.length) {
    return (
      <FramerProvider>
        <_ListItem {...props} />
      </FramerProvider>
    );
  }

  return (
    <FramerProvider>
      <_ListItem rightAddon={rightAddon} {...props}></_ListItem>
    </FramerProvider>
  );
}

applyFramerProperties(ListItem, {
  title: {
    title: 'Title',
    type: ControlType.String,
    defaultValue: '지최 is Babo',
  },
  thumbnailSrc: {
    title: 'ThumbnailSrc',
    type: ControlType.String,
    defaultValue: 'https://picsum.photos/536/354',
  },
  secondaryTextFirst: {
    title: 'SecondaryTextFirst',
    type: ControlType.String,
    defaultValue: '2021.10.20',
  },
  secondaryTextSecond: {
    title: 'SecondaryTextSecond',
    type: ControlType.String,
    defaultValue: '지최',
  },
  hasBorder: {
    title: 'HasBorder',
    type: ControlType.Boolean,
    defaultValue: true,
  },
  rightAddon: {
    title: 'RightAddon',
    type: ControlType.ComponentInstance,
  },
  onClick: {
    title: 'OnClick',
    type: ControlType.EventHandler,
  },
});
