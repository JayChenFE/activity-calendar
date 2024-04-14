import { initializeDatepicker } from './datepicker.js'
import { getInitData, getActivities } from './fetchData.js'

$(document).ready(init)

function init() {
  const currentDate = new Date()

  // 初始化页面
  initializePage(currentDate)

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
function updateActivities(activities, containerId, date, day) {
  const template = $('#activitiesTemplate').html()
  const html = Mustache.render(template, { date, day, activities })
  $(containerId).html(html)
}

// 获取页面初始化数据并更新页面
function initializePage(date) {
  const { supportedTypes, dailyActivities } = getInitData(date)
  const day = getDayByDate(date)
  updateSupportedTypes(supportedTypes)
  updateActivities(dailyActivities, '#todayActivities', formatDate(date), day)
}

// 选择日期后更新活动列表
function updateSelectedActivities(selectedDate) {
  const activities = getActivities(selectedDate)
  const selectedDay = getDayByDate(selectedDate)
  updateActivities(activities, '#selectedActivities', selectedDate, selectedDay)
}

// 将日期格式化为 YYYY-MM-DD 格式
function formatDate(date) {
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  return `${year}-${month}-${day}`
}

// 获取日期对应的星期几
function getDayByDate(date) {
  return new Date(date).toLocaleDateString('zh-CN', { weekday: 'long' })
}
