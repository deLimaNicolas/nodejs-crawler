module "server" {
  source   = "./server"
  ami-id   = "ami-0d6621c01e8c2de2c"
  key-pair = aws_key_pair.server.key_name
  name     = "server"
}

module "logstash" {
  source   = "./logstash"
  ami-id   = "ami-0d6621c01e8c2de2c"
  key-pair = aws_key_pair.server.key_name
  name     = "logstash"
}

module "elastic" {
  source   = "./elasticsearch"
  ami-id   = "ami-0d6621c01e8c2de2c"
  key-pair = aws_key_pair.server.key_name
  name     = "elastic"
}

module "kibana" {
  source   = "./kibana"
  ami-id   = "ami-0d6621c01e8c2de2c"
  key-pair = aws_key_pair.server.key_name
  name     = "kibana"
}

