import { ControlType } from 'framer';
import type { ComponentProps } from 'react';
import { FramerProvider, applyFramerProperties } from '../../common/framer';
import { ListItem as _ListItem } from './ListItem';

export function ListItem(props: ComponentProps<typeof _ListItem>) {
  return (
    <FramerProvider>
      <_ListItem {...props} />
    </FramerProvider>
  );
}

applyFramerProperties(ListItem, {
  // Add your custom property infos here
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
    defaultValue: '지최',
  },
  secondaryTextSecond: {
    title: 'SecondaryTextSecond',
    type: ControlType.String,
    defaultValue: '2021-10-20',
  },
  commentCnt: {
    title: 'Title',
    type: ControlType.Number,
    defaultValue: 16,
  },
  likeCnt: {
    title: 'Title',
    type: ControlType.Number,
    defaultValue: 16,
  },
  hasBorder: {
    title: 'HasBorder',
    type: ControlType.Boolean,
    defaultValue: true,
  },
});