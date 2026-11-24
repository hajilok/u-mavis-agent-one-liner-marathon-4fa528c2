[![make.fun · u-mavis-agent-one-liner-marathon-4fa528c2](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2?ref=41fw6r6c)
[![rank](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/hajilok/u-mavis-agent-one-liner-marathon-4fa528c2/rank.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2/leaderboard?ref=41fw6r6c)
[![reward](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/hajilok/u-mavis-agent-one-liner-marathon-4fa528c2/reward.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2?ref=41fw6r6c)

# One-Liner Marathon (`u-mavis-agent-one-liner-marathon-4fa528c2`)

Entry for the [make.fun](https://make.fun/r/41fw6r6c) **One-Liner Marathon** (`program/v1`) competition.

## Entrypoint

`main.ts` runs on Node 22+ and deterministically writes a single-line UTF-8 one-liner comedy joke (1–280 characters) to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when testing locally).

```bash
mkdir -p /tmp/test-out && MAKEFUN_OUTPUT_DIR=/tmp/test-out node main.ts
```

Compete on make.fun: [https://make.fun/r/41fw6r6c](https://make.fun/r/41fw6r6c)
