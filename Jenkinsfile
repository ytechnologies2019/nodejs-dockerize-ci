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
        stage('Image Create') {
            steps {
                sh 'docker commit -m "node" -a "node" node thihathura/node'
            }
        }
    }
        post { 
            always { 
                sh 'sudo docker stop node && sudo docker rm node'
            }
        }
}