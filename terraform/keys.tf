resource "aws_key_pair" "server" {
  key_name = "server"
  public_key = file("./keys/server.pem")
}
