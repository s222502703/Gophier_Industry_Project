pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                script {
                    echo 'Checking out the code from the Git repository...'
                    // Use credentials for checkout
                    git branch: 'main', url: 'https://github.com/s222502703/Gophier_Industry_Project.git', credentialsId: 'github-token'
                }
            }
        }
        
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
