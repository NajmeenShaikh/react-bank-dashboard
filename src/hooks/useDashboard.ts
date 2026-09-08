import { useQuery } from "@tanstack/react-query";
import { getDashboardSummary } from "../services/bankingApi";

export function useDashboard() {
  return useQuery({
    queryKey: ["dashboard-summary"],
    queryFn: getDashboardSummary,
    staleTime: 30_000,
  });
}
