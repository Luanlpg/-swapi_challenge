# Use an official Python runtime as a parent image
FROM ubuntu:latest

# Adding backend directory to make absolute filepaths consistent across services
WORKDIR /app/backend

# Install Python dependencies
COPY requirements.txt /app/backend

RUN apt-get update -y
RUN apt-get install -y python-pip python-dev build-essential
RUN pip install --upgrade pip -r requirements.txt

# Add the rest of the code
COPY . /app/backend

# Make port 5000 available for the app
EXPOSE 5000

ENTRYPOINT ["flask"]
CMD ["run", "--host=0.0.0.0"]
