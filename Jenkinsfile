pipeline {
    agent any

 
        stage('Build') {
            steps {
                script {
                    echo 'Building the project...'
                    withMaven(maven: 'Maven 3.8.1') {  // Use the name of your configured Maven
                        sh 'mvn clean package'  // This will generate the JAR in the target directory
                    }
                }
            }
        }
        // Additional stages (Test, Code Quality Analysis, Deploy) go here...
    }
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Please check the logs for more information.'
        }
    }
}
