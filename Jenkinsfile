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
                // Download and install NVM for Windows, then use it to install and set Node.js version
                script {
                    bat '''
                        powershell -Command "Invoke-WebRequest https://github.com/coreybutler/nvm-windows/releases/download/1.1.7/nvm-setup.exe -OutFile nvm-setup.exe"
                        nvm-setup.exe /S
                        setx NVM_HOME "C:\\Program Files\\nvm"
                        setx PATH "%PATH%;C:\\Program Files\\nvm;C:\\Program Files\\nodejs"
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
