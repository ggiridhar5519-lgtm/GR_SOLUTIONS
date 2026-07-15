pipeline {

    agent any

    stages {

        stage('Checkout Code') {
            steps {
                echo 'Repository checked out successfully.'
            }
        }

        stage('List Workspace Files') {
            steps {
                bat 'dir'
            }
        }

        stage('Verify Git') {
            steps {
                bat 'git --version'
            }
        }

        stage('Verify Java') {
            steps {
                bat 'java -version'
            }
        }

        stage('Build Complete') {
            steps {
                echo 'Website source code verified successfully.'
            }
        }
    }

    post {

        success {
            echo 'Pipeline Completed Successfully!'

            emailext(
                subject: "✅ Jenkins Build SUCCESS - ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """
Hello,

Your Jenkins pipeline completed successfully.

Job Name : ${env.JOB_NAME}
Build No : ${env.BUILD_NUMBER}
Status   : SUCCESS

Build URL:
${env.BUILD_URL}

Regards,
Jenkins CI/CD
""",
                to: "ggiridhar5519@gmail.com"
            )
        }

        failure {
            echo 'Pipeline Failed!'

            emailext(
                subject: "❌ Jenkins Build FAILED - ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """
Hello,

Your Jenkins pipeline has failed.

Job Name : ${env.JOB_NAME}
Build No : ${env.BUILD_NUMBER}
Status   : FAILED

Check the build logs:
${env.BUILD_URL}

Regards,
Jenkins CI/CD
""",
                to: "ggiridhar5519@gmail.com"
            )
        }

        always {
            echo 'Pipeline Execution Finished.'
        }
    }
}
