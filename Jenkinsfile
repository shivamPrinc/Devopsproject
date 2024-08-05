pipeline {
    agent {
        label 'windows' // Use a Windows agent
    }

    environment {
        NODE_VERSION = '14' // Node.js version to use
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Checkout the code from GitHub
                checkout([$class: 'GitSCM', 
                          userRemoteConfigs: [[url: 'https://github.com/username/todo-app.git']]])
            }
        }

        stage('Set Up Node.js') {
            steps {
                // Install Node.js and set the version
                script {
                    bat 'nvm install %NODE_VERSION%'
                    bat 'nvm use %NODE_VERSION%'
                }
            }
        }

        stage('Install @testing-library/jest-dom') {
            steps {
                // Install @testing-library/jest-dom package
                bat 'npm install @testing-library/jest-dom@latest'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install project dependencies
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Run tests
                bat 'npm test'
            }
        }
    }

    post {
        always {
            // Clean up workspace or perform other post-build actions if necessary
            cleanWs()
        }
    }
}
