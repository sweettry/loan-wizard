import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Pipeline } from "@/components/pipeline";

import { MainNav } from "@/components/main-nav";
import { MetricsOverview } from "@/components/metrics-overview";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <MainNav />
      <div className="flex-1 p-8">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Good afternoon, Erica</h1>
          <Select defaultValue="last-week">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last-week">Last week</SelectItem>
              <SelectItem value="last-month">Last month</SelectItem>
              <SelectItem value="last-year">Last year</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="p-8">
          <h1 className="mb-6 text-2xl font-semibold">Dashboard</h1>
          <div className="space-y-6">
            <MetricsOverview />
            <Pipeline />
          </div>
        </div>
      </div>
    </div>
  );
}
