FROM nginx:latest

# Clean default nginx HTML
RUN rm -rf /usr/share/nginx/html/*

# Copy your GitHub project files (index.html, CSS, JS)
COPY . /usr/share/nginx/html/

EXPOSE 80
