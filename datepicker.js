function initializeDatepicker(onSelectFn) {
  $.datepicker.regional['zh-CN'] = {
    closeText: '关闭',
    prevText: '<上月',
    nextText: '下月>',
    currentText: '今天',
    monthNames: [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月',
    ],
    monthNamesShort: [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月',
    ],
    dayNames: [
      '星期日',
      '星期一',
      '星期二',
      '星期三',
      '星期四',
      '星期五',
      '星期六',
    ],
    dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
    weekHeader: '周',
    dateFormat: 'yy-mm-dd',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: true,
    yearSuffix: '年',
  }

  $.datepicker.setDefaults($.datepicker.regional['zh-CN'])
  $('#datepicker').datepicker({
    dateFormat: 'yy-mm-dd',
    showOtherMonths: true,
    selectOtherMonths: true,
    beforeShow: function (input, inst) {
      setTimeout(function () {
        inst.dpDiv.css({
          'z-index': 1000,
        })
        $('#mask').show()
      }, 0)
    },
    onClose: function () {
      $('#mask').hide()
    },
    onSelect: onSelectFn,
  })
}

export { initializeDatepicker }
