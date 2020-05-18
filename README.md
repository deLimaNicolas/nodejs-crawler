# STATUS : IN PROGRESS

# nodejs-crawler
Crawler using terraform and kafka for logs

# Project
#####  We are going to write a simple crawler that will retrieve data from Mercado Livre(e-commerce) but of course, we`re going to me things more interesting so this repository can give some real use for the community. So check it out some of the features we are going to implement!

# Caching
##### It requires some considerable amount of process to navigate through a web page using a crawler system, and probably we won't have data inserted every minute, that's why we are going to spare some of our process using caching! But our TTL is going to be dynamic, this way I can change depending on our target's traffic.

# Infra as a code!
![terraform](https://miro.medium.com/max/472/1*rmwpOy4OtvgVz3yJvBetuQ.png)
##### We are going to use terraform to set our infrastructure! There will be a folder called infra in our project and it will be responsible for deploying our virtual machine and our Kafka.

# Typescript
![Typescript](https://rafaell-lycan.com/assets/images/posts/intro-typescript.png)
##### We are going to make tests, but also use typescript, this way our code will have a strong foundation of types checking! You can see it as double testing.

# Jest with Supertest
![Jest](https://elo7.dev/images/cover/jest-testar-seu-codigo-javascript-nunca-foi-tao-facil.png)
##### Strong foundations is tests, and I mean real request tests!

# Crawler
##### For this one, we will be using cheerio + request(node), to have a stack with a lot of content on the community and also that will not increase so much the size of our packages.

# Logging

##### The famous ELK stack but instead of logstash we are going to use Kafka thinking of high throughput to take this decision.

# CI/CD

##### circle-ci

