// build: 빌드 시스템에 영향을 주는 변경사항(example scopes: gulp, broccoli, npm)
// ci: CI 파일 및 스크립트 변경 (example scopes: Travis, Circle, BrowserStack, SauceLabs)
// docs: 문서만 변경 시
// feat: 새로운 기능
// fix: 버그 수정
// perf: 성능 향상을 시키는 코드
// refactor: 버를 수정하거나 기능을 추가하지 않는 코드 변경
// style: 코드의 의미에 영향을 주지 않는 변경사항 (white-space, formatting, missing semi-colons, etc)
// test: 테스스트 추가 및 수정

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-leading-blank": [1, "always"],
    "body-max-line-length": [2, "always", 100],
    "footer-leading-blank": [1, "always"],
    "footer-max-line-length": [2, "always", 100],
    "header-max-length": [2, "always", 100],
    "scope-case": [2, "always", "lower-case"],
    "subject-case": [
      2,
      "never",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
        "translation",
        "security",
        "changeset",
      ],
    ],
  },
};
