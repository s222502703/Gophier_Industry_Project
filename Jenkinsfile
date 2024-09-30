pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out the code from the Git repository...'
                git url: 'https://github.com/s222502703/Gophier_Industry_Project.git', branch: 'main', credentialsId: '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'
            }
        }
        // Add other stages (Build, Test, etc.) here...
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
