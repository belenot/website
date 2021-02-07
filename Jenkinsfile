pipeline {
    agent any

    stages {
        stage('Fetch from git.') {
            steps {
                dir("website") {
                    git url: "git@github.com:belenot/website.git", branch: "main"
                }
            }
        }

        stage('Gradle publish.') {
            steps {
                dir("website") {
                    sh "./gradlew publish"
                }
            }
        }

        stage('Fetch from infrastructure.') {
            steps {
                dir("infrastructure") {
                    git url: "git@github.com:belenot/infrastructure.git", branch: "develop"
                }
            }
        }

        stage('Ansible for website.') {
            steps {
                dir('infrastructure') {
                    sh "ansible-playbook playbook -t website -i aws-inventory.py"
                }
            }
        }
    }
}