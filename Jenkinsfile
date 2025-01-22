pipeline {
    agent any

    stages {
        // stage('Checkout Code') {
        //     steps {
        //         // Checkout code from the repository
        //         checkout scm
        //     }
        // }

        stage('Checkout Code') {
            steps {
                // Replace with your Git repository URL and branch
                git branch: 'main', url: 'https://github.com/Rahul-kashyap1/playwrightPipeline.git'
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
        stage('Install playwright') {
            steps {
                // Install project dependencies
                bat '''
                npx playwright install
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
