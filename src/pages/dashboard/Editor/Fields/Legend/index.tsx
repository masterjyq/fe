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
import React from 'react';
import { Form, Radio, Row, Col } from 'antd';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import { Panel } from '../../Components/Collapse';

export default function index() {
  const { t } = useTranslation('dashboard');
  const namePrefix = ['options', 'legend'];

  return (
    <Panel header='Legend'>
      <Row>
        <Col span={12}>
          <Form.Item label={t('panel.options.legend.displayMode.label')} name={[...namePrefix, 'displayMode']}>
            <Radio.Group buttonStyle='solid'>
              <Radio.Button value='table'>{t('panel.options.legend.displayMode.table')}</Radio.Button>
              <Radio.Button value='list'>{t('panel.options.legend.displayMode.list')}</Radio.Button>
              <Radio.Button value='hidden'>{t('panel.options.legend.displayMode.hidden')}</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Col>
          <Form.Item noStyle shouldUpdate={(prevValues, curValues) => _.get(prevValues, [...namePrefix, 'displayMode']) !== _.get(curValues, [...namePrefix, 'displayMode'])}>
            {({ getFieldValue }) => {
              if (getFieldValue([...namePrefix, 'displayMode']) === 'list') {
                return (
                    <Col span={12}>
                        <Form.Item label={t('panel.options.legend.placement')} name={[...namePrefix, 'placement']}>
                            <Radio.Group buttonStyle='solid'>
                                <Radio.Button value='bottom'>Bottom</Radio.Button>
                                <Radio.Button value='right'>Right</Radio.Button>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                );
              } else if (getFieldValue([...namePrefix, 'displayMode']) === 'table') {
                  return (<>
                  <Col span={6}>
                      <Form.Item label={t('panel.options.legend.max')} name={[...namePrefix, 'max']} initialValue={true}>
                          <Radio.Group buttonStyle='solid'>
                              <Radio.Button value={true}>{t('panel.options.legend.open')}</Radio.Button>
                              <Radio.Button value={false}>{t('panel.options.legend.close')}</Radio.Button>
                          </Radio.Group>
                      </Form.Item>
                  </Col>
                  <Col span={6}>
                      <Form.Item label={t('panel.options.legend.min')} name={[...namePrefix, 'min']} initialValue={true}>
                          <Radio.Group buttonStyle='solid'>
                              <Radio.Button value={true}>{t('panel.options.legend.open')}</Radio.Button>
                              <Radio.Button value={false}>{t('panel.options.legend.close')}</Radio.Button>
                          </Radio.Group>
                      </Form.Item>
                  </Col>
                  <Col span={6}>
                      <Form.Item label={t('panel.options.legend.avg')} name={[...namePrefix, 'avg']} initialValue={true}>
                          <Radio.Group buttonStyle='solid'>
                              <Radio.Button value={true}>{t('panel.options.legend.open')}</Radio.Button>
                              <Radio.Button value={false}>{t('panel.options.legend.close')}</Radio.Button>
                          </Radio.Group>
                      </Form.Item>
                  </Col>
                  <Col span={6}>
                      <Form.Item label={t('panel.options.legend.sum')} name={[...namePrefix, 'sum']} initialValue={false}>
                          <Radio.Group buttonStyle='solid'>
                              <Radio.Button value={true}>{t('panel.options.legend.open')}</Radio.Button>
                              <Radio.Button value={false}>{t('panel.options.legend.close')}</Radio.Button>
                          </Radio.Group>
                      </Form.Item>
                  </Col>
                  <Col span={6}>
                      <Form.Item label={t('panel.options.legend.last')} name={[...namePrefix, 'last']} initialValue={true}>
                          <Radio.Group buttonStyle='solid'>
                              <Radio.Button value={true}>{t('panel.options.legend.open')}</Radio.Button>
                              <Radio.Button value={false}>{t('panel.options.legend.close')}</Radio.Button>
                          </Radio.Group>
                      </Form.Item>
                  </Col>
                  </>);
              }
              return null;
            }}
          </Form.Item>
      </Row>
    </Panel>
  );
}
