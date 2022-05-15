module.exports = {
  plugins: {
    "postcss-import": {}, // 다른곳에 있는 css 파일 import
    "tailwindcss/nesting": {}, // 중첩 처리나 `@apply`등의 구문 사용가능
    tailwindcss: {},
    autoprefixer: {},
  },
};
