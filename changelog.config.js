// https://github.com/streamich/git-cz

const COMMIT_TYPES = {
  chore: {
    description: "Build process or auxiliary tool changes",
    value: "chore",
  },
  ci: {
    description: "CI related changes",
    emoji: "🎡",
    value: "ci",
  },
  docs: {
    description: "Documentation only changes",
    value: "docs",
  },
  feat: {
    description: "A new feature",
    value: "feat",
  },
  fix: {
    description: "A bug fix",
    value: "fix",
  },
  perf: {
    description: "A code change that improves performance",
    value: "perf",
  },
  refactor: {
    description: "A code change that neither fixes a bug or adds a feature",
    value: "refactor",
  },
  release: {
    description: "Create a release commit",
    value: "release",
  },
  style: {
    description: "Markup, white-space, formatting, missing semi-colons...",
    value: "style",
  },
  test: {
    description: "Adding missing tests",
    value: "test",
  },
  internal: {
    description: "Internal refactor/change/feature",
    value: "internal",
  },
};

module.exports = {
  disableEmoji: true,
  scopes: [],
  questions: ["type", "scope", "subject", "issues", "lerna"],
  types: COMMIT_TYPES,
  list: Object.keys(COMMIT_TYPES),
};
