pipeline {
    agent any

    environment {
        DOCKER_CRED = credentials('DOCKERHUB')
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
                echo '${DOCKER_CRED}'
            }
        }
    }
        post { 
            always { 
                sh 'sudo docker stop node && sudo docker rm node'
            }
        }
}