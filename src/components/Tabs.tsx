import { css } from '@emotion/css';
import { AnimatePresence, motion } from 'framer-motion';
import React, { ReactChild, useState } from 'react';
import { tokens } from '../tokens';
import { Text } from '../typography/Text';

type Props = {
  label: string[];
  children: ReactChild[];
  align: 'left' | 'center';
  theme: 'dark' | 'light';
};

export function Tabs({ label, children, align, theme }: Props) {
  const [selectedTab, setSelectedTab] = useState(label[0]);

  const tabIndex = label.indexOf(selectedTab);

  return (
    <div className={ContainerStyle(theme)}>
      <div className={NavigationStyle(theme)}>
        <ul className={ListContainerStyle(align)}>
          {label.map((item, index) => (
            <div
              key={index}
              className={`${ListItemStyle(align, theme)} ${item === selectedTab ? 'selected' : ''}`}
              onClick={() => setSelectedTab(item)}
            >
              <Text
                align="left"
                color={item === selectedTab ? 'grey_70' : 'grey_40'}
                size="Body1"
                theme={theme}
                text={`${item}`}
              />

              {item === selectedTab ? <motion.div className={UnderlineStyle(theme)} layoutId="underline" /> : null}
            </div>
          ))}
        </ul>
      </div>
      <section>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectedTab ? selectedTab : 'empty'}
            initial={{ y: 10, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={ChildrenContainer}
          >
            {children[tabIndex]}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}

const ChildrenContainer = css`
  & > div {
    width: 100% !important;
  }
`;

const ListContainerStyle = (align: Props['align']) => css`
  display: flex;
  ${align === 'center' ? 'width: 100%;' : null}
  gap: 32px;
`;

const ContainerStyle = (theme: Props['theme']) => css`
  border-radius: 10px;
  background: ${theme === 'light' ? tokens.color.grey_5_light : tokens.color.grey_5_dark};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const NavigationStyle = (theme: Props['theme']) => css`
  /* padding: 4px 4px 0; */
  overflow-x: scroll;
  overflow-y: hidden;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 1px solid ${theme === 'light' ? tokens.color.grey_30_light : tokens.color.grey_30_dark};
  height: 56px;
  display: flex;

  & ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
    height: 100%;
  }
`;

const UnderlineStyle = (theme: Props['theme']) => css`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 3px;
  border-radius: 2px;
  background: ${theme === 'light' ? tokens.color.grey_70_light : tokens.color.grey_70_dark};
`;

const ListItemStyle = (align: Props['align'], theme: Props['theme']) => css`
  border-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: 10px ${align === 'left' ? '0px' : '15px'};
  position: relative;
  background: ${theme === 'light' ? tokens.color.grey_5_light : tokens.color.grey_5_dark};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: fit-content;
  position: relative;
  user-select: none;
`;
