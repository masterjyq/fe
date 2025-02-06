const en_US = {
  title: 'Alert rules',
  search_placeholder: 'Search by name or tags',
  prod: 'Type',
  severity: 'Severity',
  notify_groups: 'Notify groups',
  basic_configs: 'Basic settings',
  name: 'Name',
  name_severities_appendtags: 'Name & Severity & Tags',
  append_tags: 'Tags',
  append_tags_msg: 'Invalid tag format, please check!',
  append_tags_msg1: 'Tag length should be less than or equal to 64 bits',
  append_tags_msg2: 'Tag format should be key=value. And the key starts with a letter or underscore, and is composed of letters, numbers and underscores.',
  append_tags_placeholder: 'Tag format is key=value, use Enter or Space to separate',
  group_id: 'Business group',
  note: 'Note',
  append_tags_note_tip: 'Attached to all alarm events generated by this rule, these tags can be used for event filtering in the future',
  rule_configs: 'Rule configuration',
  inhibit: 'Inhibit',
  inhibit_tip: 'Only the alert events generated by the curves with the same metricName and labels will be suppressed, 1>2>3',
  interval: 'Execution interval',
  duration: 'Execution duration',
  severity_label: 'Severity',
  prom_eval_interval: 'Execution interval (s)',
  prom_for_duration: 'Execution duration (s)',
  effective_configs: 'Effective configuration',
  enable_status: 'Enable now',
  effective_time: 'Effective time',
  effective_time_start: 'Start time',
  effective_time_start_msg: 'Start time is required',
  effective_time_end: 'End time',
  effective_time_end_msg: 'End time is required',
  effective_time_week_msg: 'Please select effective week',
  enable_in_bg: 'Enable in buisness group',
  enable_in_bg_tip:
    'Determined according to the ownership relationship of the ident tag in the alert event, that is: if the machine corresponding to the ident tag in the alert event does not belong to the business group, the alert event will be discarded',
  notify_configs: 'Notify Configuration',
  notify_channels: 'Channels',
  notify_channels_doc: 'Document',
  notify_channels_tpl: 'Channels template',
  notify_channels_tpl_tip: 'If empty, use the default template',
  notify_recovered: 'Recovered',
  notify_recovered_tip: 'Send notification when the alert is recovered',
  recover_duration: 'Recover duration (s)',
  recover_duration_tip: 'Continue {{num}} seconds without triggering the threshold again to send the recovery notification',
  notify_repeat_step: 'Repeat tnterval (mins)',
  notify_repeat_step_tip: 'If the alert continues to be unrecovered, the member of the alert receiving group will be reminded again after {{num}} minutes',
  notify_max_number: 'Max send times',
  notify_max_number_tip: 'The maximum number of times the alert is sent to the alert receiving group',
  notify_flashduty_configured: 'Global Flashduty push is configured',
  callbacks: 'Callbacks',
  callbacks_tip: 'Support configuration variables, the usage of variables can refer to the <a>Variable Reference</a> document',
  override_global_webhook: 'Override global callback',
  override_global_webhook_tip:
    'After this switch is turned on, the alert event will only be sent to the callback address of this rule, and will not be sent to the global callback address',
  annotations: 'Annotations',
  annotationsOptions: {
    plan_link: 'Plan link',
    dashboard_link: 'Dashboard link',
    desc: 'Description',
  },
  extra_config: {
    default_tpl: 'Default template',
  },
  invalid_datasource_tip_1: 'Datasources',
  invalid_datasource_tip_2: 'are not configured with cluster of alert engine',
  invalid_datasource_reload: 'Reload',
  advanced_settings: 'Advanced settings',
  host: {
    query: {
      title: 'Queries',
      key: {
        all_hosts: 'All hosts',
        datasource_ids: 'Datasource',
        group_ids: 'Group',
        tags: 'Tags',
        hosts: 'Host idents',
      },
      preview: 'Preview',
    },
    trigger: {
      title: 'Triggers',
      key: {
        target_miss: 'Target miss',
        pct_target_miss: 'Pct target miss',
        offset: 'Offset',
      },
      than: 'than',
      pct_target_miss_text: 's, The proportion of lost connection exceeds',
      second: 's',
      millisecond: 'ms',
    },
    prom_eval_interval_tip: 'promql 执行频率，每隔 {{num}} 秒查询时序库，查到的结果重新命名写回时序库',
    prom_for_duration_tip:
      '通常持续时长大于执行频率，在持续时长内按照执行频率多次执行PromQL查询，每次都触发才生成告警；如果持续时长置为0，表示只要有一次PromQL查询触发阈值，就生成告警',
  },
  metric: {
    query: {
      title: 'Queries',
    },
    prom_eval_interval_tip: 'PromQL query is executed every {{num}} seconds to query the time-series database',
    prom_for_duration_tip:
      'Usually the duration is greater than the execution frequency. During the duration, PromQL query is executed multiple times according to the execution frequency, and an alert is generated only if it is triggered every time. If the duration is set to 0, an alert is generated as long as the threshold is triggered once during the PromQL query.',
  },
  loki: {
    required: 'Please input LogQL',
  },
  batch: {
    not_select: 'Please select some rules first',
    delete: 'Delete alert rules',
    delete_confirm: 'Are you sure to delete the selected rules?',
    delete_success: 'Delete successfully',
    import: {
      title: 'Import alert rules',
      name: 'Alert rule',
      result: 'Result',
      errmsg: 'Error message',
    },
    import_builtin: 'Import built-in alert rules',
    import_prometheus: 'Import Prometheus alert rules',
    export: {
      title: 'Export alert rules',
      copy: 'Copy JSON content to clipboard',
    },
    update: {
      title: 'Update alert rules',
      name: 'Update alert rules',
      field: 'Field',
      changeto: 'Change to',
      callback_cover: {
        mode: 'Mode',
        cover: 'Cover',
        callback_add: 'Add',
        callback_del: 'Delete',
      },
      effective_time_msg: 'Effective time is required',
      effective_time_add: 'Add effective time',
      options: {
        datasource_ids: 'Datasource',
        severity: 'Severity',
        prom_eval_interval: 'Execution interval',
        prom_for_duration: 'Execution duration',
        disabled: 'Enable',
        effective_time: 'Effective time',
        enable_in_bg: 'Enable in buisness group',
        append_tags: 'Tags',
        notify_channels: 'Channels',
        notify_groups: 'Notify groups',
        notify_recovered: 'Recovered',
        notify_repeat_step: 'Repeat interval',
        recover_duration: 'Recover duration',
        notify_max_number: 'Max send times',
        callbacks: 'Callbacks',
        note: 'Note',
        runbook_url: 'Runbook URL',
        service_cal_ids: 'Service calendar',
        annotations: 'Annotations',
        triggers: 'Triggers',
      },
    },
    cloneToHosts: {
      title: 'Clone to hosts',
      select_hosts: {
        title: 'Select hosts',
        filter: 'Filter',
        ident: 'Ident',
        tags: 'Tags',
        group: 'Group',
      },
      clone_btn: 'Clone',
      result: {
        title: 'Result',
        host: 'Host',
        rule: 'Rule',
        msg: 'Message',
      },
    },
    export_to_csv: 'Export (CSV)',
    export_failed: 'Export failed',
  },
  brain_result_btn: 'Training result',
  testTip: `
  Rule validity check：<br />
  1. Check channels and groups
  `,
  default_filter: {
    title: 'Preset filters',
    all: 'All rules',
  },
  ruleConfigPromVersion: 'Mode',
  ruleConfigPromVersion_v1: 'Normal mode',
  ruleConfigPromVersion_v2: 'Advanced mode',
  ruleConfigPromVersion_tip:
    'Normal mode: configure the trigger in PromQL, queries and triggers are set together.<br />Advanced mode: queries and triggers settings are separated, if there are multiple query conditions, addition and subtraction are required for multiplication and division calculations, you can use the advanced mode. The value of each query condition will be displayed in the on-site value of the alarm event.',
  ruleConfigPromVersionV2: {
    query: {
      title: 'Query',
    },
  },
  preview: 'Data preview',
  table: {
    group_id: 'Business group',
    cate: 'Type',
    datasource_ids: 'Datasource',
    name: 'Name',
    append_tags: 'Tags',
    notify_groups_obj: 'Notify groups',
    update_at: 'Updated',
    update_by: 'Updated by',
    disabled: 'Enable',
    severity: 'Severity',
    status: 'Status',
    status_tip: 'Whether the alarm rule currently triggers the alarm event. The default statistics are the data of the last 30 days',
  },
  expired: 'The alert rule has been modified by others. To avoid mutual coverage, please refresh the page to view the latest configuration',
  relabel: {
    title: 'Relabel',
    help_btn: 'Help',
    if_tip: 'Optional, only events that meet this matching condition will be relabeled',
    target_label_tip: 'Key of the new label',
    replacement_tip:
      'The final value of the label, if the separator is configured, this field can be left blank, if the regex is configured, this field can use the content matched in the regular expression to construct the final target value',
    source_labels_tip: 'Optional, the original label used',
    source_labels_tip_placeholder: 'Use Enter or Space to separate',
    separator_tip: 'Optional, spliced according to the existing label value, used to splice the connector of the value',
    regex_tip: 'Optional, based on the content of the existing label value, extract the regular expression used to construct the content',
    labelkeep: {
      regex_tip: 'Required, supports regular expressions, labels that match the label key will be retained',
    },
    labeldrop: {
      regex_tip: 'Required, supports regular expressions, labels that match the label key will be deleted',
    },
    labelmap: {
      regex_tip: 'Required, use regular expressions to extract content',
      replacement_tip:
        'You can write a fixed value, such as abc, or you can write characters matched from the regular expression. For example, the regular expression is local(host). Here, write $1, and the final value is host.',
    },
    test_btn: 'Test configuration',
    test: {
      title: 'Test',
      label: 'Label',
      labelFromEvent: 'Select label from alert event',
      btn: 'Apply',
      result: 'Relabel result',
    },
  },
  task_tpls: {
    title: 'Self-healing template',
    add_btn: 'Create',
    tpl_id: 'Template',
    tpl_id_msg: 'Template is required',
    host: 'Host',
    host_placeholder: 'Optional, the host to be executed will be obtained from the ident tag in the event',
  },
  trigger: {
    title: 'Threshold Judgment',
    builder: 'Builder',
    code: 'Code',
    label: 'Label',
    exp_trigger_disable: 'Enable Threshold Judgment',
    advanced_settings: {
      label: 'Advanced settings',
    },
    recover_config: {
      label: 'Recovery configuration',
      judge_type: {
        0: 'No data is considered recovered',
        1: 'No data is not considered recovered',
        2: 'The result meets the condition to be considered recovered',
      },
      recover_exp_placeholder: 'e.g. $A < 50',
    },
    joins: {
      label: 'Joins operations',
      join_type: {
        original: 'No merge',
        none: 'None',
        inner_join: 'Inner join',
        left_join: 'Left join',
        right_join: 'Right join',
        left_exclude: 'Left exclude',
        right_exclude: 'Right exclude',
      },
      join_type_placeholder: 'Select join operation',
      on: 'Label key',
    },
  },
  nodata_trigger: {
    title: 'No data',
    enable: 'If data was previously retrievable but now cannot be found, trigger an alert; if the data is retrieved again, restore the normal status.',
    resolve_after: 'Automatically recover after no data for',
    resolve_after_unit: 's',
  },
  filter_disabled: {
    placeholder: 'Enabled status',
    0: 'Enabled',
    1: 'Disabled',
  },
  var_config: {
    enable: 'Enable variables',
    config: 'Variable configuration',
    config_tip: 'Variable configuration',
    name: 'Variable name',
    type: 'Variable type',
    value: 'Variable value',
    threshold: 'Threshold',
    threshold_value: 'Variable value',
    enum: 'Enum',
    enum_value: 'Variable value',
    host: 'Host',
    host_value: 'Host',
    device: 'Network device',
    device_value: 'Network device',
    filter: 'Variable filter',
    filter_tip: 'Variable filter',
    add_subFilter: 'Add sub filter',
  },
};
export default en_US;
