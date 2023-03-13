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
import { Form, Input, Row, Col, Select, InputNumber, Mentions } from 'antd';
import _ from 'lodash';
import { Panel } from '../../Components/Collapse';
import ColorPicker from '../../../Components/ColorPicker';

export default function GraphStyles({ variableConfigWithOptions }) {
    const namePrefix = ['custom'];

    return (
            <Panel header='图表样式'>
                <Row gutter={20}>
                    <Col span={20}>
                        <Form.Item label='链接URL' name={[...namePrefix, 'url']}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
            </Panel>
            );
}
