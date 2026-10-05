# Claude Code Instructions

Follow the project instructions in [`AGENTS.md`](./AGENTS.md).

## Working Rules

- Read the relevant existing files before making changes.
- Preserve the current Next.js App Router structure and TypeScript types.
- Keep implementations accessible, responsive, and consistent with the existing UI.
- Avoid unrelated refactors or changes to generated files.

## Checks

Before completing a task:

1. Review the changed files.
2. Run `npm run lint`.
3. Run `npm run build` when the change affects routing or production behavior.
4. Report any validation failures clearly.
