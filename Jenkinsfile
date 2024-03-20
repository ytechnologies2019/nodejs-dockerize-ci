pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                 sh 'sudo docker build -t node .'
            }
        }
        stage('RUN') {
            steps {
                sh 'docker run -dp 3000:3000 --name node node'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}