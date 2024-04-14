import rules from './rules.js'
import { getActivitiesByDate } from './activityUtils.js'
// 获取支持的活动类型
function getSupportedTypes() {
  const supportedTypes = [...new Set(rules.map((rule) => rule.name))]
  return supportedTypes
}

function getActivities(date) {
  const activities = getActivitiesByDate(rules, date)
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
