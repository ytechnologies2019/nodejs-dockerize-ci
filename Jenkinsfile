pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                 sh 'sudo docker build -t node .'
            }
        }
        stage('Run') {
            steps {
                sh 'sudo docker run -dp 3000:3000 --name node node'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
        post { 
            always { 
                sh 'sudo docker stop node && docker system prune -fa'
            }
        }
    }
}