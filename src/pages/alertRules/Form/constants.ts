import moment from 'moment';

export const defaultRuleConfig = {
  host: {
    queries: [
      {
        key: 'all_hosts',
        op: '==',
        values: [],
      },
    ],
    triggers: [
      {
        type: 'target_miss',
        severity: 2,
        duration: 30,
      },
    ],
  },
  metric: {
    queries: [
      {
        prom_ql: '',
        severity: 2,
      },
    ],
  },
  logging: {
    queries: [
      {
        interval_unit: 'min',
        interval: 5,
        date_field: '@timestamp',
        value: {
          func: 'count',
        },
      },
    ],
    triggers: [
      {
        mode: 0,
        expressions: [
          {
            ref: 'A',
            comparisonOperator: '>',
            value: 0,
            logicalOperator: '&&',
          },
        ],
        severity: 2,
      },
    ],
  },
  anomaly: {
    severity: 2,
  },
  loki: {
    queries: [
      {
        // log_ql: '',
        prom_ql: '', // 为了兼容老版本
        severity: 2,
      },
    ],
  },
};

export const defaultValues = {
  disabled: 0,
  effective_time: [
    {
      enable_days_of_week: ['0', '1', '2', '3', '4', '5', '6'],
      enable_stime: moment('00:00', 'HH:mm'),
      enable_etime: moment('00:00', 'HH:mm'), // 起止时间一致时，表示全天有效
    },
  ],
  notify_recovered: true,
  recover_duration: 0,
  notify_repeat_step: 60,
  notify_max_number: 0,
  rule_config: defaultRuleConfig.metric,
  prom_eval_interval: 30,
  prom_for_duration: 60,
  prod: 'metric',
  cate: 'prometheus',
  enable_status: true,
};

export const ruleTypeOptions = [
  {
    label: 'Metric',
    value: 'metric',
    pro: false,
  },
  {
    label: 'Host',
    value: 'host',
    pro: false,
  },
  {
    label: 'Log',
    value: 'logging',
    pro: false,
  },
];
