pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                 sh '"echo "123abc!" | sudo -S ls /root'
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