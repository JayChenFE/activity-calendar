const rules = [
  {
    id: 1,
    name: '本服争霸赛竞猜',
    content: '本服争霸赛竞猜(星期三)',
    type: 'weekly',
    day_of_week: 'Wednesday',
    start_time: '21:00',
  },
  {
    id: 2,
    name: '本服争霸赛竞猜',
    content: '本服争霸赛竞猜(星期六)',
    type: 'weekly',
    day_of_week: 'Saturday',
    start_time: '21:00',
  },
  {
    id: 3,
    name: '跨服争霸赛竞猜',
    content: '跨服争霸竞猜',
    type: 'weekly',
    day_of_week: 'Sunday',
    start_time: '21:00',
  },
  {
    id: 4,
    name: '普通拍卖',
    content: '本服拍卖,结束后马上跨服拍卖',
    type: 'daily',
    start_time: '20:15',
  },
  {
    id: 4,
    name: '战场拍卖',
    content: '战场拍卖',
    type: 'weekly',
    day_of_week: 'Sunday',
    start_time: '21:15',
  },
  {
    id: 5,
    name: '试剑天下',
    content: '本周试剑天下(周一至周四),拿箱子',
    type: 'weekly',
    day_of_week: 'Monday',
    start_time: '12:00',
  },
  {
    id: 6,
    name: '试剑天下',
    content: '本周试剑天下结束',
    type: 'weekly',
    day_of_week: 'Thursday',
    start_time: '22:00',
  },
  {
    id: 7,
    name: '圣虚活动',
    content: '圣虚活动:1.圣虚守护,拿星星奖励 2.圣境之巅',
    type: 'weekly',
    day_of_week: 'Monday',
    start_time: '05:00',
  },
  {
    id: 8,
    name: '圣境争夺',
    content: '圣境争夺 周五12:00至周日23:00',
    type: 'weekly',
    day_of_week: 'Friday',
    start_time: '12:00',
  },
  {
    id: 9,
    name: '封魔圣柱',
    content: '封魔圣柱,三天后更新',
    type: 'interval',
    start_date: '2024-04-13',
    interval_days: 3,
    start_time: '05:00',
  },
]

export default rules
