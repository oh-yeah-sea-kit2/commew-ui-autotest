# commew-ui-autotest

## 環境構築
```
npm install
npx selenium-standalone install
```

## テスト実施
※２つターミナルを用意し、実行
```
npx selenium-standalone start -- -port 5555
npx codeceptjs run
```