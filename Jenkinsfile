pipeline {
    agent any 
    tools(
        maven'M3'    
    )

    stages {
        stage('Build') {
            steps {
                echo 'Building the project using Maven...'
                // Use Maven to build the project
                sh 'mvn clean install'
            }
        }
        // Add other stages (Test, Deploy, etc.) here...
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
