import rules from './rules.js'
// 获取支持的活动类型
function getSupportedTypes() {
  const supportedTypes = [...new Set(rules.map((rule) => rule.name))]
  return supportedTypes
}
// 获取日期对应活动的函数
function getTargetDayOfWeek(date) {
  const dayOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const targetDate = new Date(date)
  const targetDayOfWeek = dayOfWeek[targetDate.getDay()]

  return targetDayOfWeek
}

function getActivities(date) {
  const activities = []
  const targetDayOfWeek = getTargetDayOfWeek(date)

  for (const rule of rules) {
    if (rule.type === 'daily' || rule.day_of_week === targetDayOfWeek) {
      activities.push({
        time: rule.start_time,
        content: rule.content,
      })
    }
  }

  activities.sort((a, b) => {
    return a.time.localeCompare(b.time)
  })

  return activities
}

function getInitData(date) {
  return {
    supportedTypes: getSupportedTypes(),
    dailyActivities: getActivities(date),
  }
}

export { getActivities, getInitData }
