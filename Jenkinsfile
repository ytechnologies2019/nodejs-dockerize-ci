pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'whoami'
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