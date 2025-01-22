pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                // Checkout code from the repository
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install project dependencies
                bat '''
                npm install
                '''
            }
        }

        stage('Run Playwright Tests') {
            steps {
                // Run Playwright tests
                bat '''
                npx playwright test
                '''
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished!'
        }
        success {
            echo 'Tests ran successfully.'
        }
        failure {
            echo 'Tests failed. Check the logs for details.'
        }
    }
}
