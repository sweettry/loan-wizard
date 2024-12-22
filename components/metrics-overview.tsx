import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MetricCard } from './metrics-card';
import {
  contactAttemptMetrics,
  salesActivityMetrics,
  soldMetrics,
  fundedMetrics,
} from '@/lib/metric-data';

export function MetricsOverview() {
  return (
    <div className='space-y-4'>
      <div className='grid gap-4 md:grid-cols-2'>
        <Card>
          <CardHeader>
            <CardTitle>Contact Attempts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid gap-6 sm:grid-cols-3'>
              {contactAttemptMetrics.map((metric) => (
                <MetricCard key={metric.title} metric={metric} />
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sales Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid gap-6 sm:grid-cols-2'>
              {salesActivityMetrics.map((metric) => (
                <MetricCard key={metric.title} metric={metric} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className='grid gap-4 md:grid-cols-2'>
        <Card>
          <CardHeader>
            <CardTitle>Approvals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
              {soldMetrics.map((metric) => (
                <MetricCard key={metric.title} metric={metric} />
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Funded</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-5'>
              {fundedMetrics.map((metric) => (
                <MetricCard key={metric.title} metric={metric} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
