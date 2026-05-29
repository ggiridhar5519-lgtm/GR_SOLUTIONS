pipeline {

    agent any

    environment {
        IMAGE_NAME = "ggiridhar5519/mywebsite"
        TAG = "latest"
    }

    stages {

        stage('Checkout Code') {
            steps {
                echo 'Cloning Repository...'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t %IMAGE_NAME%:%TAG% .'
            }
        }

        stage('Docker Images') {
            steps {
                bat 'docker images'
            }
        }

        stage('Check Kubernetes Connection') {
            steps {
                bat 'kubectl get nodes'
            }
        }

        stage('Deploy To Kubernetes') {
            steps {
                bat 'dir'
                bat 'kubectl apply -f deployment.yaml --validate=false'
            }
        }

        stage('Check Pods') {
            steps {
                bat 'kubectl get pods'
            }
        }
    }

    post {

        success {
            echo 'CI/CD Pipeline Completed Successfully!'
        }

        failure {
            echo 'Pipeline Failed!'
        }
    }
}
