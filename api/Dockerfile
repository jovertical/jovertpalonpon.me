FROM php:7.3-apache

LABEL version="1.0.0"
LABEL name="palonponjovertlota"
LABEL repository="https://github.com/palonponjovertlota/me"
LABEL homepage="https://github.com/palonponjovertlota/me/api"
LABEL maintainer="Jovert Palonpon <palonponjovertlota@gmail.com>"

ENV APP_PATH=/var/www/html

# Install linux utilities
RUN apt-get update && apt-get install -y -qq \
    curl \
    zip \
    unzip

# Remove all the repositories
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extentions
RUN docker-php-ext-install bcmath mbstring

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin/ --filename=composer

# This will override default PHP configuration variables
COPY php.ini /usr/local/etc/php/conf.d/local.ini:ro

# Modify root to `/var/www/html/public`
RUN sed -i -e "s/html/html\/public/g" /etc/apache2/sites-enabled/000-default.conf

# Configure apache
RUN a2enmod rewrite

COPY . ${APP_PATH}

RUN composer install -q --no-ansi --no-interaction --no-scripts --no-suggest --no-progress --prefer-dist

RUN chown -R www-data:www-data ${APP_PATH}
RUN chmod -R 775 ${APP_PATH}/storage

# Replaces default apache port with the $PORT environment variable at runtime.
CMD sed -i "s/80/$PORT/g" /etc/apache2/sites-enabled/000-default.conf /etc/apache2/ports.conf