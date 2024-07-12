const zh_CN = {
  title: '告警规则',
  search_placeholder: '搜索名称或标签',
  prod: '监控类型',
  severity: '级别',
  notify_groups: '告警接收组',
  basic_configs: '基础配置',
  name: '规则名称',
  name_severities_appendtags: '名称 & 级别 & 附加标签',
  append_tags: '附加标签',
  append_tags_msg: '标签格式不正确，请检查！',
  append_tags_msg1: '标签长度应小于等于 64 位',
  append_tags_msg2: '标签格式应为 key=value。且 key 以字母或下划线开头，由字母、数字和下划线组成。',
  append_tags_placeholder: '标签格式为 key=value ，使用回车或空格分隔',
  group_id: '业务组',
  note: '备注',
  append_tags_note_tip: '附加到该规则产生的所有告警事件上，未来可以使用这些标签做事件筛选',
  rule_configs: '规则配置',
  inhibit: '级别抑制',
  inhibit_tip: '只有 metricName 和 labels 完全相同的曲线产生的告警事件，才会进行级别抑制，1级>2级>3级',
  interval: '执行频率',
  duration: '持续时长',
  severity_label: '触发告警',
  prom_eval_interval: '执行频率 (s)',
  prom_for_duration: '持续时长 (s)',
  effective_configs: '生效配置',
  enable_status: '立即启用',
  effective_time: '生效时间',
  effective_time_start: '开始时间',
  effective_time_start_msg: '开始时间不能为空',
  effective_time_end: '结束时间',
  effective_time_end_msg: '结束时间不能为空',
  effective_time_week_msg: '请选择生效周期',
  enable_in_bg: '仅在本业务组生效',
  enable_in_bg_tip: '根据告警事件中的ident归属关系判断',
  notify_configs: '通知配置',
  notify_channels: '通知媒介',
  notify_channels_doc: '使用文档',
  notify_channels_tpl: '通知媒介模板',
  notify_channels_tpl_tip: '为空则使用默认模板',
  notify_recovered: '启用恢复通知',
  notify_recovered_tip: '告警恢复时也发送通知',
  recover_duration: '留观时长（秒）',
  recover_duration_tip: '持续 {{num}} 秒没有再次触发阈值才发送恢复通知',
  notify_repeat_step: '重复通知间隔（分钟）',
  notify_repeat_step_tip: '如果告警持续未恢复，间隔 {{num}} 分钟之后重复提醒告警接收组的成员',
  notify_max_number: '最大发送次数',
  notify_max_number_tip: '如果值为0，则不做最大发送次数的限制',
  notify_flashduty_configured: '当前已配置了全局 Flashduty 推送',
  callbacks: '回调地址',
  annotations: '附加信息',
  annotationsOptions: {
    plan_link: '预案链接',
    dashboard_link: '仪表盘链接',
    desc: '描述',
  },
  extra_config: {
    default_tpl: '默认模板',
  },
  invalid_datasource_tip_1: '数据源',
  invalid_datasource_tip_2: '未配置关联告警引擎集群',
  invalid_datasource_reload: '刷新数据源',
  host: {
    query: {
      title: '机器筛选',
      key: {
        all_hosts: '全部机器',
        datasource_ids: '数据源',
        group_ids: '业务组',
        tags: '标签',
        hosts: '机器标识',
      },
      preview: '机器预览',
    },
    trigger: {
      title: '告警条件',
      key: {
        target_miss: '机器失联',
        pct_target_miss: '机器集群失联',
        offset: '机器时间偏移',
      },
      than: '超过',
      pct_target_miss_text: '秒，失联比例超过',
      second: '秒',
      millisecond: '毫秒',
    },
    prom_eval_interval_tip: 'promql 执行频率，每隔 {{num}} 秒查询时序库，查到的结果重新命名写回时序库',
    prom_for_duration_tip:
      '通常持续时长大于执行频率，在持续时长内按照执行频率多次执行PromQL查询，每次都触发才生成告警；如果持续时长置为0，表示只要有一次PromQL查询触发阈值，就生成告警',
  },
  metric: {
    query: {
      title: '告警条件',
    },
    prom_eval_interval_tip: 'promql 执行频率，每隔 {{num}} 秒查询时序库，查到的结果重新命名写回时序库',
    prom_for_duration_tip:
      '通常持续时长大于执行频率，在持续时长内按照执行频率多次执行PromQL查询，每次都触发才生成告警；如果持续时长置为0，表示只要有一次PromQL查询触发阈值，就生成告警',
  },
  batch: {
    not_select: '请先选择策略',
    delete: '删除告警规则',
    delete_confirm: '确认删除选中的告警规则吗？',
    delete_success: '删除成功',
    import: {
      title: '导入告警规则',
      name: '告警规则',
      result: '导入结果',
      errmsg: '错误信息',
    },
    import_builtin: '导入内置告警规则',
    export: {
      title: '导出告警规则',
      copy: '复制 JSON 内容到剪贴板',
    },
    update: {
      title: '更新告警规则',
      name: '批量更新',
      field: '字段',
      changeto: '改为',
      enable_in_bg_tip: '根据告警事件中的ident归属关系判断',
      callback_cover: {
        mode: '模式',
        cover: '覆盖',
        callback_add: '新增',
        callback_del: '删除',
      },
      effective_time_msg: '生效时间不能为空',
      effective_time_add: '添加生效时间',
      options: {
        datasource_ids: '数据源',
        severity: '告警级别',
        prom_eval_interval: '执行频率',
        prom_for_duration: '持续时长',
        disabled: '启用',
        effective_time: '生效时间',
        enable_in_bg: '仅在本业务组生效',
        append_tags: '附加标签',
        notify_channels: '通知媒介',
        notify_groups: '告警接收组',
        notify_recovered: '启用恢复通知',
        notify_repeat_step: '重复发送频率',
        recover_duration: '留观时长',
        notify_max_number: '最大发送次数',
        callbacks: '回调地址',
        note: '备注',
        runbook_url: '预案链接',
        service_cal_ids: '服务日历',
      },
    },
  },
  brain_result_btn: '训练结果',
  testTip: `
  规则有效性检查，包括以下检查项：<br />
  1. 用户联系方式有效性检查
  `,
  default_filter: {
    title: '预置筛选',
    all: '全部规则',
  },
  ruleConfigPromVersion: '规则模式',
  ruleConfigPromVersion_v1: '普通模式',
  ruleConfigPromVersion_v2: '高级模式',
  ruleConfigPromVersion_tip:
    '普通模式：在 PromQL 中配置告警阈值，查询条件 和 阈值设置 在一起，没有特殊需求，使用普通模式即可<br />高级模式：查询条件 和 阈值设置 分开，如果有多个查询条件需要做加减乘除计算，可以使用高级模式，在告警事件的现场值中会将每个查询条件的值展示出来',
  ruleConfigPromVersionV2: {
    query: {
      title: '查询条件',
    },
  },
  preview: '数据预览',
  table: {
    group_id: '业务组',
    cate: '类型',
    datasource_ids: '数据源',
    name: '名称',
    append_tags: '附加标签',
    notify_groups_obj: '告警接收组',
    update_at: '更新时间',
    update_by: '更新人',
    disabled: '启用',
    severity: '级别',
  },
  relabel: {
    title: '事件 relabel',
    if_placeholder: '选填，满足此匹配条件的事件才进行标签 relabel',
    target_label_placeholder: '新增标签的 key',
    replacement_placeholder: '标签最终的 value，如果配置了 separator 此字段可不填，如果配置了 regex 此字段可使用正则中匹配的内容来构建最终的目标值',
    source_labels_placeholder: '选填，使用的原始标签',
    separator_placeholder: '选填，根据已有的标签值拼接，用来拼接 value 的连字符',
    regex_placeholder: '选填，根据已有标签值部分内容构建，提取构建内容的正则',
    labelkeep: {
      regex_placeholder: '必填，支持正则，标签key匹配到的标签会保留',
    },
    labeldrop: {
      regex_placeholder: '必填，支持正则，标签key匹配到的标签会被删除',
    },
    labelmap: {
      regex_placeholder: '必填，使用正则提取内容',
    },
  },
};
export default zh_CN;
