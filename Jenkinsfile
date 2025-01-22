pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Rahul-kashyap1/playwrightPipeline.git'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'echo Running Tests...'
            }
        }
    }
}
