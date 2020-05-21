resource "aws_instance" "kibana" {
  ami                    = var.ami-id
  iam_instance_profile   = var.iam-instance-profile
  instance_type          = var.instance-type
  key_name               = var.key-pair
  vpc_security_group_ids = []

  tags = {
    Name = var.name
  }

}

resource "aws_security_group" "kibana" {
  name        = "kibana"

  ingress {
  from_port   = 0
  to_port     = 0
  protocol    = -1
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
