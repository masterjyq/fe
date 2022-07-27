import React from 'react';
import Color from 'color';
import { IPanel } from '../../../types';
import Markdown from '../../../Editor/Components/Markdown';

interface IProps {
  values: IPanel;
  series: any[];
  themeMode?: 'dark';
}

export default function index(props: IProps) {
  const { values } = props;
  const { custom } = values;
  const { content, textColor, bgColor, textSize, justifyContent, alignItems } = custom;
  return (
    <Markdown
      content={content}
      style={{
        height: '100%',
        fontSize: textSize,
        color: textColor,
        backgroundColor: bgColor,
        border: `1px solid ${Color('#fff').alpha(0.2).rgb().string()}`,
        display: 'flex',
        justifyContent,
        alignItems,
      }}
    />
  );
}