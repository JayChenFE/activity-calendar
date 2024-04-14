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

const activityHandlers = {
  daily: getDailyActivity,
  weekly: getWeeklyActivity,
  interval: getIntervalActivity,
}

function getActivityByRule(rule, targetDayOfWeek, date) {
  const { type } = rule
  const handler = activityHandlers[type]
  if (handler) {
    return handler({ rule, targetDayOfWeek, date })
  }
  return null
}

function getDailyActivity({ rule }) {
  const { start_time, content } = rule
  return {
    time: start_time,
    content,
  }
}

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

function getIntervalActivity({ rule, date }) {
  const { start_time, content, start_date, interval_days } = rule
  if (isDateIntervalMatch(start_date, date, interval_days)) {
    return {
      time: start_time,
      content,
    }
  }
  return null

  function isDateIntervalMatch(start_date, date, interval_days) {
    const startDate = new Date(start_date)
    const currentDate = new Date(date)
    const daysDiff = Math.floor((currentDate - startDate) / (1000 * 3600 * 24))
    return daysDiff >= 0 && daysDiff % interval_days === 0
  }
}

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

export { getActivitiesByDate }
