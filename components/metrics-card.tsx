import { Metric } from '@/lib/metric-data';

export function MetricCard({ metric }: { metric: Metric }) {
  return (
    <div className='space-y-1'>
      <p className='text-muted-foreground text-sm'>{metric.title}</p>
      <p className='text-3xl font-semibold'>{metric.value}</p>
      <div className='flex items-center gap-1'>
        <span
          className={`inline-flex items-center rounded-md px-1 py-0.5 text-xs font-medium ${
            metric.change.trend === 'up'
              ? 'bg-green-50 text-green-700'
              : 'bg-red-50 text-red-700'
          }`}
        >
          {metric.change.trend === 'up' ? '+' : ''}
          {metric.change.value}
        </span>
        <span className='text-muted-foreground text-xs'>from last week</span>
      </div>
    </div>
  );
}
