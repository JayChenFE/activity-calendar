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
]

export default rules
