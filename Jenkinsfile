pipeline {
    agent any

    environment {
        IMAGE_NAME = "ecommerce-website"
        CONTAINER_NAME = "ecommerce-container"
        GIT_URL = "https://github.com/harishreelakshmanakumar/dev_proj.git"
        DOCKER_HUB_USER = "harishree11"
        DOCKER_HUB_PASS = "Hari@1104"
        DOCKER_IMAGE = "harishree11/ecommerce-website"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: env.GIT_URL
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${DOCKER_IMAGE} ."
                }
            }
        }

        stage('Login to Docker Hub') {
            steps {
                script {
                    sh "echo ${DOCKER_HUB_PASS} | docker login -u ${DOCKER_HUB_USER} --password-stdin"
                }
            }
        }

        stage('Push Docker Image to Docker Hub') {
            steps {
                script {
                    sh "docker push ${DOCKER_IMAGE}"
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    sh "docker stop ${CONTAINER_NAME} || true"
                    sh "docker rm ${CONTAINER_NAME} || true"
                    sh "docker run -d -p 8080:80 --name ${CONTAINER_NAME} ${DOCKER_IMAGE}"
                }
            }
        }

        stage('Post Deployment Check') {
            steps {
                script {
                    sh "docker ps | grep ${CONTAINER_NAME}"
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment successful! Visit http://localhost:8080 to see your website.'
        }
        failure {
            echo 'Build failed. Check the logs for details.'
        }
    }
}
