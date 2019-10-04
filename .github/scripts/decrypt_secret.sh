#!/usr/bin/env bash

# --batch to prevent interactive command --yes to assume "yes" for questions
gpg --quiet --batch --yes --decrypt --passphrase="$SECRET_PASSPHRASE" --output $APP/.env .github/secrets/$APP.env.gpg