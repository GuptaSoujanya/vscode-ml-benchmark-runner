export function getDashboardHtml(model: string, gsm8k: string, ttft: string): string {
  return `<!DOCTYPE html><html><body><h1>ML Benchmark Dashboard</h1><p>Model: ${model}</p><p>GSM8K: ${gsm8k}</p><p>TTFT: ${ttft}</p></body></html>`;
}
