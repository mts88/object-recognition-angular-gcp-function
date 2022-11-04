# Object Recognition with Angular GCP Function

This function acts as a pass through to the [Cloud Vision JSON API](https://cloud.google.com/vision/docs/request).


## How to use

- Install [firebase cli](https://firebase.google.com/docs/cli#install_the_firebase_cli)
- [Configure GCP Project with Firebase](https://firebase.google.com/docs/ml/android/label-images#configure-your-project)
- Go to GCP > IAM & Admin > Service Accounts > Create JSON key for firebase-sdk and put json file into functions folder
- Authenticate using service-account.json key `export GOOGLE_APPLICATION_CREDENTIALS="service-account.json"`
- Run locally or deploy on GCP 
```shell
npm --prefix "functions" run serve
or 
npm --prefix "functions" run deploy
```