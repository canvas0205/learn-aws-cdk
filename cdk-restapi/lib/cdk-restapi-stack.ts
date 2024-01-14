import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';

export class CdkRestapiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Lambda関数を作成する
    const getUsersHandler = new NodejsFunction(this, "getUsersHandler", {
      entry: "./lambda/users.ts",           // どのコードを使用するか
      runtime: lambda.Runtime.NODEJS_18_X,  // Lambda関数の実行環境
      handler: "getUsersHandler",           // 実行するハンドラー
    });
    const getUserHandler = new NodejsFunction(this, "getUserHandler", {
      entry: "./lambda/users.ts",
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: "getUserHandler",
    });
    // Error: spawnSync docker ENOENT
    // docker buildが行われるのでesbuildで回避できる

    // REST APIを作成する
    const api = new apigw.RestApi(this, "UserAPI")
    // リソースを定義してLambda関数をGETメソッドに統合する (GET /users)
    const users = api.root.addResource("users")
    users.addMethod("GET", new apigw.LambdaIntegration(getUsersHandler))
    // リソースを定義してLambda関数をGETメソッドに統合する (GET /users/{id})
    const user = users.addResource("{id}")
    user.addMethod("GET", new apigw.LambdaIntegration(getUserHandler))
  }
}
