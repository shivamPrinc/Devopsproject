pipeline {
    agent any

    environment {
        NODE_VERSION = '14.17.0' // Specify the exact Node.js version you want to install
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
                // Download and install Node.js directly
                script {
                    bat '''
                        powershell -Command "Invoke-WebRequest https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-x64.msi -OutFile nodejs.msi"
                        msiexec /i nodejs.msi /quiet /qn /norestart
                        setx PATH "%PATH%;C:\\Program Files\\nodejs"
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
