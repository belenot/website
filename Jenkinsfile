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
                    sh "./gradlew --no-daemon publish  -PsnapshotsRepo=http://nexus.alpha.belenot.com:8081/repository/maven-snapshots/ -PrepoUser=admin -PrepoPass=nexus_password"
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
                    sh "ansible-galaxy install -r requirements.yml"
                    sh "ansible-playbook playbook.yml -t website -i aws-inventory.py"
                }
            }
        }
    }
}