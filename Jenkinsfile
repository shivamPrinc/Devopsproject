pipeline {
    agent any

    environment {
        NODE_VERSION = '14' // Set the Node.js version
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Checkout the code from GitHub using the credential
                script {
                    def githubCredentials = credentials('github-token')
                    checkout([$class: 'GitSCM', 
                              branches: [[name: '*/master']],
                              userRemoteConfigs: [[url: 'https://github.com/shivamPrinc/Devopsproject.git', credentialsId: 'github-token']]])
                }
            }
        }

        stage('Set Up Node.js') {
            steps {
                // Install Node.js using Chocolatey
                script {
                    bat 'choco install nvm -y'
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
    }

    post {
        always {
            // Clean workspace after build
            cleanWs()
        }
    }
}
