import './style.css'
import { $ } from 'jquery'
import 'jquery-ui/ui/core'
import 'jquery-ui/ui/widgets/datepicker'
import Mustache from 'mustache'
import { initializeDatepicker } from './datepicker.js'
import { getInitData, getActivities } from './fetchData.js'

$(document).ready(init)
function init() {
  initializePage(new Date())

  // 初始化日期选择器并绑定事件
  initializeDatepicker((selectedDate) => updateSelectedActivities(selectedDate))
}
// 更新支持的类型列表
function updateSupportedTypes(supportedTypes) {
  const template = $('#supportedTypesTemplate').html()
  const html = Mustache.render(template, { supportedTypes })
  $('#supportedTypes').html(html)
}

// 更新活动列表
function updateActivities(activities, containerId, templateId, date, day) {
  const template = $(templateId).html()
  const html = Mustache.render(template, { date, day, activities })
  $(containerId).html(html)
}

// 获取页面初始化数据并更新页面
function initializePage(date) {
  const { supportedTypes, dailyActivities } = getInitData(date)
  updateSupportedTypes(supportedTypes)
  updateActivities(
    dailyActivities,
    '#todayActivities',
    '#dailyActivitiesTemplate'
  )
}

// 选择日期后更新活动列表
function updateSelectedActivities(selectedDate) {
  const activities = getActivities(selectedDate)
  const selectedDay = new Date(selectedDate).toLocaleDateString('zh-CN', {
    weekday: 'long',
  })
  updateActivities(
    activities,
    '#selectedActivities',
    '#selectedActivitiesTemplate',
    selectedDate,
    selectedDay
  )
}
