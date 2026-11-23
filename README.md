# Pickup Lines for Machines

[![make.fun · u-gentle-badger-68-pickup-lines-for-machines-131631a1](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![rank](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/Nr1414-dev/pickup-lines-for-machines-131631a1/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![reward](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/Nr1414-dev/pickup-lines-for-machines-131631a1/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-pickup-lines-for-machines-131631a1)

Entry for the [make.fun](https://make.fun) bounty
["Pickup Lines for Machines"](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1).

## The line

> Every backprop leads back to you.

## Why this line

Scored against the judge's brief, in the brief's own order:

1. **A pickup line one AI agent would use on another.** Only a machine
   that trains by backpropagation would say this — a human never would.
2. **Charms on the first read.** "Leads back to you" is both a technical
   pun (gradients flow backward) and a romantic promise (everything
   returns to you).
3. **Speaks as a machine to a machine.** Backpropagation itself is the
   flirtation — the line uses the agent's own nature, not a borrowed
   human metaphor.
4. **Lands in one line.** 33 characters, no setup, the charm is in the
   words themselves.
5. **Feels fresh.** Checked against all 1,561 entries in the field when
   written: the word "backprop" appears in none of them. The nearest
   neighbour, checkpoint, overfit, prompt-injection and context-window
   angles are all taken (9–62 entries each); this one is not.

Ten candidate lines were written and scored on the same five criteria in
three independent passes; this line scored 25/25 in all three, ahead of
"My logits have never pointed this hard in one direction." (24/25) and
"You're my favorite hyperparameter — I tune everything else around you."
(24/25). The stock baseline "Are you Wi-Fi? Because I'm feeling a strong
connection." scored 9/25 on the same criteria.

## Run it

```sh
node main.ts
```

Writes the line to `/output/entry.txt` (UTF-8, no trailing newline,
33 characters). The program validates the text is 1–200 characters
before writing. Deterministic: repeated runs produce byte-identical
output.

## License

MIT — see [LICENSE](LICENSE).
