const dayOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

// 获取目标日期的星期几
function getTargetDayOfWeek(date) {
  const targetDate = new Date(date)
  const targetDayOfWeek = dayOfWeek[targetDate.getDay()]
  return targetDayOfWeek
}

// 判断日期是否符合间隔要求
function isDateIntervalMatch(start_date, date, interval_days) {
  const startDate = new Date(start_date)
  const currentDate = new Date(date)
  const daysDiff = Math.floor((currentDate - startDate) / (1000 * 3600 * 24))
  return daysDiff >= 0 && daysDiff % interval_days === 0
}

function isDaysBeforeMonthEnd(date, days_before_month_end) {
  const currentDate = new Date(date)
  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  )
  const targetDate = new Date(date)
  targetDate.setDate(targetDate.getDate() + days_before_month_end)
  return (
    targetDate.getMonth() === lastDayOfMonth.getMonth() &&
    targetDate.getDate() === lastDayOfMonth.getDate()
  )
}

function isLastDayOfMonth(date) {
  const currentDate = new Date(date)
  const nextDay = new Date(date)
  nextDay.setDate(currentDate.getDate() + 1)
  return nextDay.getDate() === 1
}

export {
  getTargetDayOfWeek,
  isDateIntervalMatch,
  isLastDayOfMonth,
  isDaysBeforeMonthEnd,
}
