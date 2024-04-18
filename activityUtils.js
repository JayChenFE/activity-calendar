import {
  getTargetDayOfWeek,
  isDateIntervalMatch,
  isDaysBeforeMonthEnd,
} from './dateUtils.js'

const activityHandlers = {
  daily: getDailyActivity,
  weekly: getWeeklyActivity,
  monthly: getMonthlyActivity,
  interval: getIntervalActivity,
}

// 根据日期和规则获取活动列表
function getActivitiesByDate(rules, date) {
  const activities = []
  const targetDayOfWeek = getTargetDayOfWeek(date)

  for (const rule of rules) {
    const activity = getActivityByRule(rule, targetDayOfWeek, date)
    if (activity) {
      activities.push(activity)
    }
  }

  return activities
}

// 根据规则类型调用相应的处理程序
function getActivityByRule(rule, targetDayOfWeek, date) {
  const { type } = rule
  const handler = activityHandlers[type]
  if (handler) {
    return handler({ rule, targetDayOfWeek, date })
  }
  return null
}

// 获取每日活动
function getDailyActivity({ rule }) {
  const { start_time, content } = rule
  return {
    time: start_time,
    content,
  }
}

// 获取每周活动
function getWeeklyActivity({ rule, targetDayOfWeek }) {
  const { start_time, content, day_of_week } = rule
  if (day_of_week === targetDayOfWeek) {
    return {
      time: start_time,
      content,
    }
  }
  return null
}

// 获取间隔活动
function getIntervalActivity({ rule, date }) {
  const { start_time, content, start_date, interval_days } = rule
  if (isDateIntervalMatch(start_date, date, interval_days)) {
    return {
      time: start_time,
      content,
    }
  }
  return null
}

// 获取每月活动
function getMonthlyActivity({ rule, date }) {
  const { start_time, content, days_before_month_end } = rule

  if (days_before_month_end === null || days_before_month_end === undefined) {
    return null
  }

  if (isDaysBeforeMonthEnd(date, days_before_month_end)) {
    return {
      time: start_time,
      content,
    }
  }
  return null
}

export { getActivitiesByDate }
