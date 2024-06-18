FROM python:3.8-slim-buster
WORKDIR /app
ADD ./packages/twitter-server/ /app
RUN pip install --no-cache-dir -r requirements.txt
EXPOSE 3003
CMD ["python", "main.py"]