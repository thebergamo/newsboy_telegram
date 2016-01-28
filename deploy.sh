#!/bin/sh

set -e

echo "==> Packaging your NewsBoy!"
webpack -p
echo "==> Upload to Webtask.io"
test -z "$MONGO_URL" &&
  echo "==> MONGO_URL must set before run DEPLOY!" &&
  exit 0;

wt create --secret MONGO_URL=$MONGO_URL build/newsboy.js
echo "==> DONE!"

