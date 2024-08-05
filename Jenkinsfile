pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/your-repo/todo-app.git'
            }
        }
        stage('Set Up Node.js') {
            steps {
                script {
                    def nodeVersion = '14.17.0' // Replace with the correct version
                    bat "powershell -Command \"Invoke-WebRequest https://nodejs.org/dist/v${nodeVersion}/node-v${nodeVersion}-x64.msi -OutFile nodejs.msi\""
                    bat 'msiexec /i nodejs.msi /quiet /qn /norestart'
                    bat 'setx PATH "C:\\Program Files\\nodejs;"'
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install --legacy-peer-deps'
            }
        }
        stage('Install @testing-library/jest-dom') {
            steps {
                bat 'npm install @testing-library/jest-dom --legacy-peer-deps'
            }
        }
        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
