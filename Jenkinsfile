pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                 sh 'sudo ls /root'
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