import rules from './rules.js'
import { getActivitiesByDate } from './activityUtils.js'
// 获取支持的活动类型
function getSupportedTypes() {
  const supportedTypes = [...new Set(rules.map((rule) => rule.name))]
  return supportedTypes
}

function getActivities(date) {
  const activities = getActivitiesByDate(rules, date)

  // 使用 Object.groupBy() 方法按照时间分组
  const groupedActivities = Object.groupBy(
    activities,
    (activity) => activity.time
  )
  // 将分组后的结果转换为数组形式
  const result = Object.entries(groupedActivities).map(
    ([time, activities]) => ({
      time,
      contents: activities.map((activity) => activity.content),
    })
  )

  // 对数组按照 time 进行升序排序
  result.sort((a, b) => a.time.localeCompare(b.time))

  return result
}

function getInitData(date) {
  return {
    supportedTypes: getSupportedTypes(),
    dailyActivities: getActivities(date),
  }
}

export { getActivities, getInitData }
