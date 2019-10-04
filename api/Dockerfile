FROM php:7.3-apache

LABEL version="1.0.0"
LABEL name="palonponjovertlota"
LABEL repository="https://github.com/palonponjovertlota/me"
LABEL homepage="https://github.com/palonponjovertlota/me/api"
LABEL maintainer="Jovert Palonpon <palonponjovertlota@gmail.com>"

ENV APP_PATH=/var/www/html

# Install linux utilities
RUN apt-get update && apt-get install -y \
    curl \
    zip \
    unzip

# Remove all the repositories
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extentions
RUN docker-php-ext-install bcmath mbstring

# Copy virtual host file
COPY apache.conf /etc/apache2/sites-available

# Configure && restart apache2
RUN a2enmod rewrite \
    && a2enmod headers \
    && a2enmod ssl \
    && service apache2 restart

# This will override default PHP configuration variables
COPY php.ini /usr/local/etc/php/conf.d/local.ini:ro

COPY . ${APP_PATH}

RUN chmod -R 775 ${APP_PATH}/storage

EXPOSE 80