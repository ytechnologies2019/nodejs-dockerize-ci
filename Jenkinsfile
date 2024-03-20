pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                 sh 'sudo docker build -t nodejs .'
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