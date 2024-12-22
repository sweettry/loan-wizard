export interface Metric {
  title: string;
  value: string;
  change: {
    value: string;
    trend: 'up' | 'down';
  };
}

export const contactAttemptMetrics: Metric[] = [
  { title: 'Calls', value: '124', change: { value: '12%', trend: 'up' } },
  { title: 'Texts', value: '856', change: { value: '8%', trend: 'up' } },
  { title: 'Emails', value: '2,431', change: { value: '15%', trend: 'up' } },
];

export const salesActivityMetrics: Metric[] = [
  { title: 'Pitches', value: '120', change: { value: '15%', trend: 'up' } },
  { title: 'Doc Walks', value: '34', change: { value: '2%', trend: 'down' } },
];

export const soldMetrics: Metric[] = [
  { title: 'Sold', value: '67', change: { value: '5%', trend: 'up' } },
  { title: 'GAP', value: '43', change: { value: '3%', trend: 'down' } },
  { title: 'VSC', value: '89', change: { value: '10%', trend: 'up' } },
  {
    title: 'Other Products',
    value: '156',
    change: { value: '7%', trend: 'up' },
  },
];

export const fundedMetrics: Metric[] = [
  { title: 'Funded', value: '$1.2M', change: { value: '20%', trend: 'up' } },
  { title: 'Deals', value: '38', change: { value: '5%', trend: 'up' } },
  { title: 'GAP', value: '38', change: { value: '5%', trend: 'up' } },
  { title: 'VSC', value: '76', change: { value: '8%', trend: 'up' } },
  {
    title: 'Other Products',
    value: '132',
    change: { value: '4%', trend: 'up' },
  },
];
