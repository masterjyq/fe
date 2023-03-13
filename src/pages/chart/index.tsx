/*
 * Copyright 2022 Nightingale Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import React, { useContext, useEffect, useState } from 'react';
import semver from 'semver';
import { Space, Select, Alert } from 'antd';
import { FieldNumberOutlined } from '@ant-design/icons';
import { useParams } from 'react-router';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import { GetTmpChartData } from '@/services/metric';
import { TimeRangePickerWithRefresh, IRawTimeRange } from '@/components/TimeRangePicker';
import Resolution from '@/components/Resolution';
import { CommonStateContext } from '@/App';
import Renderer from '../dashboard/Renderer/Renderer';
import { getStepByTimeAndStep } from '../dashboard/utils';
import './locale';
import './index.less';

export default function Chart() {
  const { t } = useTranslation('shareChart');
  const { ids } =
    useParams<{
      ids: string;
    }>();
  const [chartData, setChartData] = useState<
    Array<{
      ref: any;
      dataProps: any;
    }>
  >([]);
  const [range, setRange] = useState<IRawTimeRange>({
    start: 'now-1h',
    end: 'now',
  });
  const [step, setStep] = useState<number | null>(null);
  const { groupedDatasourceList } = useContext(CommonStateContext);
  const clusters = groupedDatasourceList.prometheus || [];
  const [curCluster, setCurCluster] = useState<number>();

  useEffect(() => {
    if (!curCluster && clusters[0]?.id) {
      setCurCluster(clusters[0].id);
    }
  }, [clusters]);

  useEffect(() => {
    initChart();
  }, []);

  const initChart = () => {
    GetTmpChartData(ids).then((res) => {
      let data = res.dat
        .filter((item) => !!item)
        .map((item) => {
          return { ...JSON.parse(item.configs), ref: React.createRef() };
        });
      const curCluster = data[0].curCluster;
      setStep(data[0].dataProps.step);
      setRange(data[0].dataProps.range);
      // TODO: 处理当前选中集群不在集群列表的情况
      if (curCluster) {
        setCurCluster(_.toNumber(curCluster));
      }
      setChartData(data);
    });
  };

  return (
    <div className='chart-container'>
      {chartData && chartData.length > 0 && curCluster ? (
        <>
          <div className='chart-container-header'>
            <div className='left'></div>
            <div className='right'>
              <Space>
                <div>
                  <span>{t('common:datasource.id')}：</span>
                  <Select
                    value={curCluster}
                    onChange={(val) => {
                      setCurCluster(val);
                    }}
                  >
                      <Select.Option key={-1} value={-1}>
                          所有集群
                      </Select.Option>
                    {clusters.map((cluster) => (
                      <Select.Option key={cluster.id} value={cluster.id}>
                        {cluster.name}
                      </Select.Option>
                    ))}
                  </Select>
                </div>
                <TimeRangePickerWithRefresh refreshTooltip={t('refresh_tip', { num: getStepByTimeAndStep(range, step) })} onChange={setRange} value={range} />
                <Resolution onChange={(v) => setStep(v)} initialValue={step} />
              </Space>
            </div>
          </div>
          {chartData.map((item: any, index) => {
            if (semver.valid(item.dataProps?.version)) {
              return (
                <div style={{ height: 740, border: '1px solid #efefef' }}>
                  <Renderer
                    dashboardId={item.id}
                    key={index}
                    time={range}
                    step={step}
                    values={_.merge({}, item.dataProps, {
                      options: {
                        legend: {
                          displayMode: 'table',
                        },
                      },
                      datasourceValue: item.dataProps?.datasourceName || curCluster,
                    })}
                    isPreview
                  />
                </div>
              );
            }
            return <Alert type='warning' message='v6 版本不再支持 < v5.4.0 的配置，请重新生成临时图' />;
          })}
        </>
      ) : (
        <h2 className='holder'>
          <FieldNumberOutlined
            style={{
              fontSize: '30px',
            }}
          />
          <span>{t('该分享链接无图表数据')}</span>
        </h2>
      )}
    </div>
  );
}
