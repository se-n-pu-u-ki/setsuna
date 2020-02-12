# 運用ルール

`feat/[issue番号]/[やること]`

# 使い方

①clone
```
git clone git@github.com:se-n-pu-u-ki/setsuna.git
```

②開発用サーバ
```
cd setsuna
npm install 
npm start
```
③開発
```
git pull
```
1コミットあたりの作業量を意識しながら作業をする

④確認
```
git status
git diff
```

⑤push
```
git add .
git commit -m ''
git push -u origin feat/[issue番号]/[やること]
```