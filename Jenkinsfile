pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                echo 'Building the project using Maven...'
                // Use Maven to build the project, with Git repository already checked out
                sh 'mvn clean install'
            }
        }
        // Add other stages (Test, Deploy, etc.) here...
    }

    // Define the Git repository and branch at the pipeline level
    options {
        // Automatically check out the code from the Git repository
        git url: 'https://github.com/s222502703/Gophier_Industry_Project.git', branch: 'main', credentialsId: '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'
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
