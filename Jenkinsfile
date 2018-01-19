pipeline {
  agent {
    docker {
      image 'node:8.9.4'
      args '-p 3000:3000'
    }
    
  }
  stages {
    stage('Build') {
      steps {
        sh '''tar -xf ./node_modules.tar ./node_modules || true
rm -f ./node_modules.tar

yarn install

gulp build

tar -cf ./node_modules.tar ./node_modules
rm -rf ./node_modules'''
      }
    }
  }
}