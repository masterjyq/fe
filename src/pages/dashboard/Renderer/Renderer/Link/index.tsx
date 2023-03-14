import React, { useState } from 'react';
import { IPanel } from '../../../types';
import { useGlobalState } from '../../../globalState';
import { IRawTimeRange, parseRange } from '@/components/TimeRangePicker';
import moment from 'moment';
import { renderUrl } from '../../../utils'

interface IProps {
    values: IPanel;
    series: any[];
    themeMode?: 'dark';
    time: IRawTimeRange;
    cluster?: number;
}

export default function index(props: IProps) {
    const [dashboardMeta] = useGlobalState('dashboardMeta');
    const { values, time, cluster } = props;
    const { custom } = values;
    const parsedRange = parseRange(time);
    const start = moment(parsedRange.start).unix();
    const startms = start * 1000;
    const end = moment(parsedRange.end).unix();
    const endms = end * 1000;
    const param = { "cluster":cluster === -1 ? '':cluster, start, startms, end, endms }
    dashboardMeta.variableConfigWithOptions?.forEach((val,_) =>{
        param[val.name] = val.value
    })
    const url = renderUrl(custom.url,param)
    return (
            <iframe src={url}
                width="100%"
                height="100%"
                style={{ padding: '10px 30px 5px 10px' }}
                frameBorder={0}>
            </iframe> )
}
