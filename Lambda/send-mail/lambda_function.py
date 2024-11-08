import json
import smtplib
import ssl
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def lambda_handler(event, context):
    # リクエストからデータを取得
    name = event.get("name")
    email = event.get("email")
    comment = event.get("comment")

    # メールの設定
    smtp_server = os.environ["SMTP_SERVER"]  # XserverのSMTPサーバー
    smtp_port = 465
    smtp_user = os.environ["SMTP_USER"]  # 環境変数から取得
    smtp_password = os.environ["SMTP_PASSWORD"]  # 環境変数から取得

    # メールの内容を作成
    msg = MIMEMultipart()
    msg["From"] = smtp_user
    msg["To"] = os.environ["TO_MAIL_ADDRESS"] # 送信先のメールアドレス
    msg["Subject"] = f"Contact Form Submission from {name}"

    # メール本文
    body = f"Name: {name}\nEmail: {email}\n\nComment:\n{comment}"
    msg.attach(MIMEText(body, "plain"))

    # メール送信
    try:
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL(smtp_server, smtp_port, context=context) as server:
            server.login(smtp_user, smtp_password)
            server.sendmail(smtp_user, "takeshi-iwata@t-i-connect.com", msg.as_string())

        return {
            "statusCode": 200,
            "body": json.dumps({"message": "Email sent successfully"}),
        }
    except Exception as e:
        print(f"Error sending email: {e}")
        return {
            "statusCode": 500,
            "body": json.dumps({"message": "Failed to send email"}),
        }
