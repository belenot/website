FROM nginx

RUN mkdir -p /var/www/website

COPY ui/public/ /var/www/website/
COPY ui/nginx.conf /etc/nginx/nginx.conf

#ENTRYPOINT java -jar app.jar $JAVA_ARGS