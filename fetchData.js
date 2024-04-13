import rules from './rules.js'
function getSupportedTypes() {
  const supportedTypes = new Set()
  for (const rule of rules) {
    supportedTypes.add(rule.name)
  }
  return Array.from(supportedTypes)
}
// 获取日期对应活动的函数
function getActivities(date) {
  const activities = []
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
