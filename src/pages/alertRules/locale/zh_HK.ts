const zh_HK = {
  title: '告警規則',
  search_placeholder: '搜尋名稱或標籤',
  prod: '監控類型',
  severity: '級別',
  notify_groups: '告警接收組',
  basic_configs: '基礎配置',
  name: '規則名稱',
  name_severities_appendtags: '名称 & 級別 & 附加標籤',
  append_tags: '附加標籤',
  append_tags_msg: '標籤格式不正確，請檢查！',
  append_tags_msg1: '標籤長度應小於等於 64 位',
  append_tags_msg2: '標籤格式應為 key=value。且 key 以字母或下劃線開頭，由字母、數字和下劃線組成。',
  append_tags_placeholder: '標籤格式為 key=value ，使用回車或空格分隔',
  group_id: '業務組',
  note: '備註',
  append_tags_note_tip: '附加到該規則產生的所有告警事件上，未來可以使用這些標籤做事件篩選',
  rule_configs: '規則配置',
  inhibit: '級別抑制',
  inhibit_tip: '只有 metricName 和 labels 完全相同的曲線產生的告警事件，才會進行級別抑制，1級>2級>3級',
  interval: '執行頻率',
  duration: '持續時長',
  severity_label: '觸發告警',
  prom_eval_interval: '執行頻率 (s)',
  prom_for_duration: '持續時長 (s)',
  effective_configs: '生效配置',
  enable_status: '立即啟用',
  effective_time: '生效時間',
  effective_time_start: '開始時間',
  effective_time_start_msg: '開始時間不能為空',
  effective_time_end: '結束時間',
  effective_time_end_msg: '結束時間不能為空',
  effective_time_week_msg: '請選擇生效週期',
  enable_in_bg: '僅在本業務組生效',
  enable_in_bg_tip: '根據告警事件中的 ident 歸屬關係判斷',
  notify_configs: '通知配置',
  notify_channels: '通知媒介',
  notify_channels_doc: '使用文檔',
  notify_channels_tpl: '通知媒介模板',
  notify_channels_tpl_tip: '為空則使用默認模板',
  notify_recovered: '啟用恢復通知',
  notify_recovered_tip: '告警恢復時也傳送通知',
  recover_duration: '留觀時長（秒）',
  recover_duration_tip: '持續 {{num}} 秒沒有再次觸發閾值才傳送恢復通知',
  notify_repeat_step: '重複通知間隔（分鐘）',
  notify_repeat_step_tip: '如果告警持續未恢復，間隔 {{num}} 分鐘之後重複提醒告警接收組的成員',
  notify_max_number: '最大發送次數',
  notify_max_number_tip: '如果值為 0，則不做最大發送次數的限制',
  notify_flashduty_configured: '當前已配置了全局 Flashduty 推送',
  callbacks: '回撥地址',
  annotations: '附加資訊',
  annotationsOptions: {
    plan_link: '預案連結',
    dashboard_link: '儀表盤連結',
    desc: '描述',
  },
  extra_config: {
    default_tpl: '默認模板',
  },
  invalid_datasource_tip_1: '數據源',
  invalid_datasource_tip_2: '未配置關聯告警引擎集群',
  invalid_datasource_reload: '刷新數據源',
  host: {
    query: {
      title: '機器篩選',
      key: {
        all_hosts: '全部機器',
        datasource_ids: '數據源',
        group_ids: '業務組',
        tags: '標籤',
        hosts: '機器標識',
      },
      preview: '機器預覽',
    },
    trigger: {
      title: '告警條件',
      key: {
        target_miss: '機器失聯',
        pct_target_miss: '機器叢集失聯',
        offset: '機器時間偏移',
      },
      than: '超過',
      pct_target_miss_text: '秒，失聯比例超過',
      second: '秒',
      millisecond: '毫秒',
    },
    prom_eval_interval_tip: 'promql 執行頻率，每隔 {{num}} 秒查詢時序庫，查到的結果重新命名寫回時序庫',
    prom_for_duration_tip:
      '通常持續時長大於執行頻率，在持續時長內按照執行頻率多次執行 PromQL 查詢，每次都觸發才生成告警；如果持續時長置為 0，表示只要有一次 PromQL 查詢觸發閾值，就生成告警',
  },
  metric: {
    query: {
      title: '告警條件',
    },
    prom_eval_interval_tip: 'promql 執行頻率，每隔 {{num}} 秒查詢時序庫，查到的結果重新命名寫回時序庫',
    prom_for_duration_tip:
      '通常持續時長大於執行頻率，在持續時長內按照執行頻率多次執行 PromQL 查詢，每次都觸發才生成告警；如果持續時長置為 0，表示只要有一次 PromQL 查詢觸發閾值，就生成告警',
  },
  batch: {
    not_select: '請先選擇策略',
    delete: '刪除告警規則',
    delete_confirm: '確認刪除選中的告警規則嗎？',
    delete_success: '刪除成功',
    import: {
      title: '匯入告警規則',
      name: '告警規則',
      result: '匯入結果',
      errmsg: '錯誤資訊',
    },
    import_builtin: '匯入內置告警規則',
    export: {
      title: '匯出告警規則',
      copy: '複製 JSON 內容到剪貼簿',
    },
    update: {
      title: '更新告警規則',
      name: '批量更新',
      field: '字段',
      changeto: '改為',
      enable_in_bg_tip: '根據告警事件中的 ident 歸屬關係判斷',
      callback_cover: {
        mode: '模式',
        cover: '覆蓋',
        callback_add: '新增',
        callback_del: '刪除',
      },
      effective_time_msg: '生效時間不能為空',
      effective_time_add: '新增生效時間',
      options: {
        datasource_ids: '數據源',
        severity: '告警級別',
        prom_eval_interval: '執行頻率',
        prom_for_duration: '持續時長',
        disabled: '啟用',
        effective_time: '生效時間',
        enable_in_bg: '僅在本業務組生效',
        append_tags: '附加標籤',
        notify_channels: '通知媒介',
        notify_groups: '告警接收組',
        notify_recovered: '啟用恢復通知',
        notify_repeat_step: '重複傳送頻率',
        recover_duration: '留觀時長',
        notify_max_number: '最大發送次數',
        callbacks: '回撥地址',
        note: '備註',
        runbook_url: '預案連結',
        service_cal_ids: '服務日曆',
      },
    },
  },
  brain_result_btn: '訓練結果',
  testTip: `
  规则有效性检查，包括以下检查项：<br />
  1. 用户联系方式有效性检查
  `,
  default_filter: {
    title: '預置篩選',
    all: '全部規則',
  },
  ruleConfigPromVersion: '規則模式',
  ruleConfigPromVersion_v1: '普通模式',
  ruleConfigPromVersion_v2: '高級模式',
  ruleConfigPromVersion_tip:
    '普通模式：在PromQL 中配置警告閾值，查詢條件和閾值設定在一起，沒有特殊需求，使用普通模式即可<br />高級模式：查詢條件和閾值設定分開，如果有多個查詢條件需要做加減乘除計算，可以使用進階模式，在警告事件的現場值中會將每個查詢條件的數值顯示出來',
  ruleConfigPromVersionV2: {
    query: {
      title: '查詢條件',
    },
  },
  preview: '數據預覽',
  table: {
    group_id: '業務組',
    cate: '類型',
    datasource_ids: '數據源',
    name: '名稱',
    append_tags: '附加標籤',
    notify_groups_obj: '告警接收組',
    update_at: '更新時間',
    update_by: '更新者',
    disabled: '啟用',
    severity: '級別',
  },
  relabel: {
    title: '事件 relabel',
    if_placeholder: '選填，滿足此匹配條件的事件才進行標籤 relabel',
    target_label_placeholder: '新增標籤的 key',
    replacement_placeholder: '標籤最終的 value，如果配置了 separator 此字段可不填，如果配置了 regex 此字段可使用正則中匹配的內容來構建最終的目標值',
    source_labels_placeholder: '選填，使用的原始標籤',
    separator_placeholder: '選填，根據已有的標籤值拼接，用來拼接 value 的連字符',
    regex_placeholder: '選填，根據已有標籤值部分內容構建，提取構建內容的正則',
    labelkeep: {
      regex_placeholder: '必填，支持正則，標籤key匹配到的標籤會保留',
    },
    labeldrop: {
      regex_placeholder: '必填，支持正則，標籤key匹配到的標籤會被刪除',
    },
    labelmap: {
      regex_placeholder: '必填，使用正則提取內容',
    },
  },
};

export default zh_HK;
