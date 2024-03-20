pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker build -t nodejs .'
            }
        }
        stage('Test') {
            steps {
                sh 'ls'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}