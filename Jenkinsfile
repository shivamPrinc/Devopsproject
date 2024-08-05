pipeline {
    agent any
     environment {
        NODE_VERSION = '14' // Set the Node.js version
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
                // Install Node.js
                script {
                    bat 'nvm install %NODE_VERSION%'
                    bat 'nvm use %NODE_VERSION%'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install project dependencies
                bat 'npm install'
            }
        }

        stage('Install @testing-library/jest-dom') {
            steps {
                // Install @testing-library/jest-dom
                bat 'npm install @testing-library/jest-dom@latest'
            }
        }

        stage('Run Tests') {
            steps {
                // Run tests
                bat 'npm test'
            }
        }


    post {
        always {
            // Archive test results and build artifacts
            cleanWs()
        }
    }
}
