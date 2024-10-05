pipeline {
    agent any 
    tools {
        maven 'M3'  // Ensure Jenkins has a Maven installation configured as 'M3'
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building the project using Maven...'
                // Maven build
                sh 'mvn clean install'
            }
        }

       stage('Save Build Outputs') {
    steps {
        echo 'Archiving build outputs...'
        // Archive multiple artifacts including jar, logs, and reports
        archiveArtifacts artifacts: 'target/**/*.jar, target/**/*.log, target/site/**/*', fingerprint: true
    }
}


        stage('Test') {
            steps {
                echo 'Running unit tests using JUnit...'
                // Run tests with Maven
                sh 'mvn test'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully, all tests passed!'
        }
        failure {
            echo 'Pipeline failed. Check the logs for details.'
        }
        always {
            // Uncomment this when test reports are available
            // junit '**/target/surefire-reports/*.xml' // Collect test results (JUnit reports)

            // Optional: Clean up the workspace after the build
            cleanWs()
        }
    }
}
