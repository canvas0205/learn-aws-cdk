dockerで起動するときは.awsに以下のファイルを設置します  
.aws/credentials
```
[default]
aws_access_key_id=ここにアクセスキーを入れる
aws_secret_access_key=ここにシークレットアクセスキーを入れる
```

.aws/config
```
[default]
region=ap-northeast-1
output=yaml
```

