import { spawn } from 'child_process';

export class BenchmarkRunner {
  run(model: string, task: string) {
    return spawn('python3', ['-m', 'eval_harness.cli', '--model', model, '--tasks', task]);
  }
}
