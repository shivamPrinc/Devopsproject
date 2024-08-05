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
                              userRemoteConfigs: [[url: 'https://github.com/shivamPrinc/Devopsproject.git']]])
                }
            }
        }

        stage('Set Up Node.js') {
            steps {
                // Download and install NVM, then use it to install and set Node.js version
                script {
                    bat '''
                        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
                        set "NVM_DIR=%USERPROFILE%\\.nvm"
                        set "PATH=%NVM_DIR%;%PATH%"
                        nvm install %NODE_VERSION%
                        nvm use %NODE_VERSION%
                    '''
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
