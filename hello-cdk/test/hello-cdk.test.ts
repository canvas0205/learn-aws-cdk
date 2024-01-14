import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as HelloCdk from '../lib/hello-cdk-stack';

test('HelloCdkStack S3 Bucket Created', () => {
  const app = new cdk.App();
  const stack = new HelloCdk.HelloCdkStack(app, 'MyTestStack');
  const template = Template.fromStack(stack);

  template.hasResourceProperties("AWS::S3::Bucket", {
    // リソース名がAWS::S3::Bucketの場合に指定できるプロパティ一覧
    // 2024/1/14現在、removalPolicyとautoDeleteObjectsはないので確認できない
    // https://docs.aws.amazon.com/ja_jp/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html
    BucketName: "test-bucket",
    VersioningConfiguration: {
      Status: 'Enabled',
    },
  });
});
