# vscode-ml-benchmark-runner

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![VS Code Extension](https://img.shields.io/badge/VS%20Code-v1.85+-blue.svg)](https://marketplace.visualstudio.com/)

A modern VS Code extension engineered for ML engineers and researchers to run, monitor, and visualize local LLM and VLM benchmarks directly from their development environment.

---

## Architecture

```mermaid
sequenceDiagram
    autonumber
    actor Dev as ML Engineer
    participant UI as VS Code Activity Bar
    participant Ext as BenchmarkRunner Extension
    participant Sub as Local Benchmark Process (eval_harness)

    Dev->>UI: Click 'Run All Benchmarks'
    UI->>Ext: Dispatch mlBenchmark.runAll
    Ext->>Sub: Spawn subprocess with streaming pipes
    Sub-->>Ext: Stream progress & stdout chunks
    Ext-->>Dev: Live Output Channel logging
```

---

## Features

- **Activity Bar Integration:** Inspect available benchmark suites (GSM8K, MMLU, HumanEval, Latency Profiler) directly in the sidebar.
- **Streaming Output Terminal:** Real-time stdout capture without blocking editor threads.
- **Visual Webview Dashboard:** Polished metrics display highlighting accuracy, TTFT (Time-to-First-Token), and pass rates.

---

## License

MIT License (c) 2024 Soujanya Gupta.

<!-- PR #6: docs: clarify benchmark metric configuration options -->
