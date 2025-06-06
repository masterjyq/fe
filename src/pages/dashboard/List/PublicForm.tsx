import React, { useState, useEffect } from 'react';
import { Form, Radio, Modal, Select, Alert } from 'antd';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';
import ModalHOC, { ModalWrapProps } from '@/components/ModalHOC';
import { updateBoardPublic, getDashboard } from '@/services/dashboardV2';

interface IProps {
  boardId: number;
  busiGroups: any[];
  initialValues: any;
  onOk: () => void;
}

function PublicForm(props: IProps & ModalWrapProps) {
  const { t } = useTranslation('dashboard');
  const { visible, destroy, boardId, busiGroups, initialValues, onOk } = props;
  const [form] = Form.useForm();
  const publicVal = Form.useWatch('public', form);
  const publicCate = Form.useWatch('public_cate', form);
  const [dashboardConfig, setDashboardConfig] = useState<any>({});
  const hasHostIdentVariable = _.some(dashboardConfig.var, (item) => {
    return item.type === 'hostIdent';
  });

  useEffect(() => {
    if (boardId) {
      getDashboard(boardId)
        .then((res) => {
          try {
            setDashboardConfig(JSON.parse(res.configs));
          } catch (e) {
            console.error(e);
            setDashboardConfig({});
          }
        })
        .catch(() => {
          setDashboardConfig({});
        });
    } else {
      setDashboardConfig({});
    }
  }, [boardId]);

  return (
    <Modal
      visible={visible}
      title={t('public.name')}
      onCancel={destroy}
      onOk={() => {
        form.validateFields().then((values) => {
          updateBoardPublic(boardId, values).then(() => {
            onOk();
            destroy();
          });
        });
      }}
      okButtonProps={{
        disabled: hasHostIdentVariable && publicVal === 1 && publicCate === 0,
      }}
    >
      <Form
        layout='vertical'
        form={form}
        initialValues={{
          ...initialValues,
          bgids: initialValues.bgids || [], // TODO 兼容接口返回的 null 值
        }}
      >
        <Form.Item label={t('public.name')} name='public'>
          <Radio.Group>
            <Radio value={0}>{t('public.unpublic')}</Radio>
            <Radio value={1}>{t('public.name')}</Radio>
          </Radio.Group>
        </Form.Item>
        {publicVal === 1 && (
          <>
            <Form.Item label={t('public.public_cate')} name='public_cate'>
              <Radio.Group>
                <Radio value={0}>{t('public.cate.0')}</Radio>
                <Radio value={1}>{t('public.cate.1')}</Radio>
                <Radio value={2}>{t('public.cate.2')}</Radio>
              </Radio.Group>
            </Form.Item>
            {publicCate === 2 && (
              <Form.Item label={t('public.bgids')} name='bgids'>
                <Select
                  showSearch
                  optionFilterProp='label'
                  mode='multiple'
                  options={_.map(busiGroups, (item) => {
                    return {
                      label: item.name,
                      value: item.id,
                    };
                  })}
                />
              </Form.Item>
            )}
          </>
        )}
        {hasHostIdentVariable && publicVal === 1 && publicCate === 0 && <Alert message={t('var.hostIdent.invalid2')} type='warning' />}
      </Form>
    </Modal>
  );
}

export default ModalHOC<IProps>(PublicForm);
