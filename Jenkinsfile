pipeline {
    agent any
    environment {     
        DOCKERHUB_LOGIN= credentials('DOCKERHUB')     
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
        stage('DockerLogin') {
            steps {
                // sh 'docker login -u $DOCKERHUB_LOGIN_USR -p $DOCKERHUB_LOGIN_PSW'
                sh 'echo $DOCKERHUB_LOGIN_PSW | sudo docker login -u $DOCKERHUB_LOGIN_USR --password-stdin'  
            }
        }
        stage('ImagePush') {
            steps {
                // sh 'docker login -u $DOCKERHUB_LOGIN_USR -p $DOCKERHUB_LOGIN_PSW'
                sh 'sudo docker push thihathura/node'  
            }
        }

    stage ('scan_and_clear') {  
    input {
            message "Should we continue?"
                }
        parallel {
        stage('scan_image') {
            steps {
                build 'image_scan'
            }
        }
    }
        post { 
            always { 
                sh 'sudo docker stop $(docker ps -aq) && docker system prune -fa'
                sh 'docker logout'
            }
        }
      }
    }
}





