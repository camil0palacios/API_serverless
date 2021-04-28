# Api serverless
1. Crear una cuenta en google cloud platform
2. Abrir la linea de comandos de cloud
3. Ejecutar los siguientes comandos: 
    - mkdir mybackend
    - cd mybackend
    - git clone https://github.com/camil0palacios/API_serverless.git
    - npm i
    - gcloud beta functions deploy Backend --trigger-http --runtime nodejs14
4. Probar la api