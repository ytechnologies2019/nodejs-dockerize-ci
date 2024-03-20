pipeline {
    agent any
    environment {     
        DOCKER_CREDS = credentials('DOCKERHUB')    
    } 

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
        stage('ImageBuild') {
            steps {
                sh 'docker commit -m "node" -a "node" node thihathura/node'
            }
        }
        stage('ImagePush') {
            steps {
                // sh 'docker login -u $DOCKERHUB_CREDS_USR -p $DOCKERHUB_CREDS_PSW'
                sh 'echo DOCKER_CREDS_PSW | sudo docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
    }
        post { 
            always { 
                sh 'sudo docker stop node && sudo docker rm node'
            }
        }
}