pipeline {
    agent any 
    tools {
        maven 'M3'  // Jenkins should have a Maven installation configured as 'M3'
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building the project using Maven...'
                // Maven build
                sh 'mvn clean install'
            }
        }
        stage ('Archive Artifects'){
            steps{
                archiveArtifacts artifacts: 'target/*.jar', fingerprint: true
            }
        }

        stage('Test') {
            steps {
                echo 'Running unit tests using JUnit...'
                // Run tests with Maven
                sh 'mvn test'
            }
        }

        // Add additional stages (like Deploy, etc.) if needed.
    }

    post {
        success {
            echo 'Pipeline completed successfully, all tests passed!'
        }
        failure {
            echo 'Pipeline failed. Check the logs for details.'
        }
        always {
            junit '**/target/surefire-reports/*.xml' // Collect test results (JUnit reports)
        }
    }
}
