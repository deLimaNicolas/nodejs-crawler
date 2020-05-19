resource "aws_instance" "elasticsearch" {
  ami                    = var.ami-id
  iam_instance_profile   = var.iam-instance-profile
  instance_type          = var.instance-type
  key_name               = var.key-pair
  vpc_security_group_ids = []

  tags = {
    Name = var.name
  }

}

resource "aws_security_group" "elasticsearch" {
  name        = "elasticsearch"

  ingress {
  from_port   = 0
  to_port     = 0
  protocol    = -1
  cidr_blocks = ["0.0.0.0/0"]
}

  ingress {
  from_port   = 9200
  to_port     = 9200
  protocol    = "tcp"
  cidr_blocks = ["0.0.0.0/0"]
}

  ingress {
  from_port   = 22
  to_port     = 22
  protocol    = "tcp"
  cidr_blocks = ["0.0.0.0/0"]
}

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = -1
    cidr_blocks = ["0.0.0.0/0"]
}
}
