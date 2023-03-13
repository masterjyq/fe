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
import React, { useState, useEffect, useCallback, useContext } from 'react';
import { Form, Card, Select, Col, Button, Row, message, Checkbox, Tooltip, Radio, Modal, Space, InputNumber, Input } from 'antd';
import { QuestionCircleFilled, PlusCircleOutlined, EditOutlined, DeleteOutlined, MinusCircleOutlined } from '@ant-design/icons';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import { addSubscribe, editSubscribe, deleteSubscribes } from '@/services/subscribe';
import { getNotifiesList, getTeamInfoList } from '@/services/manage';
import { subscribeItem } from '@/store/warningInterface/subscribe';
import DatasourceValueSelect from '@/pages/alertRules/Form/components/DatasourceValueSelect';
import { CommonStateContext } from '@/App';
import ProdSelect from '@/pages/alertRules/Form/components/ProdSelect';
import AdvancedWrap, { getAuthorizedDatasourceCates } from '@/components/AdvancedWrap';
import RuleModal from './ruleModal';
import TagItem from './tagItem';
import '../index.less';

const { Option } = Select;
interface Props {
  detail?: subscribeItem;
  type?: number; // 1:编辑; 2:克隆
}

const OperateForm: React.FC<Props> = ({ detail = {}, type }) => {
  const { t } = useTranslation('alertSubscribes');
  const [form] = Form.useForm(null as any);
  const history = useHistory();
  const { curBusiId, groupedDatasourceList } = useContext(CommonStateContext);
  const [ruleModalShow, setRuleModalShow] = useState<boolean>(false);
  const [ruleCur, setRuleCur] = useState<any>();
  const [contactList, setInitContactList] = useState([]);
  const [littleAffect, setLittleAffect] = useState(true);
  const [notifyGroups, setNotifyGroups] = useState<any[]>([]);

  useEffect(() => {
    getNotifyChannel();
    getGroups('');
  }, []);

  useEffect(() => {
    setRuleCur({
      id: detail.rule_id || 0,
      name: detail.rule_name,
    });
  }, [detail.rule_id]);

  const notifyGroupsOptions = (detail.user_groups ? detail.user_groups.filter((item) => !notifyGroups.find((i) => item.id === i.id)) : []).concat(notifyGroups).map((ng: any) => (
    <Option value={String(ng.id)} key={ng.id}>
      {ng.name}
    </Option>
  ));

  const getNotifyChannel = async () => {
    const res = await getNotifiesList();
    let contactList = res || [];
    setInitContactList(contactList);
  };

  const getGroups = async (str) => {
    const res = await getTeamInfoList({ query: str });
    const data = res.dat || res;
    setNotifyGroups(data || []);
  };

  const debounceFetcher = useCallback(_.debounce(getGroups, 800), []);

  const onFinish = (values) => {
    const tags = values?.tags?.map((item) => {
      return {
        ...item,
        value: Array.isArray(item.value) ? item.value.join(' ') : item.value,
      };
    });
    const params = {
      ...values,
      tags,
      redefine_severity: values.redefine_severity ? 1 : 0,
      redefine_channels: values.redefine_channels ? 1 : 0,
      rule_id: ruleCur.id,
      user_group_ids: values.user_group_ids ? values.user_group_ids.join(' ') : '',
      new_channels: values.new_channels ? values.new_channels.join(' ') : '',
      cluster: '0',
    };
    if (type === 1) {
      editSubscribe([{ ...params, id: detail.id }], curBusiId).then((_) => {
        message.success(t('common:success.edit'));
        history.push('/alert-subscribes');
      });
    } else {
      addSubscribe(params, curBusiId).then((_) => {
        message.success(t('common:success.add'));
        history.push('/alert-subscribes');
      });
    }
  };

  const chooseRule = () => {
    setRuleModalShow(true);
  };

  const subscribeRule = (val) => {
    setRuleModalShow(false);
    setRuleCur(val);
    form.setFieldsValue({
      rile_id: val.id || 0,
    });
  };

  return (
    <>
      <div className='operate-form-index' id={littleAffect ? 'littleAffect' : ''}>
        <Form
          form={form}
          layout='vertical'
          className='operate-form'
          onFinish={onFinish}
          initialValues={{
            ...detail,
            prod: detail.prod || 'host',
            redefine_severity: detail?.redefine_severity ? true : false,
            redefine_channels: detail?.redefine_channels ? true : false,
            user_group_ids: detail?.user_group_ids ? detail?.user_group_ids?.split(' ') : [],
            new_channels: detail?.new_channels?.split(' '),
          }}
        >
          <Card>
            <ProdSelect label={t('prod')} />
            <Form.Item shouldUpdate noStyle>
              {({ getFieldValue }) => {
                const prod = getFieldValue('prod');
                if (prod !== 'host') {
                  return (
                    <Row gutter={10}>
                      <Col span={12}>
                        <AdvancedWrap var='VITE_IS_ALERT_ES'>
                          {(isShow) => {
                            return (
                              <Form.Item label={t('common:datasource.type')} name='cate' initialValue='prometheus'>
                                <Select>
                                  {_.map(
                                    _.filter(getAuthorizedDatasourceCates(), (item) => {
                                      if (item.value === 'elasticsearch') {
                                        return isShow[0];
                                      }
                                      return true;
                                    }),
                                    (item) => {
                                      return (
                                        <Select.Option value={item.value} key={item.value}>
                                          {item.label}
                                        </Select.Option>
                                      );
                                    },
                                  )}
                                </Select>
                              </Form.Item>
                            );
                          }}
                        </AdvancedWrap>
                      </Col>
                      <Col span={12}>
                        <Form.Item shouldUpdate={(prevValues, curValues) => prevValues.cate !== curValues.cate} noStyle>
                          {({ getFieldValue, setFieldsValue }) => {
                            const cate = getFieldValue('cate');
                            return <DatasourceValueSelect mode='multiple' setFieldsValue={setFieldsValue} cate={cate} datasourceList={groupedDatasourceList[cate] || []} />;
                          }}
                        </Form.Item>
                      </Col>
                    </Row>
                  );
                }
              }}
            </Form.Item>

            <Form.Item label={t('sub_rule_name')}>
              {!!ruleCur?.id && (
                <Button
                  type='primary'
                  ghost
                  style={{ marginRight: '8px' }}
                  onClick={() => {
                    ruleCur?.id && history.push(`/alert-rules/edit/${ruleCur?.id}`);
                  }}
                >
                  {ruleCur?.name}
                </Button>
              )}

              <EditOutlined style={{ cursor: 'pointer', fontSize: '18px' }} onClick={chooseRule} />
              {!!ruleCur?.id && <DeleteOutlined style={{ cursor: 'pointer', fontSize: '18px', marginLeft: 5 }} onClick={() => subscribeRule({})} />}
            </Form.Item>

            <Form.List name='tags' initialValue={[{}]}>
              {(fields, { add, remove }) => (
                <>
                  <Row gutter={[10, 10]} style={{ marginBottom: '8px' }}>
                    <Col span={5}>
                      <Space align='baseline'>
                        <span>{t('tag.key.label')}</span>
                        <Tooltip title={t(`tag.key.tip`)}>
                          <QuestionCircleFilled />
                        </Tooltip>
                        <PlusCircleOutlined className='control-icon-normal' onClick={() => add()} />
                      </Space>
                    </Col>
                    <Col span={3}>{t('tag.func.label')}</Col>
                    <Col span={16}>{t('tag.value.label')}</Col>
                  </Row>
                  {fields.map((field, index) => (
                    <TagItem field={field} fields={fields} key={index} remove={remove} add={add} form={form} />
                  ))}
                </>
              )}
            </Form.List>
            <Form.Item label={t('for_duration')} name='for_duration'>
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label={t('redefine_severity')} name='redefine_severity' valuePropName='checked'>
              <Checkbox
                value={1}
                style={{ lineHeight: '32px' }}
                onChange={(e) => {
                  form.setFieldsValue({
                    redefine_severity: e.target.checked ? 1 : 0,
                  });
                  setLittleAffect(!littleAffect);
                }}
              >
                {t('redefine')}
              </Checkbox>
            </Form.Item>
            <Form.Item label={t('new_severity')} name='new_severity' initialValue={2} style={{ display: form.getFieldValue('redefine_severity') ? 'block' : 'none' }}>
              <Radio.Group>
                <Radio key={1} value={1}>
                  {t('common:severity.1')}
                </Radio>
                <Radio key={2} value={2}>
                  {t('common:severity.2')}
                </Radio>
                <Radio key={3} value={3}>
                  {t('common:severity.3')}
                </Radio>
                  <Radio key={4} value={4}>
                  {t('common:severity.4')}
                </Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label={t('redefine_channels')} name='redefine_channels' valuePropName='checked'>
              <Checkbox
                value={1}
                style={{ lineHeight: '32px' }}
                onChange={(e) => {
                  form.setFieldsValue({
                    redefine_channels: e.target.checked ? 1 : 0,
                  });
                  setLittleAffect(!littleAffect);
                }}
              >
                {t('redefine')}
              </Checkbox>
            </Form.Item>
            <Form.Item label={t('new_channels')} name='new_channels' style={{ display: form.getFieldValue('redefine_channels') ? 'block' : 'none' }}>
              <Checkbox.Group>
                {contactList.map((c: { key: string; label: string }) => (
                  <Checkbox value={c.key} key={c.label}>
                    {c.label}
                  </Checkbox>
                ))}
              </Checkbox.Group>
            </Form.Item>

            <Form.Item label={t('redefine_webhooks')} name='redefine_webhooks' valuePropName='checked'>
              <Checkbox
                value={1}
                style={{ lineHeight: '32px' }}
                onChange={(e) => {
                  form.setFieldsValue({
                    redefine_webhooks: e.target.checked ? 1 : 0,
                  });
                  setLittleAffect(!littleAffect);
                }}
              >
                {t('redefine')}
              </Checkbox>
            </Form.Item>
            <div style={{ display: form.getFieldValue('redefine_webhooks') ? 'block' : 'none' }}>
              <Form.List name='webhooks' initialValue={[]}>
                {(fields, { add, remove }) => (
                  <>
                    <Row gutter={10} style={{ marginBottom: '8px' }}>
                      <Col span={5}>
                        <Space align='baseline'>
                          <span>{t('webhooks')}</span>
                          <PlusCircleOutlined onClick={() => add()} />
                        </Space>
                      </Col>
                    </Row>
                    {fields.map((field, index) => (
                      <Row gutter={10}>
                        <Col flex='auto'>
                          <Form.Item name={[field.name]} key={index} rules={[{ required: true, message: t('webhooks_msg') }]}>
                            <Input />
                          </Form.Item>
                        </Col>
                        <Col flex='32px'>
                          <MinusCircleOutlined style={{ marginTop: '8px' }} onClick={() => remove(field.name)} />
                        </Col>
                      </Row>
                    ))}
                  </>
                )}
              </Form.List>
            </div>

            <Form.Item label={t('user_group_ids')} name='user_group_ids'>
              <Select mode='multiple' showSearch optionFilterProp='children' filterOption={false} onSearch={(e) => debounceFetcher(e)} onBlur={() => getGroups('')}>
                {notifyGroupsOptions}
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit' style={{ marginRight: '8px' }}>
                {type === 1 ? t('common:btn.edit') : type === 2 ? t('common:btn.clone') : t('common:btn.create')}
              </Button>
              {type === 1 && (
                <Button
                  danger
                  style={{ marginRight: '8px' }}
                  onClick={() => {
                    Modal.confirm({
                      title: t('common:confirm.delete'),
                      onOk: () => {
                        detail?.id &&
                          deleteSubscribes({ ids: [detail.id] }, curBusiId).then(() => {
                            message.success(t('common:success.delete'));
                            history.push('/alert-subscribes');
                          });
                      },

                      onCancel() {},
                    });
                  }}
                >
                  {t('common:btn.delete')}
                </Button>
              )}
              <Button onClick={() => window.history.back()}>{t('common:btn.cancel')}</Button>
            </Form.Item>
          </Card>
        </Form>
        <RuleModal
          visible={ruleModalShow}
          ruleModalClose={() => {
            setRuleModalShow(false);
          }}
          subscribe={subscribeRule}
        />
      </div>
    </>
  );
};

export default OperateForm;
